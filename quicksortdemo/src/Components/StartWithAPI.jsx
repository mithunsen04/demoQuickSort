// import React from 'react';

// const StartWithAPI = () => {
//   return (
//     <div className="container">
//       <h1 className="text-center mt-5 mb-4">Get Started with API</h1>
//       <div className="row">
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Step 1</h5>
//               <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Step 2</h5>
//               <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
//             </div>
//           </div>
//         </div>
//         <div className="col-md-4">
//           <div className="card">
//             <div className="card-body">
//               <h5 className="card-title">Step 3</h5>
//               <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default StartWithAPI;


// import React from 'react';
// import { Box, Container, Flex, Text } from '@chakra-ui/react';

// const StartWithAPI = () => {
//   return (
//     <Container maxW="container.xl">
//       <Text as="mark" textAlign="center" mt={5} mb={4} fontSize="2xl" >
//         Get Started with API
//       </Text>
//       <br/>
//       <br/>
//       <Flex flexWrap="wrap" justifyContent="center">
//         <Box w={{ base: '100%', md: '30%' }} p={4}>
//           <Box borderRadius="md" borderWidth="1px" p={4} textAlign="center">
//             <Text fontWeight="bold" mb={2}>
//               Step 1
//             </Text>
//             <Text>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
//             </Text>
//           </Box>
//         </Box>
//         <Box w={{ base: '100%', md: '30%' }} p={4}>
//           <Box borderRadius="md" borderWidth="1px" p={4} textAlign="center">
//             <Text fontWeight="bold" mb={2}>
//               Step 2
//             </Text>
//             <Text>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
//             </Text>
//           </Box>
//         </Box>
//         <Box w={{ base: '100%', md: '30%' }} p={4}>
//           <Box borderRadius="md" borderWidth="1px" p={4} textAlign="center">
//             <Text fontWeight="bold" mb={2}>
//               Step 3
//             </Text>
//             <Text>
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
//             </Text>
//           </Box>
//         </Box>
//       </Flex>
//     </Container>
//   );
// };

// export default StartWithAPI;



import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ReactElement } from 'react';
import {
  FcAbout,
  FcAssistant,
  FcViewDetails,
  FcDonate,
  FcManager,
} from 'react-icons/fc';

import {
  AiFillFileText
} from 'react-icons/ai';


interface CardProps {
  heading: string;
  description: string;
  icon: ReactElement;
  href: string;
}

const Card = ({ heading, description, icon, href }: CardProps) => {
  return (
    <Box
      maxW={{ base: 'full', md: '275px' }}
      w={'full'}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p={5}>
      <Stack align={'start'} spacing={2}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}>
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
        </Box>
        <Button variant={'link'} colorScheme={'blue'} size={'sm'}>
          Learn more
        </Button>
      </Stack>
    </Box>
  );
};

export default function StartWithAPI() {
  return (<>
  <br/>
  <br/>
  <br/>
  <br/>
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={{ base: '2xl', sm: '4xl' }} fontWeight={'bold'}>
        EXPLORE OUR API's
        </Heading>
        <Text color={'gray.400'} fontSize={{ base: 'sm', sm: 'lg' }}>
        Get a hands on with our production ready API's and start <br/>
        building your products with AI today
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={12}>
        <Flex flexWrap="wrap" gridGap={6} justify="center">
          <Card
            heading={'Text Summarisation'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'Summarize large texts in seconds with our Summary Generating API.'
            }
            href={'#'}
          />
          <Card
            heading={'Headline Generation'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'Get attention-grabbing headlines with ease using our Headline Generating API.'
            }
            href={'#'}
          />
          <Card
            heading={'Sentiment Analysis'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'Understand the sentiment of your audience with our Sentiment Analysis API.'
            }
            href={'#'}
          />
          <Card
            heading={'Tags Generation'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'Automate your content tagging process with our Tags Generating API.'
            }
            href={'#'}
          />
          <Card
            heading={'Question Answering'}
            icon={<Icon as={AiFillFileText} w={10} h={10} />}
            description={
              'ummarize large texts in seconds with our Summary Generating API.'
            }
            href={'#'}
          />
        </Flex>
      </Container>
    </Box>
    </>
  );
}