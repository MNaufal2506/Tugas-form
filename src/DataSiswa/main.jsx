import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DataApp from './StudentApp'
import './style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataApp/>
  </StrictMode>
)