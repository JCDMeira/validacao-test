import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root{
  --primary-color: #4A80ED;
  --secundary-color: #fff;
  --my-color: #f00;
}
 *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;

    textarea:focus, input:focus, select:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
}
  }

  html{
    font-size: 62.5%;
    font-family: 'Josefin Sans';
  }
`;

export const Conteiner = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--secundary-color);
`;
