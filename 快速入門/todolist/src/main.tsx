import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './w3_css/w3.css'
import './w3_css/w3-colors-2017.css'
import './w3_css/w3-colors-2018.css'
import './w3_css/w3-colors-2019.css'
import './w3_css/w3-colors-2020.css'
import './w3_css/w3-colors-2021.css'

// import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
