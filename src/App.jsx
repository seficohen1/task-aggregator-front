import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RouterPath from "./Routes/RouterPath";
import TaskContextProvider from "./context/TaskContext";
import { AuthProvider } from "./context/AuthContext";
import EmployeeProvider from "./context/EmployeeContex";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <EmployeeProvider>
          <TaskContextProvider>
            <BrowserRouter>
              <RouterPath />
            </BrowserRouter>
          </TaskContextProvider>
        </EmployeeProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
