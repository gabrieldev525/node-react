import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0%;
    padding: 0;
    height: 100%;
  }

  * {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-front-smoothing: antialiased;
  }
`

export const LightTheme = {
  bg: 'white',
  textColor: 'blue'
}

export const DarkTheme = {
  bg: 'black',
  textColor: 'red'
}