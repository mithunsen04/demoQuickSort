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
// import Signup from './Components/Signup';


function App() {
  return (
    <div className="App">
      <Navbar/>


      <MyCarousel/>
      
      <About/>
      {/* <Offer/> */}
      <StartWithAPI/>
      <Codeeditor/>
      <Priceing/>
      <Waitlist/>
      <Footer/>
      {/* <Signup/> */}
    </div>
  );
}

export default App;
