import { Header } from './components';
import './App.css';
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="home">
      <Header />
      <Outlet />
      
    </div>
  )
}

export default App
