// React imports
import React from 'react'
import ReactDOM from 'react-dom'

// Project imports
import App from './App'
import { GlobalStyle } from './global-styles'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);