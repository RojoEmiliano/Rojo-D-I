import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// Bootstrap se importa después de Tailwind a propósito: en algunos empates de
// especificidad (ej. `[type='submit']` de Tailwind vs `.btn-primary` de
// Bootstrap) gana el que carga último en la cascada.
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)