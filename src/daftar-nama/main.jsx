import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import DaftarNama from './DaftarNama'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DaftarNama/>
  </StrictMode>,
)