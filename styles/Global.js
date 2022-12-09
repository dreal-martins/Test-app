import { createGlobalStyle, css } from "styled-components";

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap');    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
    }
    body {
  background: ${({ theme }) => theme.colors.body};
  color: hsl(192, 100%, 9%);
  font-family: 'DM Sans', sans-serif;
}

a{
  text-decoration: none;
  color: inherit;
}

`;

export default GlobalStyles;
