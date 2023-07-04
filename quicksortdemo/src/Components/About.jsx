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




// import React from 'react';
// import { Box, Heading, Text, Flex, Image } from '@chakra-ui/react';

// const About = () => {
//   return (
//     <Box p={10}>
//       <Heading textAlign="center" mt={5} mb={4} color='tomato'>
//         QuickSort.AI: Empowering Your NLP Journey
//       </Heading>
//       <br/>
//       <Flex direction={['column', 'column', 'row']} alignItems={['center', 'center', 'unset']}>
//         <Box flex={['unset', 'unset', 1]} pr={[8, 8, 8]} >
//           <Text textAlign={['center', 'center', 'justify']} mb={4}>
//             Welcome to <strong>QuickSort.AI</strong>, where we are dedicated to empowering your Natural Language Processing (NLP) journey. As a leading provider of AI-powered NLP services, we strive to revolutionize the way businesses understand and interact with language data.
//           </Text>
//           <Text textAlign={['center', 'center', 'justify']} mb={4}>
//             At QuickSort.AI, we understand the immense potential of NLP in unlocking valuable insights from textual data. Whether you're looking to extract key information, perform sentiment analysis, or automate language-related tasks, our state-of-the-art AI algorithms and cutting-edge technologies are designed to meet your needs.
//           </Text>
//           <Text textAlign={['center', 'center', 'justify']}>
//             Our team of experts is passionate about NLP and its transformative impact across various industries. With deep expertise in machine learning, data analysis, and linguistic understanding, we are committed to delivering accurate, efficient, and reliable NLP solutions tailored to your specific requirements.
//           </Text>
//         </Box>
//         <Box flex={['unset', 'unset', 1]}>
//           <Image
//             src="https://kwantics.com/wp-content/uploads/2020/08/Kwantics_Blog-Banner-Image_Applications-of-Natural-Language-Understanding-01-1-2048x1284-1.png"
//             alt="QuickSort.AI"
//             borderRadius="md"
//             objectFit="cover"
//             boxSize="full"
//           />
//         </Box>
//       </Flex>
//     </Box>
//   );
// };

// export default About;





// import React from 'react'
// import { Box, Heading, Text, Flex, Image,Container } from '@chakra-ui/react';




// export default function About() {
//   return (

//   <Container mt={'10%'} >
//   <Heading as='h1' size='10xl' noOfLines={3}>Empowering Your NLP Journey with QuickSort.AI</Heading>
//   </Container>
  

 
//   )
// }



import {
  Button,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export default function About() {
  return (
    <>
    <br/>
    <br/>
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={6} w={'full'} maxW={'lg'}>
          <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                
                zIndex: -1,
              }}>
              Empowering Your NLP Journey with  <Text color={'blue.400'} as={'span'}>QuickSort.AI</Text>
            </Text>
            <br />{' '}
            <Text color={'blue.400'} as={'span'}>
              {/* Design Projects */}
            </Text>{' '}
          </Heading>
          <Text fontSize={{ base: 'md', lg: 'lg' }} color={'gray.500'}>
          At QuickSort.AI, we understand the immense potential of NLP in unlocking valuable insights from textual data. Whether you're looking to extract key information, perform sentiment analysis, or automate language-related tasks, our state-of-the-art AI algorithms and cutting-edge technologies are designed to meet your needs.
          </Text>
          <Stack direction={{ base: 'column', md: 'row' }} spacing={4}>
            <Button
              rounded={'full'}
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}>
              Get Start With API
            </Button>
            <Button rounded={'full'}>How It Works</Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://global-uploads.webflow.com/636bdbebfc681f083e923f81/6423fda28b816251cadec9fb_668X375-Blog14-01.jpg'
          }
        />
      </Flex>
    </Stack>
    </>
  );
}




// //import Head from 'next/head';
// import {
//   Box,
//   Heading,
//   Container,
//   Text,
//   Button,
//   Stack,
//   Icon,
//   useColorModeValue,
//   createIcon,
// } from '@chakra-ui/react';

// export default function About() {
//   return (
//     <>
//       <Heading>
//         <link
//           href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
//           rel="stylesheet"
//         />
//       </Heading>

//       <Container maxW={'3xl'}>
//         <Stack
//           as={Box}
//           textAlign={'center'}
//           spacing={{ base: 8, md: 14 }}
//           py={{ base: 20, md: 36 }}>
//           <Heading
//             fontWeight={600}
//             fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
//             lineHeight={'110%'}>
//             Empowering Your NLP Journey with  <Text color={'blue.400'} as={'span'}>QuickSort.AI</Text> <br />
//             {/* <Text as={'span'} color={'green.400'}>
//               your audience
//             </Text> */}
//           </Heading>
//           <Text color={'gray.500'}>
//             Monetize your content by charging your most loyal readers and reward
//             them loyalty points. Give back to your loyal readers by granting
//             them access to your pre-releases and sneak-peaks.
//           </Text>
//           <Stack
//             direction={'column'}
//             spacing={3}
//             align={'center'}
//             alignSelf={'center'}
//             position={'relative'}>
//             <Button
//               colorScheme={'green'}
//               bg={'green.400'}
//               rounded={'full'}
//               px={6}
//               _hover={{
//                 bg: 'green.500',
//               }}>
//               Get Started
//             </Button>
//             <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
//               Learn more
//             </Button>
//             <Box>
//               <Icon
//                 as={Arrow}
//                 color={useColorModeValue('gray.800', 'gray.300')}
//                 w={71}
//                 position={'absolute'}
//                 right={-71}
//                 top={'10px'}
//               />
//               <Text
//                 fontSize={'lg'}
//                 fontFamily={'Caveat'}
//                 position={'absolute'}
//                 right={'-125px'}
//                 top={'-15px'}
//                 transform={'rotate(10deg)'}>
//                 Starting at $15/mo
//               </Text>
//             </Box>
//           </Stack>
//         </Stack>
//       </Container>
//     </>
//   );
// }

// const Arrow = createIcon({
//   displayName: 'Arrow',
//   viewBox: '0 0 72 24',
//   path: (
//     <path
//       fillRule="evenodd"
//       clipRule="evenodd"
//       d="M0.600904 7.08166C0.764293 6.8879 1.01492 6.79004 1.26654 6.82177C2.83216 7.01918 5.20326 7.24581 7.54543 7.23964C9.92491 7.23338 12.1351 6.98464 13.4704 6.32142C13.84 6.13785 14.2885 6.28805 14.4722 6.65692C14.6559 7.02578 14.5052 7.47362 14.1356 7.6572C12.4625 8.48822 9.94063 8.72541 7.54852 8.7317C5.67514 8.73663 3.79547 8.5985 2.29921 8.44247C2.80955 9.59638 3.50943 10.6396 4.24665 11.7384C4.39435 11.9585 4.54354 12.1809 4.69301 12.4068C5.79543 14.0733 6.88128 15.8995 7.1179 18.2636C7.15893 18.6735 6.85928 19.0393 6.4486 19.0805C6.03792 19.1217 5.67174 18.8227 5.6307 18.4128C5.43271 16.4346 4.52957 14.868 3.4457 13.2296C3.3058 13.0181 3.16221 12.8046 3.01684 12.5885C2.05899 11.1646 1.02372 9.62564 0.457909 7.78069C0.383671 7.53862 0.437515 7.27541 0.600904 7.08166ZM5.52039 10.2248C5.77662 9.90161 6.24663 9.84687 6.57018 10.1025C16.4834 17.9344 29.9158 22.4064 42.0781 21.4773C54.1988 20.5514 65.0339 14.2748 69.9746 0.584299C70.1145 0.196597 70.5427 -0.0046455 70.931 0.134813C71.3193 0.274276 71.5206 0.70162 71.3807 1.08932C66.2105 15.4159 54.8056 22.0014 42.1913 22.965C29.6185 23.9254 15.8207 19.3142 5.64226 11.2727C5.31871 11.0171 5.26415 10.5479 5.52039 10.2248Z"
//       fill="currentColor"
//     />
//   ),
// });