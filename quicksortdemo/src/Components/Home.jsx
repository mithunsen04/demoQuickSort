import React from 'react'
import { useState } from 'react';
import Navbar from './Navbar';

import { useEffect } from 'react';
import About from './About';

import StartWithAPI from './StartWithAPI';
import Waitlist from './Waitlist';
  import Footer from './Footer';
  import Priceing from './Priceing'
import Codeeditor from './CodeEditor';


import Hero from './Hero';

export default function Home() {
  
  const [userName, setUserName] = useState('');
  //searech param ... token availavble or not...
  //if available save the token local storage. 
  // window.reload() reload the page..
  useEffect(() => {
    // Get the token parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
  
    if (token) {
      // Save the token to localStorage with the key 'token'
      localStorage.setItem('token', token);
  
      // Remove the token parameter from the URL
      const urlWithoutToken = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, urlWithoutToken);
  
      // Reload the page
      window.location.reload();
    }
  }, []);


  return (
     <div>
        <Navbar userName={userName} />

<Hero/>

 

 <About/>

 <StartWithAPI/>
<Codeeditor/>
<Priceing/>
<Waitlist/>
<Footer/>

    </div>
  )
}
