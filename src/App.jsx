import './App.css'
import { BrowserRouter } from 'react-router-dom'
import RouterPath from './Routes/RouterPath'
import TaskContextProvider from './context/TaskContext'
import {AuthProvider} from './context/AuthContext'

function App() {

  return (
    <div className="App">
    <AuthProvider>
    <TaskContextProvider>
        <BrowserRouter>
          <RouterPath/>
        </BrowserRouter>
      </TaskContextProvider>
    </AuthProvider>
    </div>
  )
}

export default App
