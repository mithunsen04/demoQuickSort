


// import React from 'react';
// import { Box, Flex, Text, Stack, Heading } from '@chakra-ui/react';

// const ApiLogs = () => {
//   // Dummy data for demonstration
//   const apiLogs = [
//     { id: 1, endpoint: '/users', method: 'GET', responseTime: '43ms' },
//     { id: 2, endpoint: '/title', method: 'POST', responseTime: '78ms' },
//     { id: 3, endpoint: '/hastag', method: 'PUT', responseTime: '55ms' },
//     // Add more logs here
//   ];

//   return (
//     <Box py={8}>
//       <Heading size="lg" textAlign="center" mb={4} color={"orange.400"}>
//         API Logs
//       </Heading>

//       <Flex
//         direction={{ base: 'column', md: 'row' }} // Stack elements vertically on small screens and horizontally on medium and larger screens
//         justify="center"
//         align="center"
//         mx="auto"
//         maxW={{ base: '95%', md: '80%' }} // Adjust the maximum width based on screen size
//       >
//         <Stack flex={1} spacing={4} p={4} boxShadow="lg" >
//           <Text fontSize="lg" fontWeight="bold" mb={2}>
//             API Endpoint
//           </Text>
//           {apiLogs.map((log) => (
//             <Text key={log.id}>{log.endpoint}</Text>
//           ))}
//         </Stack>

//         <Stack flex={1} spacing={4} p={4} boxShadow="lg" >
//           <Text fontSize="lg" fontWeight="bold" mb={2}>
//             Method
//           </Text>
//           {apiLogs.map((log) => (
//             <Text key={log.id}>{log.method}</Text>
//           ))}
//         </Stack>

//         <Stack flex={1} spacing={4} p={4} boxShadow="lg" >
//           <Text fontSize="lg" fontWeight="bold" mb={2}>
//             Response Time
//           </Text>
//           {apiLogs.map((log) => (
//             <Text key={log.id}>{log.responseTime}</Text>
//           ))}
//         </Stack>
//       </Flex>
//     </Box>
//   );
// };

// export default ApiLogs;



//----------------------------------------------------------------------------------------


import React from 'react';
import { Box, Flex, Text, Stack, Heading } from '@chakra-ui/react';

const ApiLogs = () => {
  // Dummy data for demonstration
  const apiLogs = [
    {
      id: 1,
      action: 'generate_headline',
      timestamp: '07 Jul 2023 12:21:AM',
      amount: '₹ 0.0004',
    },
    {
      id: 2,
      action: 'generate_summary',
      timestamp: '07 Jul 2023 12:20:AM',
      amount: '₹ 0.0004',
    },
    {
      id: 3,
      action: 'generate_summary',
      timestamp: '04 Jul 2023 07:48:PM',
      amount: '₹ 0.0004',
    },
    {
      id: 4,
      action: 'generate_headline',
      timestamp: '04 Jul 2023 04:09:PM',
      amount: '₹ 0',
    },
    {
      id: 5,
      action: 'generate_topics',
      timestamp: '04 Jul 2023 04:09:PM',
      amount: '₹ 0',
    },
    // Add more logs here
  ];

  return (
    <Box py={8} >
      <Heading size="lg" textAlign="center" mb={4} color={"orange.400"}>
        API Logs
      </Heading>

      <Flex
        direction={{ base: 'column', md: 'row' }} // Stack elements vertically on small screens and horizontally on medium and larger screens
        justify="center"
        align="center"
        mx="auto"
        maxW={{ base: '95%', md: '80%' }} // Adjust the maximum width based on screen size
      >
        <Stack flex={1} spacing={4} p={4} boxShadow="lg" >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Action
          </Text>
          {apiLogs.map((log) => (
            <Text key={log.id}>{log.action}</Text>
          ))}
        </Stack>

        <Stack flex={1} spacing={4} p={4} boxShadow="lg" >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Timestamp
          </Text>
          {apiLogs.map((log) => (
            <Text key={log.id}>{log.timestamp}</Text>
          ))}
        </Stack>

        <Stack flex={1} spacing={4} p={4} boxShadow="lg" >
          <Text fontSize="lg" fontWeight="bold" mb={2}>
            Amount
          </Text>
          {apiLogs.map((log) => (
            <Text key={log.id}>{log.amount}</Text>
          ))}
        </Stack>
      </Flex>
    </Box>
  );
};

export default ApiLogs;


//-----------------------------------------------------------------------------------

