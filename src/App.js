import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './App.css';
import Hospitals from './pages/Hospitals/Hospitals';
import Login from './pages/Login/Login/Login';
import Register from './pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import PrivateRoute from './pages/Login/PrivateRoute/PrivateRoute ';
import Dashboard from './pages/Dashboard/Dashboard/Dashboard';
import DashboardHome from './pages/Dashboard/DashboardHome/DashboardHome';
import Payment from './pages/Dashboard/Payment/Payment';
import Schools from './pages/Schools/Schools/Schools';
import Polices from './pages/Police/Polices';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route path="Hospitals" element={<Hospitals />} />
            <Route path="polices" element={<Polices />} />
            <Route path="schools" element={<Schools />} />
            <Route path="/dashboard" element={<PrivateRoute>
              <Dashboard />
            </PrivateRoute>} >

              <Route path="/dashboard" element={<DashboardHome />} />

              <Route path="/dashboard/payment/:AppointmentId" element={<Payment />} />

              {/* <Route path="/dashboard/makeAdmin" element={<AdminRoute>
                <MakeAdmin />
              </AdminRoute>} /> */}

              {/* <Route path="/dashboard/addDoctor" element={<AdminRoute>
                <AddDoctor />
              </AdminRoute>} /> */}

            </Route>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Routes>
        </Router>
      </AuthProvider>
      
     
    </div>
  );
}

export default App;
