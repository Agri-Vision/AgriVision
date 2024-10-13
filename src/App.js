import './App.css'
import { BrowserRouter } from 'react-router-dom'
import IndexRoutes from './routes'
import PopUpContext from './context/PopUpContext'
import { useState } from 'react'

function App() {
  const [showConfirmation, setShowConfirmation] = useState(false)

  return (
    <div className="App">
      <PopUpContext.Provider value={{ showConfirmation, setShowConfirmation }}>
        <BrowserRouter>
          <IndexRoutes />
        </BrowserRouter>
      </PopUpContext.Provider>
    </div>
  )
}

export default App
