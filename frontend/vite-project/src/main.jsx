import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: "100vw",
      height: "100vh"
    }}>
      <App />
    </div>
)
