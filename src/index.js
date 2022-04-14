
import { StrictMode } from "react"
import ReactDOM from 'react-dom'
import './index.css'
import App from './pages/App/App'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.render (
    <StrictMode>
        <App />
    </StrictMode>,document.getElementById('root')
)