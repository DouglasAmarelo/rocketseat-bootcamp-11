import styled from 'styled-components';

// Header
export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: #a8a8b3;
    display: flex;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #777;
    }
  }

  svg {
    margin-right: 5px;
  }
`;

// Repository Information
export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    align-items: center;
    display: flex;

    img {
      border-radius: 50%;
      height: 120px;
      width: 120px;
    }

    div {
      margin-left: 25px;

      strong {
        color: #3d3d4d;
        font-size: 36px;
      }

      p {
        color: #737380;
        font-size: 18px;
        margin-top: 5px;
      }
    }
  }

  ul {
    display: flex;
    margin: 40px 0 0 0;
    padding: 0;
    list-style: none;

    li + li {
      margin-left: 80px;
    }

    strong {
      color: #3d3d4d;
      display: block;
      font-size: 36px;
    }

    span {
      color: #6c6c80;
      display: block;
      margin-top: 5px;
    }
  }
`;

// Issues
export const Issues = styled.ul`
  list-style: none;
  margin: 80px 0 0 0;
  padding: 0;
`;

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
