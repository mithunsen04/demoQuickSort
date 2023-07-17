


// // ResetPassword.jsx
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

// export default function Resetdbpassword() {
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleResetPassword = async () => {
//     try {
//       const response = await fetch('http://localhost:8000/reset-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ token: 'reset-token', newPassword: password }),
//       });

//       if (response.ok) {
//         // Show a success message to the user
//         console.log('Password reset successful!');
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
//           Reset your password
//         </Heading>
//         <Text
//           fontSize={{ base: 'sm', sm: 'md' }}
//           color={useColorModeValue('gray.800', 'gray.400')}
//         >
//           Enter your new password
//         </Text>
//         <FormControl id="password">
//           <Input
//             placeholder="New password"
//             _placeholder={{ color: 'gray.500' }}
//             type="password"
//             boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </FormControl>
//         <FormControl id="confirmPassword">
//           <Input
//             placeholder="Confirm password"
//             _placeholder={{ color: 'gray.500' }}
//             type="password"
//             boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
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
//             Reset Password
//           </Button>
//         </Stack>
//       </Stack>
//     </Flex>
//   );
// }



//--------------------------------------------



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from "react-router-dom";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ResetPassword() {
  let navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleResetPassword = async () => {
    try {
         
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');


      const response = await fetch('https://alive-jade-hatchling.cyclic.app/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token, newPassword: password }),
      });

      if (response.ok) {
        // Show a success toast message
        toast.success('Password reset successful!', {
          position: toast.POSITION.TOP_RIGHT,
        });

        // Redirect to the Home page
        navigate('/');
      } else {
        const data = await response.json();
        console.error('Error:', data.message);

        // Show an error toast message
        toast.error('Error resetting password', {
          position: toast.POSITION.TOP_RIGHT,
        });
      }
    } catch (error) {
      console.error('Error:', error);

      // Show an error toast message
      toast.error('Error resetting password', {
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
            Reset your password
          </Heading>
          <Text
            fontSize={{ base: 'sm', sm: 'md' }}
            color={useColorModeValue('gray.800', 'gray.400')}
          >
            Enter your new password
          </Text>
          <FormControl id="password">
            <Input
              placeholder="New password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <FormControl id="confirmPassword">
            <Input
              placeholder="Confirm password"
              _placeholder={{ color: 'gray.500' }}
              type="password"
              boxShadow="0 5px 20px 0px rgb(72 187 120 / 43%)"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
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
              Reset Password
            </Button>
          </Stack>
        </Stack>
      </Flex>
    </>
  );
}

