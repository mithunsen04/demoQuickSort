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



import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const CodeEditor = () => {
  return (
    <>
    <br/>
    <br/>
    <br/>
    <Flex direction={['column', 'row']}   boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'} >
      <Box p={4} flex={1}  align='left' pl={'100px'} pr={'80px'}>
        <Text fontSize={['xl', '2xl']} fontWeight="bold" mb={6} textAlign="left">
          Integrate power of Large <br /> Language Models
          
          into your builds
        </Text>
        <Text mb={2} textAlign="left" color={'gray.400'} >
          We’ve built a platform that can be used in different libraries that fit in <br/>  every stack. No matter what your experience of ML is, get started by visiting <br/> our Playground or reading our documentation.
        </Text>
        <be/>
        <br/>
        <Button colorScheme="blue" mb={4} _hover={{ opacity: 0.8 }}>
          Explore More
        </Button>
      </Box>
      <Box p={4} flex={1}>
        <Flex direction="column"   boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}>
          <Flex justifyContent="space-between" pr={['20px', '40px']} alignItems="center">
            <Button variant="ghost" _hover={{ background: 'pink.800' }}>Node.js</Button>
            <Button variant="ghost" _hover={{ background: 'pink.800' }}>Javascript</Button>
            <Button variant="ghost" _hover={{ background: 'pink.800' }}>Java</Button>
            <Button variant="ghost" _hover={{ background: 'pink.800' }}>Python</Button>
            <Button variant="ghost" _hover={{ background: 'pink.800' }}>PHP</Button>
            <Button variant="ghost" _hover={{ background: 'pink.800' }}>C#</Button>
          </Flex>
        </Flex>
      </Box>
    </Flex>
    </>
  );
  
};

export default CodeEditor;




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




