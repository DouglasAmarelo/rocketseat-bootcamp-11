import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationErrors';

import Input from '../../components/Input';
import Button from '../../components/Button';

import logo from '../../assets/logo.svg';

import * as S from './styles';

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('Email obrigatório')
          .email('Digite um email válido'),
        password: Yup.string().min(6, 'Mínimo 6 dígitos'),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErrors(error);
      formRef.current?.setErrors(errors);
    }

    console.log(data);
  }, []);

  return (
    <S.Container>
      <S.Background />
      <S.Content>
        <S.AnimatedContainer>
          <img src={logo} alt="Go Barber" />

          <Form ref={formRef} onSubmit={handleSubmit} autoComplete="off">
            <h1>Faça seu Cadastro</h1>

            <Input
              name="name"
              type="text"
              autoComplete="new-password"
              placeholder="Nome"
              icon={FiUser}
            />

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

            <Button type="submit">Cadastrar</Button>
          </Form>

          <Link to="/" title="Voltar para o logon">
            <FiArrowLeft />
            Voltar para o logon
          </Link>
        </S.AnimatedContainer>
      </S.Content>
    </S.Container>
  );
};

export default SignUp;
