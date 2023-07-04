// import React from 'react';
// import './About.css'

// const About = () => {
//   return (
//     <div className="container">
//         <br/>
//         <br/>
//       <h1 className="text-center mt-5 mb-4">QuickSort.AI: Empowering Your NLP Journey</h1>
//       <br/>
//       <br/>
//       <div className="row">
//         <div className="col-md-6">
//           <p className="text-justify">
//             Welcome to <strong>QuickSort.AI</strong>, where we are dedicated to empowering your Natural Language Processing (NLP) journey. As a leading provider of AI-powered NLP services, we strive to revolutionize the way businesses understand and interact with language data.
//           </p>
//           <p className="text-justify">
//             At QuickSort.AI, we understand the immense potential of NLP in unlocking valuable insights from textual data. Whether you're looking to extract key information, perform sentiment analysis, or automate language-related tasks, our state-of-the-art AI algorithms and cutting-edge technologies are designed to meet your needs.
//           </p>
//           <p className="text-justify">
//             Our team of experts is passionate about NLP and its transformative impact across various industries. With deep expertise in machine learning, data analysis, and linguistic understanding, we are committed to delivering accurate, efficient, and reliable NLP solutions tailored to your specific requirements.
//           </p>
//         </div>
//         <div className="col-md-6">
//           <img
//             src="https://kwantics.com/wp-content/uploads/2020/08/Kwantics_Blog-Banner-Image_Applications-of-Natural-Language-Understanding-01-1-2048x1284-1.png"
//             alt="QuickSort.AI"
//             className="img-fluid rounded"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;




import React from 'react';
import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';

const About = () => {
  return (
    <Box p={10}>
      <Heading textAlign="center" mt={5} mb={4} color='tomato'>
        QuickSort.AI: Empowering Your NLP Journey
      </Heading>
      <br/>
      <Flex direction={['column', 'column', 'row']} alignItems={['center', 'center', 'unset']}>
        <Box flex={['unset', 'unset', 1]} pr={[8, 8, 8]} >
          <Text textAlign={['center', 'center', 'justify']} mb={4}>
            Welcome to <strong>QuickSort.AI</strong>, where we are dedicated to empowering your Natural Language Processing (NLP) journey. As a leading provider of AI-powered NLP services, we strive to revolutionize the way businesses understand and interact with language data.
          </Text>
          <Text textAlign={['center', 'center', 'justify']} mb={4}>
            At QuickSort.AI, we understand the immense potential of NLP in unlocking valuable insights from textual data. Whether you're looking to extract key information, perform sentiment analysis, or automate language-related tasks, our state-of-the-art AI algorithms and cutting-edge technologies are designed to meet your needs.
          </Text>
          <Text textAlign={['center', 'center', 'justify']}>
            Our team of experts is passionate about NLP and its transformative impact across various industries. With deep expertise in machine learning, data analysis, and linguistic understanding, we are committed to delivering accurate, efficient, and reliable NLP solutions tailored to your specific requirements.
          </Text>
        </Box>
        <Box flex={['unset', 'unset', 1]}>
          <Image
            src="https://kwantics.com/wp-content/uploads/2020/08/Kwantics_Blog-Banner-Image_Applications-of-Natural-Language-Understanding-01-1-2048x1284-1.png"
            alt="QuickSort.AI"
            borderRadius="md"
            objectFit="cover"
            boxSize="full"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default About;
