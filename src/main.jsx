import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const BACKEND_URL = "http://free3.daki.cc:4125";

fetch(`${BACKEND_URL}/story?word=magic&story=Once%20upon%20a%20time`)
  .then(res => res.json())
  .then(data => console.log(data));

