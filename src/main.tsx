import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider } from './contexts/User/UserProvider.tsx'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <UserProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
    </UserProvider>
  </React.StrictMode>,
)
