import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
import './App.css';
import Hospitals from './pages/Hospitals/Hospitals';

function App() {
  return (
    <div className="">
      <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="Hospitals" element={<Hospitals />} />
      </Routes>
      </Router>
     
    </div>
  );
}

export default App;
