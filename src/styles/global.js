import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    outline: none;
  }

  :root{
    font-size: 62.5%;
  }

  body{
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    -webkit-font-smooothing: antialiased;
  }

  body, input, button, textarea{
    font-family: 'Roboto Slab', serif;
    font-size: 1.6rem;
  }
  button:hover{
    cursor: pointer;
  }
`;
