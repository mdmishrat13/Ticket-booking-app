import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./Conponants/About/About";
import AuthProvider, { AuthContext } from "./Conponants/contexts/AuthProvider/AuthProvider";
import Destinations from "./Conponants/Destinations/Destinations";
import Home from "./Conponants/Home/Home";
import Hotels from "./Conponants/Hotels/Hotels";
import Login from "./Conponants/Login/Login";
import Register from "./Conponants/Register/Register";
import Navbar from "./Conponants/Shared/Navbar";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </BrowserRouter>
     
    </div>
  );
}

export default App;
