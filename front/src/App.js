// React imports
import React, { useEffect, useState } from 'react'

// third imports
import styled, { ThemeProvider } from 'styled-components'

// local import
import { usePersistedState } from './utils'
import { LightTheme, DarkTheme } from './global-styles'


// styles
const Container = styled.div`
  background: ${props => props.theme.bg};
`
const Text = styled.span`
  color: ${props => props.theme.textColor};
`

const App = () => {
  const [response, setResponse] = useState('')
  const [theme, setTheme] = usePersistedState('theme', 'light')

  const callApi = async () => {
    const response = await fetch('/api/mensagem')
    const body = await response.json()
    return body
  }

  useEffect(() => {
    callApi()
    .then(res => setResponse(res.express))
    .catch(err => console.log(err))
  }, [])

  const handleSwitchTheme = () => {
    if(theme === 'light')
      setTheme('dark')
    else if(theme === 'dark')
      setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Container>
        <Text>{response}</Text>

        <button onClick={handleSwitchTheme}>
          {theme}
        </button>
      </Container>
    </ThemeProvider>
  );
}

export default App;
