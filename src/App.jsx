import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RouterPath from './Routes/RouterPath'
import TaskContextProvider from './context/TaskContext'

function App() {

  return (
    <div className="App">
      <TaskContextProvider>
        <BrowserRouter>
          <RouterPath/>
        </BrowserRouter>
      </TaskContextProvider>
    </div>
  )
}

export default App
