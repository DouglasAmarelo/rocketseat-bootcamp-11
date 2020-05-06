import React, { useEffect, useState } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import api from '../../services/api';

import githubExplorerLogo from '../../assets/logo.svg';

import * as S from './styles';

interface RepositoryParams {
  repository: string;
}

interface Repository {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  const [repository, setRepository] = useState<Repository | null>(null);
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    const loadData = async (): Promise<void> => {
      api.get(`/repos/${params.repository}`).then(response => {
        setRepository(response.data);
      });
      api.get(`/repos/${params.repository}/issues`).then(response => {
        setIssues(response.data);
      });
    };

    loadData();
  }, [params.repository]);

  return (
    <>
      <S.Header>
        <img src={githubExplorerLogo} alt="GitHub Explorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          Voltar
        </Link>
      </S.Header>

      {repository && (
        <S.RepositoryInfo>
          <header>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>
          </header>

          <ul>
            <li>
              <strong>{repository.stargazers_count}</strong>
              <span>Stars</span>
            </li>
            <li>
              <strong>{repository.forks_count}</strong>
              <span>Forks</span>
            </li>
            <li>
              <strong>{repository.open_issues_count}</strong>
              <span>Issues abertas</span>
            </li>
          </ul>
        </S.RepositoryInfo>
      )}

      <S.Issues>
        {issues.map(issue => (
          <S.CardContainer key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noreferrer noopener">
              <div>
                <strong>{issue.title}</strong>
                <p>{`@${issue.user.login}`}</p>
              </div>

              <FiChevronRight size={20} />
            </a>
          </S.CardContainer>
        ))}
      </S.Issues>
    </>
  );
};

export default Repository;
