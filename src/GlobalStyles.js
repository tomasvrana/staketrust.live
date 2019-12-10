import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  html {
    max-width: 100%;
    overflow-x: hidden;
    font-size: 62.5%;

    @media screen and (min-width: 2048px) {
      font-size: 100%;
    }
  }

  body {
    margin: 0;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.primary};
  }
`
