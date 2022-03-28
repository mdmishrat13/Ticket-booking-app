import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./Conponants/About/About";
import AuthProvider, { AuthContext } from "./Conponants/contexts/AuthProvider/AuthProvider";
import Dashboard from "./Conponants/Dashboard/Dashboard/Dashboard";
import Destinations from "./Conponants/Destinations/Destinations";
import Home from "./Conponants/Home/Home";
import Comments from "./Conponants/HotelDetails/Comments";
import Conditions from "./Conponants/HotelDetails/Conditions";
import Details from "./Conponants/HotelDetails/Details";
import Facilities from "./Conponants/HotelDetails/Facilities";
import HotelDetails from "./Conponants/HotelDetails/HotelDetails";
import Hotels from "./Conponants/Hotels/Hotels";
import Login from "./Conponants/Login/Login";
import Register from "./Conponants/Register/Register";
import Navbar from "./Conponants/Shared/Navbar";
import Addhotel from "./Conponants/Dashboard/Pages/Addhotel";
import Allhotel from "./Conponants/Dashboard/Pages/Allhotel"
import Bookingrequests from "./Conponants/Dashboard/Pages/Bookingrequests"
import Alldestination from "./Conponants/Dashboard/Pages/Alldestination"
import Adddestination from "./Conponants/Dashboard/Pages/Adddestination"
import Admins from "./Conponants/Dashboard/Pages/Admins"

function App() {
  return (
    <div className="App">
      
      <AuthProvider>
      <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path="/" element={<Navigate to='home'/>}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:id" element={<HotelDetails/>} >
                <Route index element={<Details />} />
                <Route path="details" element={<Details />} />
                <Route path="comments" element={<Comments />} />
                <Route path="facilities" element={<Facilities />} />
                <Route path="conditions" element={<Conditions />} />
            </Route>
            <Route path="/destinations" element={<Destinations />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={ <Allhotel/>}/>
              <Route path='allhotel' element={ <Allhotel/>}/>
              <Route path='addhotel' element={ <Addhotel/>}/>
              <Route path='bookingrequests' element={ <Bookingrequests/>}/>
              <Route path='alldestination' element={ <Alldestination/>}/>
              <Route path='adddestination' element={ <Adddestination/>}/>
              <Route path='admins' element={ <Admins/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
     
    </div>
  );
}

export default App;
