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

import Home from './Components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerifyEmailForm from './Components/VerifyEmailForm';
import Resetdbpassword from './Components/Resedbtpassword';

import Playground from './Components/Playground';

import Sidebar from './Components/Sidebar.tsx'









function App() {
  return (
    <div className="App">
     {/* <Home/> */}
    
    
      <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/resetpassword" element={<Resetdbpassword/>} />
          <Route path="/otpverify"  element= {<VerifyEmailForm />} />
          <Route path="/playground"  element= {<Playground/>} />
          <Route path="/sidebar"  element= {<Sidebar/>} />
        
      </Routes>
    </BrowserRouter> 






{/* 
<BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
         
          <Route path="/comment" element={<Comment />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productList" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter> */}






    </div>
  );
}

export default App;
