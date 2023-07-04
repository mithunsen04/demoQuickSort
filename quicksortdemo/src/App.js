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
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
{/* <Home/> */}

      <MyCarousel/>
      <About/>
      <Offer/>
      <StartWithAPI/>
      <Waitlist/>
      <Footer/>
    </div>
  );
}

export default App;
