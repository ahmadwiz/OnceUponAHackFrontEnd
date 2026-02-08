import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

const API_URL = "https://onceuponahack.onrender.com/";

async function getData() {
  const res = await fetch(`${API_URL}/endpoint`);
  const data = await res.json();
  console.log(data);
}

getData();
