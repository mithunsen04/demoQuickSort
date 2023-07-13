



// import { Box, Flex, Heading ,Button,} from "@chakra-ui/react";

// const ApiKeys = () => {
//   // Sample data for created API keys
//   const apiKeys = [
//     { id: 1, name: "acvsf099sjhsbsgvssgsgsfsdg" },
//     { id: 2, name: "hsaha5256gh2w7hg273323eb37" },
//     { id: 3, name: "23ujehu3euebhuid2iy3e2b3bed" },
//     { id: 1, name: "ihdwqehdo2832838e763hdb32udt" },
//     { id: 2, name: "hsaha5256gh2w7hg273323eb3733" },
//     { id: 3, name: "ihdwqehdo2832838e763hdb32udt" },
//   ];

//   return (
//     <Box py={8} pr={"20px"} pl={"20px"}>
//       <Flex justifyContent="space-between"  >
//         <Heading as="h2" size="lg" pl={"10px"} >
//           API Keys
//         </Heading>
//        <Button  mr={"900px"}  mt={"6px"} > <Heading as="h6" size=""  >
//           Create API keys
//         </Heading></Button>
//       </Flex>
//       <Box  ><Box mt={10} p={4} border="1px solid gray" borderRadius="md"   >
//         {apiKeys.map((apiKey) => (
//           <Box key={apiKey.id}  mr={"900px"} mt={"5px"} mb={"5px"} >
//             {apiKey.name}
//           </Box>
//         ))}
//       </Box> </Box>
//     </Box>
//   );
// };

// export default ApiKeys;


//--------------------------------------------------------------


import { Box, Flex, Heading, Text, Button, Spacer } from "@chakra-ui/react";

const ApiKeys = () => {
  const apiKeys = [
    { id: 1, name: "API Key 1", permissions: "read" },
    { id: 2, name: "API Key 2", permissions: "write" },
    { id: 3, name: "API Key 3", permissions: "read/write" },
  ];

  return (
    <Box p={8} shadow="lg" borderRadius="md" >
      <Flex alignItems="center">
        <Box mr={4}>
          <Heading as="h2" size="lg">
            API Keys
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Total Keys: {apiKeys.length}
          </Text>
        </Box>
        <Spacer />
        <Button colorScheme="teal" size="sm">
          Create Key
        </Button>
      </Flex>
      <Box mt={6} p={4}  borderRadius="md">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Existing Keys
        </Text>
        <Box>
          {apiKeys.map((apiKey) => (
            <Flex
              key={apiKey.id}
              alignItems="center"
              justifyContent="space-between"
              border={"1px solid gray"}
              p={2}
              borderRadius="md"
              mb={4}
              shadow="sm"
            >
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  {apiKey.name}
                </Text>
                <Text fontSize="sm" color="gray.500">
                  Permissions: {apiKey.permissions}
                </Text>
              </Box>
              <Box >
              <Button colorScheme="red" size="sm" marginRight="10px">
                Copy
              </Button>

              <Button colorScheme="red" size="sm">
                Revoke
              </Button> </Box>
            </Flex>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ApiKeys;
