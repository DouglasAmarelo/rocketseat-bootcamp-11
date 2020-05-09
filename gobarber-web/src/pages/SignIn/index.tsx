import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import * as S from './styles';

const SignIn: React.FC = () => {
  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="Go Barber" />

        <form autoComplete="off">
          <h1>Faça seu Logon</h1>
          <input type="text" autoComplete="new-password" placeholder="E-mail" />

          <input
            type="password"
            autoComplete="new-password"
            placeholder="Senha"
          />

          <button type="submit">Entrar</button>

          <a href="/esqueci-minha-senha" title="Esqueci minha senha">
            Esqueci minha senha
          </a>
        </form>

        <a href="/criar-conta" title="Criar conta">
          <FiLogIn />
          Criar conta
        </a>
      </S.Content>

      <S.Background />
    </S.Container>
  );
};

export default SignIn;
