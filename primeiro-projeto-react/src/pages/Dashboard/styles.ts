import styled, { css } from 'styled-components';
import { shade } from 'polished';

// Title
export const Title = styled.h1`
  color: #3a3a3a;
  font-size: 48px;
  line-height: 56px;
  margin-top: 80px;
  max-width: 450px;
`;

// Form
interface FormProps {
  hasError: boolean;
}

export const Form = styled.form<FormProps>`
  display: flex;
  margin-top: 40px;
  max-width: 700px;

  input {
    border-radius: 5px 0 0 5px;
    border: 2px solid #fff;
    color: #3a3a3a;
    flex: 1;
    padding: 0 24px;

    ${({ hasError }) =>
      hasError &&
      css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  input,
  button {
    height: 70px;
  }

  button {
    background: #04d361;
    border-radius: 0 5px 5px 0;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;
    width: 210px;

    &:hover {
      background: ${shade(0.2, '#04d361')};
    }
  }
`;

// Repositories
export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;
`;

// Error
export const Error = styled.div`
  color: #c53030;
  margin-top: 8px;
`;
