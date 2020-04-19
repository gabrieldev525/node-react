import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [response, setResponse] = useState('')

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


  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <p className='App-intro'>{response}</p>
      </header>
    </div>
  );
}

export default App;
