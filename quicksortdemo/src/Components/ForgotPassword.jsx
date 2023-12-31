

// import {
//   Button,
//   FormControl,
//   Flex,
//   Heading,
//   Input,
//   Stack,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react';
//  import { Link } from 'react-router-dom';

// type ForgotPasswordFormInputs = {
//   email: string;
// };

// export default function ForgotPassword(): JSX.Element {
//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')} boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}>
//       <Stack
//         spacing={4}
//         w={'full'}
//         maxW={'md'}
//         bg={useColorModeValue('white', 'gray.700')}
//         rounded={'xl'}
//         boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
//         p={6}
//         my={12}>
//         <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
//           Forgot your password?
//         </Heading>
//         <Text
//           fontSize={{ base: 'sm', sm: 'md' }}
//           color={useColorModeValue('gray.800', 'gray.400')}>
//           You&apos;ll get an email with a reset link
//         </Text>
//         <FormControl id="email">
//           <Input
//             placeholder="your-email@example.com"
//             _placeholder={{ color: 'gray.500' }}
//             type="email" boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
          
//           />
//         </FormControl>
//         <Stack spacing={6}>
//           <Button
//             bg={'blue.400'}
//             color={'white'}
//             _hover={{
//               bg: 'blue.500',
//             }}>
//                <Link color={'blue.400'}  to="/resetpassword"  > Request Reset</Link>
           
//           </Button>
//         </Stack>
//       </Stack>
//     </Flex>
//   );
// }






//-----------------------------------------------------------------------------------------------------------------



// ForgotPassword.jsx
// import { useState } from 'react';
// import {
//   Button,
//   FormControl,
//   Flex,
//   Heading,
//   Input,
//   Stack,
//   Text,
//   useColorModeValue,
// } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';

// export default function ForgotPassword() {
//   const [email, setEmail] = useState('');

//   const handleResetPassword = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/forgot-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email }),
//       });

//       if (response.ok) {
//         // Show a success message to the user
//         console.log('Password reset email sent!');
//       } else {
//         const data = await response.json();
//         console.error('Error:', data.message);
//       }
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   return (
//     <Flex
//       minH="100vh"
//       align="center"
//       justify="center"
//       bg={useColorModeValue('gray.50', 'gray.800')}
//       boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
//     >
//       <Stack
//         spacing={4}
//         w="full"
//         maxW="md"
//         bg={useColorModeValue('white', 'gray.700')}
//         rounded="xl"
//         boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
//         p={6}
//         my={12}
//       >
//         <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
//           Forgot your password?
//         </Heading>
//         <Text
//           fontSize={{ base: 'sm', sm: 'md' }}
//           color={useColorModeValue('gray.800', 'gray.400')}
//         >
//           You'll get an email with a reset link
//         </Text>
//         <FormControl id="email">
//           <Input
//             placeholder="your-email@example.com"
//             _placeholder={{ color: 'gray.500' }}
//             type="email"
//             boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//         </FormControl>
//         <Stack spacing={6}>
//           <Button
//             bg="blue.400"
//             color="white"
//             _hover={{
//               bg: 'blue.500',
//             }}
//             onClick={handleResetPassword}
//           >
//             Request Reset
//           </Button>
//         </Stack>
//       </Stack>
//     </Flex>
//   );
// }



//---------------------------------------------------------------------


import { useState } from 'react';
import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const handleResetPassword = async () => {
    try {
      const response = await fetch('https://alive-jade-hatchling.cyclic.app/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        // Show a success toast message
        toast.success('Password reset email sent!', {
          position: toast.POSITION.TOP_RIGHT,
        });
      } else {
        const data = await response.json();
        console.error('Error:', data.message);
        // Show an error toast message
        toast.error('Error sending password reset email', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error('Error:', error);
      // Show an error toast message
      toast.error('Error sending password reset email', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <>
      <ToastContainer /> {/* Add ToastContainer here */}
      <Flex
        minH="100vh"
        align="center"
        justify="center"
        bg={useColorModeValue('gray.50', 'gray.800')}
        boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
      >
        <Stack
          spacing={4}
          w="full"
          maxW="md"
          bg={useColorModeValue('white', 'gray.700')}
          rounded="xl"
          boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
          p={6}
          my={12}
        >
          <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Forgot your password?
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}
          >
            You'll get an email with a reset link
          </Text>
          <FormControl id="email">
            <Input
              placeholder="your-email@example.com"
              _placeholder={{ color: 'gray.500' }}
              type="email"
              boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Stack spacing={6}>
            <Button
              bg="blue.400"
              color="white"
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleResetPassword}
            >
              Request Reset
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}
