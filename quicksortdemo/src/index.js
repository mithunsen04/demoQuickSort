import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider , extendTheme} from '@chakra-ui/react'


// Define a custom theme with dark mode enabled
const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: 'dark',
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 
  <ChakraProvider theme={theme} >
     <App />
  </ChakraProvider>


);

reportWebVitals();
