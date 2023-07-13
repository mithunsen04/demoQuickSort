

// import {
//     Flex,
//     Box,
//     FormControl,
//     FormLabel,
//     Input,
//     InputGroup,
//     HStack,
//     InputRightElement,
//     Stack,
//     Button,
//     Heading,
//     Text,
//     useColorModeValue,
    
//   } from '@chakra-ui/react';
//   import { useState } from 'react';
//   import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
//   import { Link } from 'react-router-dom';
//   export default function Signup() {
//     const [showPassword, setShowPassword] = useState(false);
  
//     return (
//       <Flex
//         minH={'100vh'}
//         align={'center'}
//         justify={'center'}
//         bg={useColorModeValue('gray.50', 'gray.800')}>
//         <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//           <Stack align={'center'}>
//             <Heading fontSize={'4xl'} textAlign={'center'}>
//               Sign up
//             </Heading>
//             <Text fontSize={'lg'} color={'gray.400'}>
//               to enjoy all of our cool features ✌️
//             </Text>
//           </Stack>
//           <Box
//             rounded={'lg'}
//             bg={useColorModeValue('white', 'gray.700')}
//             // boxShadow={'lg'}
//             p={8} boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}>
//             <Stack spacing={4}>
//               <HStack>
//                 <Box>
//                   <FormControl id="firstName" isRequired>
//                     <FormLabel>First Name</FormLabel>
//                     <Input type="text" boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'} />
//                   </FormControl>
//                 </Box>
//                 <Box>
//                   <FormControl id="lastName">
//                     <FormLabel>Last Name</FormLabel>
//                     <Input type="text" boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'} />
//                   </FormControl>
//                 </Box>
//               </HStack>
//               <FormControl id="email" isRequired>
//                 <FormLabel>Email address</FormLabel>
//                 <Input type="email"  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}/>
//               </FormControl>
//               <FormControl id="password" isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <InputGroup>
//                   <Input type={showPassword ? 'text' : 'password'}  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}/>
//                   <InputRightElement h={'full'}>
//                     <Button
//                       variant={'ghost'}
//                       onClick={() =>
//                         setShowPassword((showPassword) => !showPassword)
//                       }>
//                       {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//               </FormControl>
//               <Stack spacing={10} pt={2}>
//                 <Button
//                   loadingText="Submitting"
//                   size="lg"
//                   bg={'blue.400'}
//                   color={'white'}
//                   _hover={{
//                     bg: 'blue.500',
//                   }}>
//                   Sign up
//                 </Button>
//               </Stack>
//               <Stack pt={6}>
//                 <Text align={'center'}>
//                   Already a user? <Link color={'blue.400'}  to="/login"  >Login</Link>
//                 </Text>
//               </Stack>
//             </Stack>
//           </Box>
//         </Stack>
//       </Flex>
//     );
//   }




//-------------------------------------------------------------------------------------------------------


//edit --------------------


import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Center, 
    
  useToast,
    
  } from '@chakra-ui/react';
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  import { Link } from 'react-router-dom';
  import axios from 'axios';
  import { FcGoogle } from 'react-icons/fc';


  export default function Signup() {
    //const [showPassword, setShowPassword] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const toast = useToast();
 


    const handleSignup = async (e) => {
      e.preventDefault();
      setIsLoading(true);
      setErrorMessage('');
    
      try {
        // Send POST request to the signup endpoint
        const response = await axios.post('http://api.quicksort.ai/signup', {
          firstname: firstName,
          lastname: lastName,
          email,
          password,
        });
    
        console.log(response.data); // Handle the response as needed (e.g., display success message)


        toast({
          title: 'Sign up successful',
          description: 'Thank you for signing up!',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });

    
        // Reset the form
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
      } catch (error) {
        console.error('Error signing up:', error.response?.data?.message || error.message);
        setErrorMessage(error.response?.data?.message || 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };


    const validateForm = () => {
      return firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && password.trim() !== '';
    };


    function getGoogleOAuthURL() {
      const rooturl = 'https://accounts.google.com/o/oauth2/v2/auth';
  
      const options = {
          redirect_uri: 'http://api.quicksort.ai/google/callback',
          client_id: '38145906488-qcuhj8ip8cv5vct41b1vk0q3330bte0j.apps.googleusercontent.com',
          access_type: 'offline',
          response_type: 'code',
          scope: [
              'https://www.googleapis.com/auth/userinfo.profile', 'https://www.googleapis.com/auth/userinfo.email'
          ].join(" "),
      
  
      }
      console.log({ options });
      const qs = new URLSearchParams(options);
      console.log({ qs });
      return `${rooturl}?${qs.toString()}`
  }



  
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
            Welcome to QuickSort AI
            </Heading>
            <Text fontSize={'lg'} color={'gray.400'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            
            p={8} boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}>
            <Stack spacing={4}>
              <HStack>
                <Box>
                  <FormControl id="firstName" isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                    type="text"
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input
                    type="text"
                    boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input
                type="email"
                boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                  <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((show) => !show)}
                  >
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              {errorMessage && (
              <Text color="red.500" fontSize="sm">
                {errorMessage}
              </Text>
            )}

              <Stack spacing={10} pt={2}>
              <Link to="/login"> <Button
                isLoading={isLoading}
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSignup}
                isDisabled={!validateForm()}
              >
                Sign up
                  

                </Button></Link>
              </Stack>





                     {/* <Button>
                       <a href={getGoogleOAuthURL()} >
                          <span ></span>
                          Continue with Google
                        </a>
                       </Button> */}



<Center>
<a href={getGoogleOAuthURL()} > <Button
        w={'full'}
        maxW={'md'}
        variant={'outline'}
        leftIcon={<FcGoogle />}>
       
         Continue with Google
        
      </Button></a>
      </Center>






              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link color={'blue.400'}  to="/login"  >Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }




//------------------------------------------edit 2-----------------------------------
// import {
//   Flex,
//   Box,
//   FormControl,
//   FormLabel,
//   Input,
//   InputGroup,
//   HStack,
//   InputRightElement,
//   Stack,
//   Button,
//   Heading,
//   Text,
//   useColorModeValue,
//   useToast,
// } from '@chakra-ui/react';
// import { useState } from 'react';
// import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function Signup() {
//   const [showPassword, setShowPassword] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const toast = useToast();

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setErrorMessage('');

//     try {
//       // Send POST request to the signup endpoint
//       const response = await axios.post('http://localhost:8000/signup', {
//         firstName,
//         lastName,
//         email,
//         password,
//       });

//       // Handle the response as needed (e.g., display success message)
//       console.log(response.data);
//       toast({
//         title: 'Sign up successful',
//         description: 'Thank you for signing up!',
//         status: 'success',
//         duration: 5000,
//         isClosable: true,
//       });

//       // Reset the form
//       setFirstName('');
//       setLastName('');
//       setEmail('');
//       setPassword('');
//     } catch (error) {
//       console.error('Error signing up:', error.response?.data?.message || error.message);
//       setErrorMessage(error.response?.data?.message || 'An error occurred');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const validateForm = () => {
//     return firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !== '' && password.trim() !== '';
//   };

//   return (
//     <Flex
//       minH={'100vh'}
//       align={'center'}
//       justify={'center'}
//       bg={useColorModeValue('gray.50', 'gray.800')}
//     >
//       <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
//         <Stack align={'center'}>
//           <Heading fontSize={'4xl'} textAlign={'center'}>
//             Sign up
//           </Heading>
//           <Text fontSize={'lg'} color={'gray.400'}>
//             to enjoy all of our cool features ✌️
//           </Text>
//         </Stack>
//         <Box
//           rounded={'lg'}
//           bg={useColorModeValue('white', 'gray.700')}
//           p={8}
//           boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
//         >
//           <form onSubmit={handleSignup}>
//             <Stack spacing={4}>
//               <HStack>
//                 <Box>
//                   <FormControl id="firstName" isRequired>
//                     <FormLabel>First Name</FormLabel>
//                     <Input
//                       type="text"
//                       boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
//                       value={firstName}
//                       onChange={(e) => setFirstName(e.target.value)}
//                     />
//                   </FormControl>
//                 </Box>
//                 <Box>
//                   <FormControl id="lastName" isRequired>
//                     <FormLabel>Last Name</FormLabel>
//                     <Input
//                       type="text"
//                       boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
//                       value={lastName}
//                       onChange={(e) => setLastName(e.target.value)}
//                     />
//                   </FormControl>
//                 </Box>
//               </HStack>
//               <FormControl id="email" isRequired>
//                 <FormLabel>Email address</FormLabel>
//                 <Input
//                   type="email"
//                   boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl id="password" isRequired>
//                 <FormLabel>Password</FormLabel>
//                 <InputGroup>
//                   <Input
//                     type={showPassword ? 'text' : 'password'}
//                     boxShadow={'0 5px 20px 0px rgb(72 187 120 / 43%)'}
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                   />
//                   <InputRightElement h={'full'}>
//                     <Button
//                       variant={'ghost'}
//                       onClick={() => setShowPassword((show) => !show)}
//                     >
//                       {showPassword ? <ViewIcon /> : <ViewOffIcon />}
//                     </Button>
//                   </InputRightElement>
//                 </InputGroup>
//               </FormControl>

//               {errorMessage && (
//                 <Text color="red.500" fontSize="sm">
//                   {errorMessage}
//                 </Text>
//               )}

//               <Stack spacing={10} pt={2}>
//                 <Button
//                   isLoading={isLoading}
//                   loadingText="Submitting"
//                   size="lg"
//                   bg={'blue.400'}
//                   color={'white'}
//                   _hover={{
//                     bg: 'blue.500',
//                   }}
//                   type="submit"
//                   isDisabled={!validateForm()}
//                 >
//                   Sign up
//                 </Button>
//               </Stack>
//               <Stack pt={6}>
//                 <Text align={'center'}>
//                   Already a user?{' '}
//                   <Link color={'blue.400'} to="/login">
//                     Login
//                   </Link>
//                 </Text>
//               </Stack>
//             </Stack>
//           </form>
//         </Box>
//       </Stack>
//     </Flex>
//   );
// }
