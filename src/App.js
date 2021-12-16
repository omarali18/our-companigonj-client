import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './App.css';
import Hospitals from './pages/Hospitals/Hospitals';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="Hospitals" element={<Hospitals />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>
      
     
    </div>
  );
}

export default App;
