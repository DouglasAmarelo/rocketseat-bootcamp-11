import styled, { keyframes } from 'styled-components';

import signupBackground from '../../assets/sign-up-background.png';

export const Container = styled.div`
  align-items: stretch;
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  overflow: hidden;
  place-content: center;
  width: 100%;
`;

const SlideFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedContainer = styled.div`
  align-items: center;
  animation: ${SlideFromRight} 1s;
  display: flex;
  flex-direction: column;
  padding: 2em 1em;
  place-content: center;
  width: 100%;

  form {
    margin: 80px 0;
    max-width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 24px;
      text-decoration: none;
      transition: color 0.2s;

      &:hover {
        color: #ccc;
      }
    }
  }

  & > a {
    align-items: center;
    color: #f4ede8;
    display: flex;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    svg {
      display: block;
      margin-right: 16px;
    }

    &:hover {
      color: #cacaca;
    }
  }
`;

export const Background = styled.div`
  background: url(${signupBackground}) center center no-repeat;
  background-size: cover;
  flex: 1;
`;
