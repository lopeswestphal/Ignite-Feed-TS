import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

// Quando e preciso botar ordem no TS kk, falando quando o elemento vai existir.
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
