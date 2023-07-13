
import { Box, Flex, Heading, Text, Button, Spacer } from "@chakra-ui/react";

const Wallet = () => {
  return (
    <Box p={8} shadow="lg" borderRadius="md" >
      <Flex alignItems="center">
        <Box mr={4}>
          <Heading as="h2" size="lg">
            My Wallet
          </Heading>
          <Text fontSize="sm" color="gray.500">
            Available Balance: $500
          </Text>
        </Box>
        <Spacer />
        <Button colorScheme="blue" size="sm">
          Add Funds
        </Button>
      </Flex>
      <Box mt={6} p={4}  borderRadius="md">
        <Text fontSize="lg" fontWeight="bold" mb={4}>
          Recent Transactions
        </Text>
        <Box>
          <Flex alignItems="center" mb={4}>
            <Box bg="green.500" rounded="full" p={2} mr={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                width="16"
                height="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                Received Payment
              </Text>
              <Text fontSize="sm" color="gray.500">
                July 12, 2023
              </Text>
            </Box>
            <Spacer />
            <Text fontSize="sm" fontWeight="bold" color="green.500">
              +$100
            </Text>
          </Flex>
          <Flex alignItems="center" mb={4}>
            <Box bg="red.500" rounded="full" p={2} mr={4}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
                width="16"
                height="16"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 11l7-7 7 7M5 19l7-7 7 7"
                />
              </svg>
            </Box>
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                Sent Payment
              </Text>
              <Text fontSize="sm" color="gray.500">
                July 10, 2023
              </Text>
            </Box>
            <Spacer />
            <Text fontSize="sm" fontWeight="bold" color="red.500">
              -$50
            </Text>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Wallet;
