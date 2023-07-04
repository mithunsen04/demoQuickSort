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


import React from 'react';
import { Box, Container, Flex, Text } from '@chakra-ui/react';

const StartWithAPI = () => {
  return (
    <Container maxW="container.xl">
      <Text as="mark" textAlign="center" mt={5} mb={4} fontSize="2xl" >
        Get Started with API
      </Text>
      <br/>
      <br/>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box w={{ base: '100%', md: '30%' }} p={4}>
          <Box borderRadius="md" borderWidth="1px" p={4} textAlign="center">
            <Text fontWeight="bold" mb={2}>
              Step 1
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
            </Text>
          </Box>
        </Box>
        <Box w={{ base: '100%', md: '30%' }} p={4}>
          <Box borderRadius="md" borderWidth="1px" p={4} textAlign="center">
            <Text fontWeight="bold" mb={2}>
              Step 2
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
            </Text>
          </Box>
        </Box>
        <Box w={{ base: '100%', md: '30%' }} p={4}>
          <Box borderRadius="md" borderWidth="1px" p={4} textAlign="center">
            <Text fontWeight="bold" mb={2}>
              Step 3
            </Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default StartWithAPI;

