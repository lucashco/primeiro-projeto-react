import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #a8a8b3;
    transition: color ease-in-out 0.2s;

    &:hover {
      color: #667;
    }
  }

  svg {
    margin-right: 4px;
  }
`;

export const RepositoryInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
  ul {
    display: flex;
    margin-top: 40px;
    list-style: none;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3d3d4d;
      }
      span {
        display: block;
        margin-top: 4px;
        font-size: 18px;
        color: #737380;
        margin-top: 4px;
      }
    }
  }
`;

export const Issues = styled.div`
  margin-top: 80px;

  a {
    width: 100%;
    background-color: #fff;
    padding: 24px;
    border-radius: 5px;
    text-decoration: none;
    display: flex;
    align-items: center;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translate3d(10px, 0, 0);
    }

    & + a {
      /* aplica estilo para os a que tem um a como precedente */
      margin-top: 16px;
    }

    div {
      margin: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }
      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`;
