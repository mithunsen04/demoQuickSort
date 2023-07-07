import React from 'react'
import Navbar from './Navbar';
import MyCarousel from './MyCarousel'

import About from './About';
import Offer from './Offer';
import StartWithAPI from './StartWithAPI';
import Waitlist from './Waitlist';
  import Footer from './Footer';
  import Priceing from './Priceing'
import Codeeditor from './CodeEditor';
//  import Signup from './Signup';
import Login from './Login';

import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

export default function Home() {
  return (
     <div>
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
{/* <Login/> */}
{/* <ForgotPassword/>
<ResetPassword/>  */}
    </div>
  )
}
