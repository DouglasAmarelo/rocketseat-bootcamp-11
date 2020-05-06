import styled from 'styled-components';

export const CardContainer = styled.section`
  margin-bottom: 20px;

  a {
    align-items: center;
    background: #fff;
    border-radius: 5px;
    display: flex;
    padding: 24px;
    text-decoration: none;
    transition: transform 0.2s;
    width: 100%;

    &:hover {
      transform: translateX(10px);
    }
  }

  img {
    border-radius: 50%;
    display: block;
    height: 65px;
    width: 65px;
  }

  div {
    margin: 0 15px;
    flex: 1;
  }

  strong {
    color: #3d3d4d;
    font-size: 20px;
  }

  p {
    color: #a8a8b3;
    font-size: 18px;
    margin-top: 4px;
  }

  svg {
    color: #cbcbd6;
    margin-left: auto;
  }
`;
