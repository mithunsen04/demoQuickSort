import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import MyCarousel from './Components/MyCarousel'
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Components/About';
import Offer from './Components/Offer';
import StartWithAPI from './Components/StartWithAPI';
import Waitlist from './Components/Waitlist';
  import Footer from './Components/Footer';
  import Priceing from './Components/Priceing'
import Codeeditor from './Components/CodeEditor';
 import Signup from './Components/Signup';
import Login from './Components/Login';

import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyEmailForm from './Components/VerifyEmailForm';
import Sidebar from './Components/Sidebar.tsx';

function App() {
  return (
    <div className="App">
     {/* <Home/> */}
    {/* <Sidebar/> */}
     <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/otpverify"  element= {<VerifyEmailForm />} />
          
        
      </Routes>
    </BrowserRouter>

    </div>
  );
}

export default App;
