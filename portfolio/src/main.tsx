/*memasukan aplikasi React ke root element HTML*/
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "./styles/variables.css";
import App from './app/App.tsx'
import "./styles/variables.css";
import "./index.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
