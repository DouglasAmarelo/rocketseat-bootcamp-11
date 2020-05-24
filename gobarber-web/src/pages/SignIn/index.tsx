import React, { useRef, useCallback, useContext } from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import { AuthContext } from '../../context/AuthContext';
import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

import * as S from './styles';

type SignInFormData = {
  email: string;
  password: string;
};

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useContext(AuthContext);

  const handleSubmit = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email obrigatório')
            .email('Digite um email válido'),
          password: Yup.string().required('Senha obrigatória'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        signIn({
          email: data.email,
          password: data.password,
        });
      } catch (error) {
        const errors = getValidationErrors(error);
        formRef.current?.setErrors(errors);
      }

      console.log(data);
    },
    [signIn]
  );

  return (
    <S.Container>
      <S.Content>
        <img src={logo} alt="Go Barber" />

        <Form ref={formRef} autoComplete="off" onSubmit={handleSubmit}>
          <h1>Faça seu Logon</h1>

          <Input
            name="email"
            type="text"
            autoComplete="new-password"
            placeholder="E-mail"
            icon={FiMail}
          />

          <Input
            name="password"
            type="password"
            autoComplete="new-password"
            placeholder="Senha"
            icon={FiLock}
          />

          <Button type="submit">Entrar</Button>

          <a href="/esqueci-minha-senha" title="Esqueci minha senha">
            Esqueci minha senha
          </a>
        </Form>

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