// import React, { useState } from 'react';
// import { Box, Flex, Text, Button, Code, Select } from '@chakra-ui/react';

// const CodeEditor = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('');

//   const handleLanguageChange = (event) => {
//     setSelectedLanguage(event.target.value);
//   };

//   const renderOutput = () => {
//     switch (selectedLanguage) {
//       case 'node':
//         return (
//           <Code p={4} mt={4} bg="white" borderRadius="md">
//             // Output for Node.js
//           </Code>
//         );
//       case 'javascript':
//         return (
//           <Code p={4} mt={4} bg="white" borderRadius="md">
//             // Output for JavaScript
//           </Code>
//         );
//       case 'java':
//         return (
//           <Code p={4} mt={4} bg="white" borderRadius="md">
//             // Output for Java
//           </Code>
//         );
//       case 'python':
//         return (
//           <Code p={4} mt={4} bg="white" borderRadius="md">
//             // Output for Python
//           </Code>
//         );
//       case 'php':
//         return (
//           <Code p={4} mt={4} bg="white" borderRadius="md">
//             // Output for PHP
//           </Code>
//         );
//       case 'csharp':
//         return (
//           <Code p={4} mt={4} bg="white" borderRadius="md">
//             // Output for C#
//           </Code>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <Flex direction={['column', 'row']}>
//       <Box p={4} flex={1}>
//         <Text fontSize="xl" fontWeight="bold" mb={4}>
//           Integrate power of
//           <br />
//           Large Language Models
//           <br />
//           into your builds
//         </Text>
//         <Text mb={6}>
//           We’ve built a platform that can be used in different libraries that <br/>fit in every stack. No matter what your experience of ML is, get started by visiting our Playground or reading our documentation.
//         </Text>
//         <Button colorScheme="blue" mb={4}>
//           Explore More
//         </Button>
      
        
//       </Box>
//       <Box p={4} flex={1} >
//         <Flex direction="column">
//           {/* <Text fontSize="xl" fontWeight="bold" mb={4}>
//             Code Editor
//           </Text> */}
//           <Flex justifyContent="space-between">
//             <Button>Node.js</Button>
//             <Button>Javascript</Button>
//             <Button>Java</Button>
//             <Button>Python</Button>
//             <Button>PHP</Button>
//             <Button>C#</Button>
//           </Flex>
//         </Flex>
//       </Box>
//     </Flex>
//   );
// };

// export default CodeEditor;




// import React from 'react';
// import { Box, Flex, Text, Button } from '@chakra-ui/react';

// const CodeEditor = () => {
//   return (
//     <>
//     <br/>
//     <br/>
//     <br/>
//     <br/>
//     <Flex direction={['column', 'row']}>
//       <Box p={4} flex={1} pl={'80px'} align='left'>
//         <Text fontSize="2xl" fontWeight="bold" mb={6} textAlign="left">
//           Integrate power of
//           <br />
//           Large Language Models
//           <br />
//           into your builds
//         </Text>
//         <Text mb={2} textAlign="left" >
//           We’ve built a platform that can be used in different libraries that fit in every stack. No matter what your experience of ML is, get started by visiting our Playground or reading our documentation.
//         </Text>
//         <br/>
//         <br/>
//         <Button colorScheme="blue" mb={4} >
//           Explore More
//         </Button>
//       </Box>
//       <Box p={4} flex={1}>
//         <Flex direction="column">
          
//           <Flex justifyContent="space-between" pr={'40px'}>
//             <Button>Node.js</Button>
//             <Button>Javascript</Button>
//             <Button>Java</Button>
//             <Button>Python</Button>
//             <Button>PHP</Button>
//             <Button>C#</Button>
//           </Flex>
//         </Flex>
//       </Box>
//     </Flex>
//     <br/>
//     <br/>
//     </>
//   );
// };

// export default CodeEditor;



// import React from 'react';
// import { Box, Flex, Text, Button } from '@chakra-ui/react';

// const CodeEditor = () => {
//   return (
//     <>
//     <br/>
//     <br/>
//     <br/>
//     <Flex direction={['column', 'row']}   boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'} >
//       <Box p={4} flex={1}  align='left' pl={'100px'} pr={'80px'}>
//         <Text fontSize={['xl', '2xl']} fontWeight="bold" mb={6} textAlign="left">
//           Integrate power of Large <br /> Language Models
          
//           into your builds
//         </Text>
//         <Text mb={2} textAlign="left" color={'gray.400'} >
//           We’ve built a platform that can be used in different libraries that fit in <br/>  every stack. No matter what your experience of ML is, get started by visiting <br/> our Playground or reading our documentation.
//         </Text>
//         <be/>
//         <br/>
//         <Button colorScheme="blue" mb={4} _hover={{ opacity: 0.8 }}>
//           Explore More
//         </Button>
//       </Box>
//       <Box p={4} flex={1}>
//         <Flex direction="column"   boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}>
//           <Flex justifyContent="space-between" pr={['20px', '40px']} alignItems="center">
//             <Button variant="ghost" _hover={{ background: 'pink.800' }}>Node.js</Button>
//             <Button variant="ghost" _hover={{ background: 'pink.800' }}>Javascript</Button>
//             <Button variant="ghost" _hover={{ background: 'pink.800' }}>Java</Button>
//             <Button variant="ghost" _hover={{ background: 'pink.800' }}>Python</Button>
//             <Button variant="ghost" _hover={{ background: 'pink.800' }}>PHP</Button>
//             <Button variant="ghost" _hover={{ background: 'pink.800' }}>C#</Button>
//           </Flex>
//         </Flex>
//       </Box>
//     </Flex>
//     </>
//   );
  
// };

// export default CodeEditor;

// use upper code -------------------------------------------------------------------------------------


// import React, { useState } from 'react';
// import { Box, Flex, Text, Button } from '@chakra-ui/react';
// import { CodeEditor } from 'codeeditor'; // Import the codeeditor component

// const CodeEditorComponent = () => {
//   const [selectedLanguage, setSelectedLanguage] = useState('Node.js'); // State to track the selected language

//   const handleLanguageChange = (language) => {
//     setSelectedLanguage(language);
//   };


  

//   return (
//     <Flex direction={['column', 'row']} boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)">
//       <Box p={4} flex={1} align="left" pl={'100px'} pr={'80px'}>
//         <Text fontSize={['xl', '2xl']} fontWeight="bold" mb={6} textAlign="left">
//           Integrate the power of Large <br /> Language Models into your builds
//         </Text>
//         <Text mb={2} textAlign="left" color="gray.400">
//           We’ve built a platform that can be used with different libraries that fit in every stack. No matter what
//           your experience with ML is, get started by visiting our Playground or reading our documentation.
//         </Text>
//         <br />
//         <br />
//         <Button colorScheme="blue" mb={4} _hover={{ opacity: 0.8 }}>
//           Explore More
//         </Button>
//       </Box>
//       <Box p={4} flex={1}>
//         <Flex direction="column" boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)">
//           <Flex justifyContent="space-between" pr={['20px', '40px']} alignItems="center">
//             <Button
//               variant="ghost"
//               _hover={{ background: 'pink.800' }}
//               onClick={() => handleLanguageChange('Node.js')}
//             >
//               Node.js
//             </Button>
//             <Button
//               variant="ghost"
//               _hover={{ background: 'pink.800' }}
//               onClick={() => handleLanguageChange('Javascript')}
//             >
//               Javascript
//             </Button>
//             <Button
//               variant="ghost"
//               _hover={{ background: 'pink.800' }}
//               onClick={() => handleLanguageChange('Java')}
//             >
//               Java
//             </Button>
//             <Button
//               variant="ghost"
//               _hover={{ background: 'pink.800' }}
//               onClick={() => handleLanguageChange('Python')}
//             >
//               Python
//             </Button>
//             <Button
//               variant="ghost"
//               _hover={{ background: 'pink.800' }}
//               onClick={() => handleLanguageChange('PHP')}
//             >
//               PHP
//             </Button>
//             <Button
//               variant="ghost"
//               _hover={{ background: 'pink.800' }}
//               onClick={() => handleLanguageChange('C#')}
//             >
//               C#
//             </Button>
//           </Flex>
//         </Flex>
//       </Box>
//       <Text mt={4} ml={4} color="blue.500" fontWeight="bold">
//         Selected Language: {selectedLanguage}
//       </Text>
//     </Flex>
//   );
// };

// export default CodeEditorComponent;

//---------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { Box, Flex, Text, Button ,} from '@chakra-ui/react';
import CodeEditor from '@uiw/react-textarea-code-editor';

     
 function Codeeditor (){
 const [code, setCode] = useState("jhgvjhgvjhvjlhkvjhlvjhvjhvjhvjhv");
 const [language, setLanguage] = useState('Javascript')
 useEffect(()=>{
    let val ;
    if(language==='Node.js'){
         val = ` 
        const headers = new Headers();
        headers.append("x-api-key", "YOUR_API_KEY");
        headers.append("Content-Type", "application/json");
    
        const body = JSON.stringify({
          "input": "text",
          "model": "generate_headline"
        });
    
        const requestOptions = {
          method: 'POST',
          headers,
          body,
          redirect: 'follow'
        };
    
        fetch("https://api.aitium.ai/v1/text", requestOptions)
          .then(response => response.text())
          .then(result => console.log(result))
          .catch(error => console.log('error', error));
        `
           } 
        else if(language==='C#'){
             val = `
             var client = new RestClient("https://api.aitium.ai/v1/text");
             client.Timeout = -1;
             var request = new RestRequest(Method.POST);
             request.AddHeader("x-api-key", "YOUR_API_KEY");
             request.AddHeader("Content-Type", "application/json");
             var body = @"{" + "
         " +
             @"    ""text"": ""text"", ""model"": ""generate_headline""
             @"}";
             request.AddParameter("application/json", body,  ParameterType.RequestBody);
             IRestResponse response = client.Execute(request);
             Console.WriteLine(response.Content);
             
            `
        }
       
        else if(language==='Ruby'){
            val = `
            require "uri"
            require "json"
            require "net/http"
        
            url = URI("https://api.aitium.ai/v1/text")
        
            http = Net::HTTP.new(url.host, url.port);
            request = Net::HTTP::Post.new(url)
            request["x-api-key"] = "YOUR_API_KEY"
            request["Content-Type"] = "application/json"
            request.body = JSON.dump({
              "input": "text",
              "model": "generate_headline"
            })
        
            response = http.request(request)
            puts response.read_body
            `
        }


        else if(language==='PHP'){
            val=`
            <?php
            $client = new Client();
            $headers = [
              'x-api-key' => 'YOUR_API_KEY',
              'Content-Type' => 'application/json'
            ];
            $body = '{
              "input": "text",
              "model": "generate_headline"
            }';
            $request = new Request('POST', 'https://api.aitium.ai/v1/text', $headers, $body);
            $res = $client->sendAsync($request)->wait();
            echo $res->getBody();
            `
        }


        else {
            val=` 
            const headers = new Headers();
            headers.append("x-api-key", "YOUR_API_KEY");
            headers.append("Content-Type", "application/json");
        
            const body = JSON.stringify({
              "input": "text",
              "model": "generate_headline"
            });
        
            const requestOptions = {
              method: 'POST',
              headers,
              body,
              redirect: 'follow'
            };
        
            fetch("https://api.aitium.ai/v1/text", requestOptions)
              .then(response => response.text())
              .then(result => console.log(result))
              .catch(error => console.log('error', error));
            `
        }





        setCode(val);
    }
 ,[language])
 const handleLanguageClick = (lang)=>{
    setLanguage(lang)
 }
 
  return (
    <>
      <br />
      <br />
      <br />
      <Flex direction={['column', 'row']} boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}>
        <Box p={4} flex={1} align="left" pl={'100px'} pr={'80px'}>
          <Text fontSize={['xl', '2xl']} fontWeight="bold" mb={6} textAlign="left">
            Integrate the power of Large <br /> Language Models into your builds
          </Text>
          <Text mb={2} textAlign="left" color={'gray.400'}>
            We’ve built a platform that can be used in different libraries that fit in <br /> every stack. No matter what your
            experience of ML is, get started by visiting <br /> our Playground or reading our documentation.
          </Text>
          <br />
          <br />
          <Button colorScheme="blue" mb={4} _hover={{ opacity: 0.8 }}>
            Explore More
          </Button>
        </Box>
<Box pr={'80px'}>
        <div>
<div>

        <Box>
        <Box p={4} flex={1}>
          <Flex direction="column" boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}>
            <Flex justifyContent="space-between" pr={['20px', '40px']} alignItems="center">
              <Button
                variant="ghost"
                _hover={{ background: 'pink.800' }}
                onClick={() => handleLanguageClick('Node.js')}
              >
                Node.js
              </Button>
              
              <Button
                variant="ghost"
                _hover={{ background: 'pink.800' }}
                onClick={() => handleLanguageClick('Ruby')}
              >
                Ruby
              </Button>
              <Button
                variant="ghost"
                _hover={{ background: 'pink.800' }}
                onClick={() => handleLanguageClick('Python')}
              >
                Python
              </Button>
              <Button
                variant="ghost"
                _hover={{ background: 'pink.800' }}
                onClick={() => handleLanguageClick('PHP')}
              >
                PHP
              </Button>
              <Button
                variant="ghost"
                _hover={{ background: 'pink.800' }}
                onClick={() => handleLanguageClick('C#')}
              >
                C#
              </Button>
            </Flex>
          </Flex>
        </Box>
        </Box>
        </div>
<div>
        <CodeEditor
        value={code}
        language={language==='Node.js' ? 'js' : language}
        placeholder="Please enter JS code."
        onChange={(evn) => setCode(evn.target.value)}
        padding={15}
        style={{
          fontSize: 12,
          
          fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        }}
        data-color-mode="dark"
      />
      </div>
      </div>
      </Box>
      </Flex>
      
       
  
    </>
  );
    }


export default Codeeditor;





//----------------------------------





