import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './views/App'
import ContextTabBookTicketsPlaying from './components/pages/BookTickets/TabBookTickets/ContextTabBookTicketsPlaying'
import RenderGetWindowResize from './views/RenderGetWindowResize'
import UseContextAuth from './contexts/AuthContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UseContextAuth>
    <ContextTabBookTicketsPlaying>
        <RenderGetWindowResize>
          <App />
        </RenderGetWindowResize>
    </ContextTabBookTicketsPlaying>
  </UseContextAuth>
  // </React.StrictMode>
)
