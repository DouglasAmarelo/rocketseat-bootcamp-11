import styled from 'styled-components';

import signinBackground from '../../assets/sign-in-background.png';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  align-items: stretch;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  max-width: 700px;
  place-content: center;
  width: 100%;

  form {
    margin: 80px 0;
    max-width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    input {
      background: #232129;
      border-radius: 10px;
      border: 2px solid #232129;
      height: 50px;
      margin-bottom: 8px;
      padding: 16px;
      width: 100%;
    }

    button {
      background: #ff9000;
      border-radius: 10px;
      border: none;
      color: #312e38;
      font-weight: 500;
      height: 56px;
      margin: 8px 0;
      padding: 16px;
      width: 100%;
    }
  }
`;

export const Background = styled.div`
  background: url(${signinBackground}) center center no-repeat;
  background-size: cover;
  flex: 1;
`;
