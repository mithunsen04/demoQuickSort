


// import { useState } from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Text,
//   Textarea,
//   Select,
// } from '@chakra-ui/react';
// import 'jodit/build/jodit.min.css';
// import JoditEditor from 'jodit-react';

// function Playground() {
//   // State variables
//   const [inputText, setInputText] = useState('');
//   const [outputText, setOutputText] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');

//   // Function to handle AI processing based on selected option
//   const processAI = () => {
//     // Perform AI processing here based on selected option
//     let processedText = '';

//     switch (selectedOption) {
//       case 'Generate Title':
//         processedText = `Generated Title: ${inputText}`;
//         break;
//       case 'Generate Hashtag':
//         processedText = `Generated Hashtag: ${inputText}`;
//         break;
//       case 'Generate Keywords':
//         processedText = `Generated Keywords: ${inputText}`;
//         break;
//       case 'Generate Summary':
//         processedText = `Generated Summary: ${inputText}`;
//         break;
//       default:
//         break;
//     }

//     // Update output text state
//     setOutputText(processedText);
//   };

//   // Jodit editor configuration
//   const editorConfig = {
//     showCharsCounter: false,
//     showWordsCounter: false,
//     showXPathInStatusbar: false,
//     buttons: 'bold,italic,underline,strikethrough,|,align,|,ul,ol,|,outdent,indent,|,link,|,undo,redo,|,source',
//   };

//   return (
//     <ChakraProvider>
//       <Box p={4} maxWidth="800px" margin="0 auto">
//         <Heading as="h1" mb={6} textAlign="center">
//           AI Playground
//         </Heading>

//         <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'stretch', md: 'flex-start' }}>
//           <Box mr={{ base: 0, md: 4 }} mb={{ base: 4, md: 0 }} boxShadow={'0 5px 20px 0px rgb(72 187 120 / 200%)'} >
//             <Select
//               placeholder="Select an option"
//               value={selectedOption}
//               onChange={(e) => setSelectedOption(e.target.value)}
//               mb={4}
              
//             >
//               <option value="Generate Title">Generate Title</option>
//               <option value="Generate Hashtag">Generate Hashtag</option>
//               <option value="Generate Keywords">Generate Keywords</option>
//               <option value="Generate Summary">Generate Summary</option>
//             </Select>

//             <Textarea
//               placeholder="Enter text to process"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//               mb={4}
//             />

//             <Button colorScheme="teal" onClick={processAI} mb={4}>
//               Process
//             </Button>
//           </Box>

//           {outputText && (
//             <Box flex="1">
//                 <style>{`.jodit-wysiwyg { color: black; }`}</style>
//               <JoditEditor value={outputText} onChange={setOutputText} config={editorConfig} />
//             </Box>
//           )}
//         </Flex>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default Playground;





//-----------------------------------------------------------------




// import { useState } from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Text,
//   Textarea,
//   Select,
// } from '@chakra-ui/react';
// import 'jodit/build/jodit.min.css';
// import JoditEditor from 'jodit-react';

// function Playground() {
//   // State variables
//   const [inputText, setInputText] = useState('');
//   const [outputText, setOutputText] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');

//   // Function to handle AI processing based on selected option
//   const processAI = () => {
//     // Perform AI processing here based on selected option
//     let processedText = '';

//     switch (selectedOption) {
//       case 'Generate Title':
//         processedText = `Generated Title: ${inputText}`;
//         break;
//       case 'Generate Hashtag':
//         processedText = `Generated Hashtag: ${inputText}`;
//         break;
//       case 'Generate Keywords':
//         processedText = `Generated Keywords: ${inputText}`;
//         break;
//       case 'Generate Summary':
//         processedText = `Generated Summary: ${inputText}`;
//         break;
//       default:
//         break;
//     }

//     // Update output text state
//     setOutputText(processedText);
//   };

//   // Jodit editor configuration
//   const editorConfig = {
//     showCharsCounter: false,
//     showWordsCounter: false,
//     showXPathInStatusbar: false,
//     buttons: 'bold,italic,underline,strikethrough,|,align,|,ul,ol,|,outdent,indent,|,link,|,undo,redo,|,source',
//   };

//   return (
//     <ChakraProvider>
//       <Box p={4} maxWidth="800px" margin="0 auto">
//         <Heading as="h1" mb={6} textAlign="center">
//           AI Playground
//         </Heading>

//         <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'stretch', md: 'flex-start' }}>
//           <Box
//             mr={{ base: 0, md: 4 }}
//             mb={{ base: 4, md: 0 }}
//             boxShadow="0 5px 20px 0px rgba(72, 187, 120, 0.8)"
//             p={4}
//             borderRadius="md"
//             flex="1"
//           >
//             <Select
//               placeholder="Select an option"
//               value={selectedOption}
//               onChange={(e) => setSelectedOption(e.target.value)}
//               mb={4}
//             >
//               <option value="Generate Title">Generate Title</option>
//               <option value="Generate Hashtag">Generate Hashtag</option>
//               <option value="Generate Keywords">Generate Keywords</option>
//               <option value="Generate Summary">Generate Summary</option>
//             </Select>

//             <Textarea
//               placeholder="Enter text to process"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//               mb={4}
//             />

//             <Button colorScheme="teal" onClick={processAI} mb={4}>
//               Process
//             </Button>
//           </Box>

//           {outputText && (
//             <Box flex="1" ml={{ base: 0, md: 4 }}>
//               <style>{`.jodit-wysiwyg { color: black; }`}</style>
//               <JoditEditor value={outputText} onChange={setOutputText} config={editorConfig} />
//             </Box>
//           )}
//         </Flex>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default Playground;



//--------------------------------------------------------------------------------------------------



// import { useState } from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Text,
//   Textarea,
//   Select,
// } from '@chakra-ui/react';
// import 'jodit/build/jodit.min.css';
// import JoditEditor from 'jodit-react';

// function Playground() {
//   // State variables
//   const [inputText, setInputText] = useState('');
//   const [outputText, setOutputText] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');

//   // Function to handle AI processing based on selected option
//   const processAI = () => {
//     // Perform AI processing here based on selected option
//     let processedText = '';

//     switch (selectedOption) {
//       case 'Generate Title':
//         processedText = `Generated Title: ${inputText}`;
//         break;
//       case 'Generate Hashtag':
//         processedText = `Generated Hashtag: ${inputText}`;
//         break;
//       case 'Generate Keywords':
//         processedText = `Generated Keywords: ${inputText}`;
//         break;
//       case 'Generate Summary':
//         processedText = `Generated Summary: ${inputText}`;
//         break;
//       default:
//         break;
//     }

//     // Update output text state
//     setOutputText(processedText);
//   };

//   // Jodit editor configuration
//   const editorConfig = {
//     showCharsCounter: false,
//     showWordsCounter: false,
//     showXPathInStatusbar: false,
//     buttons: 'bold,italic,underline,strikethrough,|,align,|,ul,ol,|,outdent,indent,|,link,|,undo,redo,|,source',
//   };

//   return (
//     <ChakraProvider>
//       <Box p={4} maxWidth="800px" margin="0 auto">
//         <Heading as="h1" mb={6} textAlign="center">
//           AI Playground
//         </Heading>

//         <Flex direction={{ base: 'column', md: 'row' }} align={{ base: 'stretch', md: 'flex-start' }}>
//           <Box
//             mr={{ base: 0, md: 4 }}
//             mb={{ base: 4, md: 0 }}
//             boxShadow="0 5px 20px 0px rgba(72, 187, 120, 0.8)"
//             p={4}
//             borderRadius="md"
//             flex="1"
//           >
//             <Select
//               placeholder="Select an option"
//               value={selectedOption}
//               onChange={(e) => setSelectedOption(e.target.value)}
//               mb={4}
//             >
//               <option value="Generate Title">Generate Title</option>
//               <option value="Generate Hashtag">Generate Hashtag</option>
//               <option value="Generate Keywords">Generate Keywords</option>
//               <option value="Generate Summary">Generate Summary</option>
//             </Select>

//             <Textarea
//               placeholder="Enter text to process"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//               mb={4}
//             />

//             <Button colorScheme="teal" onClick={processAI} mb={4}>
//               Process
//             </Button>
//           </Box>

//           {outputText && (
//             <Box flex="1" ml={{ base: 0, md: 4 }}>
//               <style>{`.jodit-wysiwyg { color: black; } .jodit-container .jodit-wysiwyg, .jodit-container.jodit-focus .jodit-wysiwyg { min-height: 400px; min-width: 100%; }`}</style>
//               <JoditEditor value={outputText} onChange={setOutputText} config={editorConfig} />
//             </Box>
//           )}
//         </Flex>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default Playground;



//-------------------------------------------------------------------------------------


// import { useState } from 'react';
// import {
//   ChakraProvider,
//   Box,
//   Button,
//   Flex,
//   Heading,
//   Input,
//   Text,
//   Textarea,
//   Select,
// } from '@chakra-ui/react';
// import 'jodit/build/jodit.min.css';
// import JoditEditor from 'jodit-react';

// function Playground() {
//   // State variables
//   const [inputText, setInputText] = useState('');
//   const [outputText, setOutputText] = useState('');
//   const [selectedOption, setSelectedOption] = useState('');

//   // Function to handle AI processing based on selected option
//   const processAI = () => {
//     // Perform AI processing here based on selected option
//     let processedText = '';

//     switch (selectedOption) {
//       case 'Generate Title':
//         processedText = `Generated Title: ${inputText}`;
//         break;
//       case 'Generate Hashtag':
//         processedText = `Generated Hashtag: ${inputText}`;
//         break;
//       case 'Generate Keywords':
//         processedText = `Generated Keywords: ${inputText}`;
//         break;
//       case 'Generate Summary':
//         processedText = `Generated Summary: ${inputText}`;
//         break;
//       default:
//         break;
//     }

//     // Update output text state
//     setOutputText(processedText);
//   };

//   // Jodit editor configuration
//   const editorConfig = {
//     showCharsCounter: false,
//     showWordsCounter: false,
//     showXPathInStatusbar: false,
//     buttons: 'bold,italic,underline,strikethrough,|,align,|,ul,ol,|,outdent,indent,|,link,|,undo,redo,|,source',
//   };

//   return (
//     <ChakraProvider>
//       <Box p={4} maxWidth="800px" margin="0 auto">
//         <Heading as="h1" mb={6} textAlign="center">
//           AI Playground
//         </Heading>

//         <Flex
//           direction={{ base: 'column', md: 'row' }}
//           align={{ base: 'stretch', md: 'flex-start' }}
//           spacing={{ base: 4, md: 0 }}
//           flexWrap="wrap"
//         >
//           <Box
//             width={{ base: '100%', md: 'auto' }}
//             boxShadow="0 5px 20px 0px rgba(72, 187, 120, 0.8)"
//             p={4}
//             borderRadius="md"
//             flex="1"
//             mb={{ base: 4, md: 0 }}
//           >
//             <Select
//               placeholder="Select an option"
//               value={selectedOption}
//               onChange={(e) => setSelectedOption(e.target.value)}
//               mb={4}
//             >
//               <option value="Generate Title">Generate Title</option>
//               <option value="Generate Hashtag">Generate Hashtag</option>
//               <option value="Generate Keywords">Generate Keywords</option>
//               <option value="Generate Summary">Generate Summary</option>
//             </Select>

//             <Textarea
//               placeholder="Enter text to process"
//               value={inputText}
//               onChange={(e) => setInputText(e.target.value)}
//               mb={4}
//             />

//             <Button colorScheme="teal" onClick={processAI} mb={4}>
//               Process
//             </Button>
//           </Box>

//           {outputText && (
//             <Box
//               width={{ base: '100%', md: 'auto' }}
//               ml={{ base: 0, md: 4 }}
//               flex="1"
//               mb={{ base: 4, md: 0 }}
//             >
//               <style>{`.jodit-wysiwyg { color: black; } .jodit-container .jodit-wysiwyg, .jodit-container.jodit-focus .jodit-wysiwyg { min-height: 400px; min-width: 100%; }`}</style>
//               <JoditEditor value={outputText} onChange={setOutputText} config={editorConfig} />
//             </Box>
//           )}
//         </Flex>
//       </Box>
//     </ChakraProvider>
//   );
// }

// export default Playground;



//--------------------------------------------------------------------------------



import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  Button,
  Flex,
  Heading,
  Input,
  Text,
  Textarea,
  Select,
} from '@chakra-ui/react';
import 'jodit/build/jodit.min.css';
import JoditEditor from 'jodit-react';

function Playground() {
  // State variables
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  // Function to handle AI processing based on selected option
  const processAI = () => {
    // Perform AI processing here based on selected option
    let processedText = '';

    switch (selectedOption) {
      case 'Generate Title':
        processedText = `Generated Title: ${inputText}`;
        break;
      case 'Generate Hashtag':
        processedText = `Generated Hashtag: ${inputText}`;
        break;
      case 'Generate Keywords':
        processedText = `Generated Keywords: ${inputText}`;
        break;
      case 'Generate Summary':
        processedText = `Generated Summary: ${inputText}`;
        break;
      default:
        break;
    }

    // Update output text state
    setOutputText(processedText);
  };

  // Jodit editor configuration
  const editorConfig = {
    showCharsCounter: false,
    showWordsCounter: false,
    showXPathInStatusbar: false,
    buttons: 'bold,italic,underline,strikethrough,|,align,|,ul,ol,|,outdent,indent,|,link,|,undo,redo,|,source',
  };

  return (
    <ChakraProvider>
      <Box p={4} maxWidth="800px" margin="0 auto">
        <Heading as="h1" mb={6} textAlign="center" color={'orange.400'} >
          QuickSort AI Playground
        </Heading>

        <Flex
          direction="column"
          align="stretch"
          spacing={4}
        >
          <Box
            boxShadow="0 5px 20px 0px rgba(72, 187, 120, 0.8)"
            p={4}
            borderRadius="md"
            mb={4}
          >
            <Select
              placeholder="Select an option"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
              mb={4}
            >
              <option value="Generate Title">Generate Title</option>
              <option value="Generate Hashtag">Generate Hashtag</option>
              <option value="Generate Keywords">Generate Keywords</option>
              <option value="Generate Summary">Generate Summary</option>
            </Select>

            <Textarea
              placeholder="Enter text to process"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              mb={4}
            />

            <Button colorScheme="teal" onClick={processAI} mb={4}>
              Process
            </Button>
          </Box>

          {outputText && (
            <Box
              boxShadow="0 5px 20px 0px rgba(72, 187, 120, 0.8)"
              p={4}
              borderRadius="md"
              mb={4}
            >
              <style>{`.jodit-wysiwyg { color: black; } .jodit-container .jodit-wysiwyg, .jodit-container.jodit-focus .jodit-wysiwyg { min-height: 400px; min-width: 100%; }`}</style>
              <JoditEditor value={outputText} onChange={setOutputText} config={editorConfig} />
            </Box>
          )}
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default Playground;
