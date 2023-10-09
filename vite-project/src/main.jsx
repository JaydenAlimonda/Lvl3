import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Nav from './components/Nav.jsx'
import Body from './components/Body.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Body />
  </React.StrictMode>,
)
