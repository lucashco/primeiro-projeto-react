import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  max-width: 450px;
  line-height: 56px;
  margin-top: 80px;
`;

export const Form = styled.form<FormProps>`
  margin-top: 40px;
  max-width: 700px;

  display: flex;

  input {
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border-radius: 5px 0 0 5px;
    border: 0;
    color: #a3a3a3;
    border: 2px solid #fff;

    ${(props) =>
      props.hasError &&
      css`
        border-color: #f00;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 240px;
    height: 70px;
    border: 0;
    border-radius: 0 5px 5px 0;
    background-color: #04d361;
    color: #fff;
    font-weight: bold;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: ${shade(0.2, '#04d361')};
    }
  }
`;

export const Error = styled.span`
  color: #f00;
  display: block;
  margin-top: 8px;
`;

export const Repositories = styled.div`
  margin-top: 80px;
  max-width: 700px;

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

    img {
      width: 64px;
      height: 64px;
      border-radius: 50%;
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
