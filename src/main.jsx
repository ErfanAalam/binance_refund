import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import BinanceReport from './Components/BinanceReport.jsx'

createRoot(document.getElementById('root')).render(

  <Router>
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/report" element={<BinanceReport/>} />
  </Routes>
</Router>
)
