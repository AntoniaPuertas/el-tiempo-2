import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { TiempoApp } from './components/TiempoApp'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TiempoApp />
  </StrictMode>,
)