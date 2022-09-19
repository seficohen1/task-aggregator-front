import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RouterPath from './Routes/RouterPath'

function App() {

  return (
    <div className="App">
     <BrowserRouter>
      <RouterPath/>
     </BrowserRouter>
    </div>
  )
}

export default App
