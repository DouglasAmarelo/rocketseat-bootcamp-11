import React, { useEffect, useState, FormEvent } from 'react';

import api from '../../services/api';

import RepositoryCard from '../../components/RepositoryCard';

import githubExplorerLogo from '../../assets/logo.svg';

import * as S from './styles';

interface Repository {
  id: number;
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const STORAGE_REPOSITORY = '@:GitHubExplorer:repositories';
  const [userInputRepository, setUserInputRepository] = useState('');
  const [inputError, setInputError] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>(() => {
    const storageRepositories = localStorage.getItem(STORAGE_REPOSITORY);

    if (!storageRepositories) return [];

    return JSON.parse(storageRepositories);
  });

  const getRepositories = async (repositoryName: string): Promise<void> => {
    try {
      const response = await api.get<Repository>(`/repos/${repositoryName}`);
      const newRepositorie = response.data;

      setRepositories([...repositories, newRepositorie]);
      setUserInputRepository('');
      setInputError('');
    } catch (error) {
      setInputError(
        'Repositório não encontrado. Verifique a informação digitada ou tente novamente.'
      );
    }
  };

  const handleRepository = async (
    e: FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    if (!userInputRepository) {
      setInputError('Digite o autor/nome do repositório');
      return;
    }

    await getRepositories(userInputRepository);
  };

  useEffect(() => {
    localStorage.setItem(STORAGE_REPOSITORY, JSON.stringify(repositories));
  }, [repositories]);

  return (
    <>
      <img src={githubExplorerLogo} alt="GitHub Explorer" />
      <S.Title>Explore repositórios no GitHub</S.Title>

      <S.Form hasError={!!inputError} onSubmit={handleRepository}>
        <input
          value={userInputRepository}
          onChange={e => setUserInputRepository(e.target.value)}
          type="text"
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </S.Form>

      {inputError && <S.Error>{inputError}</S.Error>}

      <S.Repositories>
        {repositories.map(repository => (
          <RepositoryCard
            key={repository.id}
            fullName={repository.full_name}
            description={repository.description}
            link={`/repositories/${repository.full_name}`}
            image={repository.owner.avatar_url}
            login={repository.owner.login}
          />
        ))}
      </S.Repositories>
    </>
  );
};

export default Dashboard;
