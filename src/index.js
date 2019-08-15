import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import App from './App'
import { TokenProvider } from './storage/token-context'
import { UserProvider } from './storage/user-context'

ReactDOM.render(
  <UserProvider>
    <TokenProvider>
      <App />
    </TokenProvider>
  </UserProvider>,
  document.getElementById('root'),
)
