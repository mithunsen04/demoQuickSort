


// import {
//     Button,
//     Checkbox,
//     Flex,
//     FormControl,
//     FormLabel,
//     Heading,
//     Input,
//     Link,
//     Stack,
//     Image,
//   } from '@chakra-ui/react';
  
//   export default function SplitScreen() {
//     return (
//       <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
//         <Flex p={8} flex={1} align={'center'} justify={'center'}>
//           <Stack spacing={4} w={'full'} maxW={'md'}>
//             <Heading fontSize={'2xl'}>Sign in to your account</Heading>
//             <FormControl id="email">
//               <FormLabel>Email address</FormLabel>
//               <Input type="email" />
//             </FormControl>
//             <FormControl id="password">
//               <FormLabel>Password</FormLabel>
//               <Input type="password" />
//             </FormControl>
//             <Stack spacing={6}>
//               <Stack
//                 direction={{ base: 'column', sm: 'row' }}
//                 align={'start'}
//                 justify={'space-between'}>
//                 <Checkbox>Remember me</Checkbox>
//                 <Link color={'blue.500'}>Forgot password?</Link>
//               </Stack>
//               <Button colorScheme={'blue'} variant={'solid'}>
//                 Sign in
//               </Button>
//             </Stack>
//           </Stack>
//         </Flex>
//         <Flex flex={1}>
//           <Image
//             alt={'GIF'}
//             objectFit={'cover'}
//             src={
//               'https://dribbble.com/shots/8350927-Animated-Robot' 
//             }
           
//           />
//         </Flex>
//       </Stack>
//     );
//   }




// import { Button, Checkbox, Flex, FormControl, FormLabel, Heading, Input,  Stack, Image } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
// export default function SplitScreen() {
//   return (
//     <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
//       <Flex p={8} flex={1} align={'center'} justify={'center'}>
//         <Stack spacing={4} w={'full'} maxW={'md'}>
//           <Heading fontSize={'2xl'}>Sign in to your account</Heading>
//           <FormControl id="email">
//             <FormLabel>Email address</FormLabel>
//             <Input type="email"  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'} />
//           </FormControl>
//           <FormControl id="password">
//             <FormLabel>Password</FormLabel>
//             <Input type="password"  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}/>
//           </FormControl>
//           <Stack spacing={6}>
//             <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
//               <Checkbox>Remember me</Checkbox>
//               <Link  to="/forgotpassword">Forgot password?</Link>
//             </Stack>
//             <Button colorScheme={'blue'} variant={'solid'}>
//               Sign in
//             </Button>
//           </Stack>
//         </Stack>
//       </Flex>
//       <Flex flex={1} boxShadow={'0 5px 20px 0px rgb(72 187 120 / 200%)'}>
//         <Image
//           alt={'GIF'}
//           objectFit={'cover'}
//           src={'https://cdn.dribbble.com/users/42048/screenshots/8350927/media/23289b76ac7353ad4f0d0619ce6e9f2d.gif'}
//          />
//       </Flex>
//     </Stack>
//   );
// }


//----------------------------------------------------------------------------------
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Text,
  useToast,
  
} from '@chakra-ui/react';






export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const toast = useToast();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    try {
      // Send POST request to the login endpoint
      const response = await axios.post('https://alive-jade-hatchling.cyclic.app/login', {
        email,
        password,
      });

      console.log(response.data); // Handle the response as needed (e.g., store token, redirect)

      const { token } = response.data; // Extract the token from the response

    // Store the token in localStorage
    localStorage.setItem('token', token);


    toast({
      title: 'Login up successful',
      description: 'Thank you for Login!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });



      // Reset the form
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Error logging in:', error.response?.data?.message || error.message);
      setErrorMessage(error.response?.data?.message || 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    return  email.trim() !== '' && password.trim() !== '';
  };

// suppose this is changes
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
            />
          </FormControl>
          {errorMessage && (
            <Text color="red.500" fontSize="sm">
              {errorMessage}
            </Text>
          )}
          <Stack spacing={6}>
            <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link to="/forgotpassword">Forgot password?</Link>
            </Stack>
            <Link to="/"><Button
              isLoading={isLoading}
              loadingText="Signing in"
              size="lg"
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleLogin}
              isDisabled={!validateForm()}
            >
              Sign in
            </Button> </Link>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1} boxShadow={'0 5px 20px 0px rgb(72 187 120 / 200%)'}>
        <Image
          alt={'GIF'}
          objectFit={'cover'}
          src={'https://cdn.dribbble.com/users/42048/screenshots/8350927/media/23289b76ac7353ad4f0d0619ce6e9f2d.gif'}
        />
      </Flex>
    </Stack>
  );
}



//---------------------------------------------------------------------------------------------------------------


