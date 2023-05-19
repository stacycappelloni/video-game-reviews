import { createGlobalStyle } from 'styled-components'
// reference: https://stackoverflow.com/questions/65297617/how-to-make-an-elements-background-color-a-little-darker-using-css
const GlobalStyle = createGlobalStyle`
  html,
  body {
    background-color: #170029;
    color: #fff;
    margin: 0;
    padding-top: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    min-width: 100%;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  button:hover{
    transform: translateY(-2px);
    filter: brightness(90%);
  }

  button {
    transition: all 0.3s;
  }

  select:hover{
    transform: translateY(-2px);
    filter: brightness(93%);
  }

  select {
    transition: all 0.3s;
  }
`

export default GlobalStyle
