// import React from "react";
// import {
//   Box,
//   Flex,
//   Button,
//   useColorModeValue,
//   Stack,
//   useColorMode,
//   HStack,
//   Text,
//   useDisclosure,
//   IconButton,
//   Collapse,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalCloseButton,
//   ModalBody,
// } from "@chakra-ui/react";
// import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

// import "./Navbar.css";
// import { Link } from "react-router-dom";

// export default function Navbar() {
//   const { isOpen, onToggle } = useDisclosure();
//   const { colorMode, toggleColorMode } = useColorMode();
  
//   // Retrieve the user name from local storage
//   const userName = localStorage.getItem('userName');

//   return (
//     <Box
//       bg={useColorModeValue("gray.100", "gray.900")}
//       px={9}
//       width="100%"
//       pb={"10px"}
//       position="fixed" // Add this line to make the Navbar fixed
//       zIndex="9999" // Add this line to adjust the stacking order of the Navbar
      
//     >
//       <Flex h={16} alignItems="center" justifyContent="space-between">
//         <HStack
//           w={{ base: "100%", md: "42%" }}
//           justifyContent={{ base: "center", md: "flex-start" }}
//         >
//           <Text as="b" fontSize={{ base: "3xl", md: "5xl" }} color={'orange.400'}>
//             QuickSort.AI
//           </Text>
//         </HStack>

//         <Flex h={16} alignItems="center" justifyContent="space-between" pr={"20px"}  >
//           <HStack
//             as="nav"
//             spacing={4}
//             display={{ base: "none", md: "flex" }}
//             id="myDIV"
//           >
//             <Button className="btnRes" bg={"#a891b7"}>
//               <a href="#Docs">
//                 <b>Docs</b>
//               </a>
//             </Button>

//             <Link to="/playground"><Button className="btnRes" bg={"#a891b7"}>
//               <a href="#Playground">
//                 <b>Playground</b>
//               </a>
//             </Button></Link>

//             <Link to="/pricing"><Button className="btnRes"  bg={"#a891b7"}>
//               <a href="#Pricing">
//                 <b>Pricing</b>
//               </a>
//             </Button></Link>

//             <Link to="/sidebar"><Button className="btnRes" bg={"#a891b7"}>
//               <a href="#Demo">
//                 <b>Demo</b>
//               </a>
//             </Button></Link> 

//             <Link to = "waitlist"><Button className="btnRes" bg={"#a891b7"}>
//               <a href="#Contact">
//                 <b>Contact</b>
//               </a>
//             </Button></Link>

//             {/* <Button
//            bg={"orange.400"}
//             _hover={{ bg: "#a891b7", color: "black" }}
//             color="white"
//             variant="solid"
//             size={["sm", "md"]}
//             id="resumeBtn"
//           >
            
//             <Link to="/signup">Signup</Link>
//           </Button> */}
           

//            {userName ? (
//             // Display the user's name instead of the signup button
//             <Button
//               bg={'orange.400'}
//               _hover={{ bg: '#a891b7', color: 'black' }}
//               color="white"
//               variant="solid"
//               size={['sm', 'md']}
//               id="resumeBtn"
//             >
//               Hii, {userName}
//               </Button>
//           ) : (
//             // Display the signup button
//             <Link to="/signup"><Button
//               bg={'orange.400'}
//               _hover={{ bg: '#a891b7', color: 'black' }}
//               color="white"
//               variant="solid"
//               size={['sm', 'md']}
//               id="resumeBtn"
//             >
//              Signup
//             </Button></Link>
//           )}






//           </HStack>

//           {/* <IconButton
//             icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
//             onClick={toggleColorMode}
//             display={{ base: 'none', md: 'inline-flex' }}
//           /> */}

//           {/* <Button
//             backgroundColor="#a891b7"
//             _hover={{ bg: "#a891b7", color: "black" }}
//             color="white"
//             variant="solid"
//             size={["sm", "md"]}
//             id="resumeBtn"
//           >
            
//             <Link to="/signup">Signup</Link>
//           </Button> */}
//         </Flex>

//         <IconButton
//           size="md"
//           icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
//           aria-label="Open Menu"
//           display={{ md: "none" }}
//           onClick={onToggle}
//         />
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <Box pb={4} display={{ md: "none" }}>
//           <Stack as="nav" spacing={4}>
//             {/* Menu items */}
//           </Stack>
//         </Box>
//       </Collapse>

//       <Modal isOpen={isOpen} onClose={onToggle} size="sm">
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>Menu</ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Stack spacing={4}>
//               <Button className="btnRes">
//                 <a href="#Docs">
//                   <b>Docs</b>
//                 </a>
//               </Button>

//               <Button className="btnRes">
//                 <a href="#Playground">
//                   <b>Playground</b>
//                 </a>
//               </Button>

//               <Button className="btnRes">
//                 <a href="#Pricing">
//                   <b>Pricing</b>
//                 </a>
//               </Button>

//               <Button className="btnRes">
//                 <a href="#Demo">
//                   <b>Demo</b>
//                 </a>
//               </Button>

//               <Button className="btnRes">
//                 <a href="#Contact">
//                   <b>Contact</b>
//                 </a>
//               </Button>

//               <Button className="btnRes">
//                 <Link to="/signup">Signup</Link>
//               </Button>
//             </Stack>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </Box>
//   );
// }




//--------------------------------------------------------------------------------------------


// import React from "react";
// import { Box, Flex, Spacer, Button, IconButton, useDisclosure } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box position="fixed" top="0" left="0" right="0" bg="teal.800" p={4} zIndex="9999"  >
//       {/* Navbar container */}
//       <Flex align="center" height="40px">
//         {/* Logo */}
//         <Box>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GHe702WIFcBcEwA2-TP82YwZZHlnL4yoRQ&usqp=CAU"
//             alt="Logo"
//             width="100"
//           />
//         </Box>

//         {/* Spacer */}
//         <Spacer />

//         {/* Menu Links (Visible on large screens) */}
//         <Flex display={{ base: "none", md: "flex" }} alignItems="center">
//           <Box mr={4}>
//             <Button variant="ghost">Docs</Button>
//           </Box>
//           <Box mr={4}>
//             <Button variant="ghost">Playground</Button>
//           </Box>
//           <Box mr={4}>
//             <Button variant="ghost">Pricing</Button>
//           </Box>
//           <Box mr={4}>
//             <Button variant="ghost">Demo</Button>
//           </Box>
//           <Box mr={4}>
//             <Button variant="ghost">Contact</Button>
//           </Box>
//         </Flex>

//         {/* Sign Up Button (Visible on large screens) */}
//         <Button colorScheme="teal" variant="solid" display={{ base: "none", md: "block" }}>
//           Sign Up
//         </Button>

//         {/* Hamburger Icon (Visible on small screens) */}
//         <IconButton
//           display={{ base: "flex", md: "none" }}
//           aria-label="Menu"
//           icon={<HamburgerIcon />}
//           color="white"
//           onClick={onToggle}
//         />
//       </Flex>

//       {/* Responsive Menu (Hidden on large screens) */}
//       <Box display={{ base: isOpen ? "block" : "none", md: "none" }} mt={4} w="full">
//         <Box p={2} bg="teal.600" rounded="md" shadow="md">
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Docs
//             </Button>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Playground
//             </Button>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Pricing
//             </Button>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Demo
//             </Button>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Contact
//             </Button>
//           </Box>
//           <Box mb={2}>
//             <Button colorScheme="teal" variant="solid" w="full">
//               Sign Up
//             </Button>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;



//----------------------------------------------------------------
// import React from "react";
// import { Box, Flex, Spacer, Button, IconButton, useDisclosure, Text, Center } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box position="fixed" top="0" left="0" right="0" bg="teal.800" p={4} zIndex="9999">
//       {/* Navbar container */}
//       <Flex align="center" height="40px">
//         {/* Logo */}
//         <Box>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GHe702WIFcBcEwA2-TP82YwZZHlnL4yoRQ&usqp=CAU"
//             alt="Logo"
//             width="100"
//           />
//         </Box>

//         {/* Website Name */}
//         <Text
//           fontSize={{ base: "20px", md: "25px" }}
//           fontWeight="bold"
//           textTransform="uppercase"
//           ml={5}
//           marginBottom={-0.25}
//         color={"Highlight"}
//           display={{ base: "block", md: "block" }}
         
//         >
//           QuickSort.Ai
//         </Text>

//         {/* Spacer */}
//         <Spacer />

//         {/* Menu Links (Visible on large screens) */}
//         <Flex display={{ base: "none", md: "flex" }} alignItems="center">
//           <Box mr={4}>
//             <Button variant="ghost">Docs</Button>
//           </Box>
//           <Box mr={4}>
//           <Link to="/playground">    <Button variant="ghost">Playground</Button></Link>
//           </Box>
//           <Box mr={4}>
//           <Link to="/pricing"> <Button variant="ghost">Pricing</Button></Link>
//           </Box>
//           <Box mr={4}>
//           <Link to="/sidebar"><Button variant="ghost">Demo</Button></Link>
//           </Box>
//           <Box mr={4}>
//           <Link to="/waitlist"> <Button variant="ghost">Contact</Button></Link>
//           </Box>
//         </Flex>

//         {/* Sign Up Button (Visible on large screens) */}
//         <Link to="/signup">  <Button colorScheme="teal" variant="solid" display={{ base: "none", md: "block" }}>
//           Sign Up
//         </Button> </Link>

//         {/* Hamburger Icon (Visible on small screens) */}
//         <IconButton
//           display={{ base: "flex", md: "none" }}
//           aria-label="Menu"
//           icon={<HamburgerIcon />}
//           color="white"
//           onClick={onToggle}
//         />
//       </Flex>

//       {/* Responsive Menu (Hidden on large screens) */}
//       <Box display={{ base: isOpen ? "block" : "none", md: "none" }} mt={4} w="full">
//         <Box p={2} bg="teal.600" rounded="md" shadow="md">
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Docs
//             </Button>
//           </Box>
//           <Box mr={4} mb={2}>
//           <Link to="/playground"> <Button display="block" variant="ghost" w="full">
//               Playground
//             </Button></Link>
//           </Box>
//           <Box mr={4} mb={2}>
//           <Link to="/pricing"><Button display="block" variant="ghost" w="full">
//               Pricing
//             </Button></Link>
//           </Box>
//           <Box mr={4} mb={2}>
//           <Link to="/sidebar"><Button display="block" variant="ghost" w="full">
//               Demo
//             </Button></Link>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Contact
//             </Button>
//           </Box>
//           <Box mb={2}>
//           <Link to="/signup"><Button colorScheme="teal" variant="solid" w="full">
//               Sign Up
//             </Button></Link>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;





//---------------------------------------------------------------------------------------------



// import React, { useState , useEffect, useRef} from "react";
// import { Box, Flex, Spacer, Button, IconButton, useDisclosure, Text, Center, Portal } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
//   const userName = localStorage.getItem('userName');
//   const [showDropdown, setShowDropdown] = useState(false); // State to track the visibility of the dropdown
//   const [selectedOption, setSelectedOption] = useState(null); // State to track the selected option
//   const btnRef = useRef(null);
//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (btnRef.current && !btnRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const handleBtnClick = () => {
//     setShowDropdown((prevShowDropdown) => !prevShowDropdown);
//   };
//   const handleLogout = () => {
//     // Code to handle user logout, if required
//     setIsLoggedIn(false);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setShowDropdown(false);
//   };

//   const DropdownMenu = () => {
//     return (
//       <Portal>
//         <Box
//           position="absolute"
//           top="40px"
//           right="0"
//           bg="teal.600"
//           rounded="md"
//           shadow="md"
//           zIndex="1"
//           p={2}
//           onClick={() => setShowDropdown(false)} // Close the dropdown when clicked outside
//         >
//           <Box mb={2}>{userName}</Box>
//           <Box mb={2}>{/* Add user's email here */}</Box>
//           <Box mb={2} onClick={() => handleOptionClick("Manage account")}>
//            <Button> Manage Account</Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("View API keys")}>
//            <Button> View API keys </Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("Invite team")}>
//             <Button>Invite team</Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("Visit QuickSort")}>
//            <Button> Visit QuickSort</Button>
//           </Box>
//           {/* <Box mb={2} onClick={() => handleOptionClick("Visit DALL·E")}>
//             Visit DALL·E
//           </Box> */}
//           <Box mb={2} onClick={() => handleOptionClick("Help")}>
//            <Button> Help </Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("Pricing")}>
//            <Button> Pricing </Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("Terms & policies")}>
//             <Button>Terms & policies</Button>
//           </Box>
//           <Box mb={2}>
//             <Button colorScheme="teal" variant="solid" w="full" onClick={handleLogout}>
//               Log out
//             </Button>
//           </Box>
//         </Box>
//       </Portal>
//     );
//   };

//   return (
//     <Box position="fixed" top="0" left="0" right="0" bg="teal.800" p={4} zIndex="9999">
//       {/* Navbar container */}
//       <Flex align="center" height="40px">
//         {/* Logo */}
//         <Box>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GHe702WIFcBcEwA2-TP82YwZZHlnL4yoRQ&usqp=CAU"
//             alt="Logo"
//             width="100"
//           />
//         </Box>

//         {/* Website Name */}
//         <Text
//           fontSize={{ base: "20px", md: "25px" }}
//           fontWeight="bold"
//           textTransform="uppercase"
//           ml={5}
//           marginBottom={-0.25}
//           color={"Highlight"}
//           display={{ base: "block", md: "block" }}
//         >
//           QuickSort.Ai
//         </Text>

//         {/* Spacer */}
//         <Spacer />

//         {/* Menu Links (Visible on large screens) */}
//         <Flex display={{ base: "none", md: "flex" }} alignItems="center">
//           <Box mr={4}>
//             <Button variant="ghost">Docs</Button>
//           </Box>
//           <Box mr={4}>
//             <Link to="/playground">
//               <Button variant="ghost">Playground</Button>
//             </Link>
//           </Box>
//           <Box mr={4}>
//             <Link to="/pricing">
//               <Button variant="ghost">Pricing</Button>
//             </Link>
//           </Box>
//           <Box mr={4}>
//             <Link to="/sidebar">
//               <Button variant="ghost">Demo</Button>
//             </Link>
//           </Box>
//           <Box mr={4}>
//             <Link to="/waitlist">
//               <Button variant="ghost">Contact</Button>
//             </Link>
//           </Box>
//         </Flex>

//         {/* Conditionally render the dropdown box when the user is logged in */}
//         {userName ? (
//           <Box position="relative" id="accountMenu" onClick={handleBtnClick} ref={btnRef} 
          
          
//           >
//             <Button
//               colorScheme="teal"
//               variant="solid"
//               onClick={() => setIsLoggedIn(false)} // Handle click to log out
//               display={{ base: "none", md: "block" }}
//             >
//               {/* Replace the Sign Up text with the user's name */}
//               {userName}
//             </Button>
//             {showDropdown && <DropdownMenu />}
//           </Box>
//         ) : (
//           <Link to="/signup">
//             <Button colorScheme="teal" variant="solid" display={{ base: "none", md: "block" }}>
//               Sign Up
//             </Button>
//           </Link>
//         )}

//         {/* Hamburger Icon (Visible on small screens) */}
//         <IconButton
//           display={{ base: "flex", md: "none" }}
//           aria-label="Menu"
//           icon={<HamburgerIcon />}
//           color="white"
//           onClick={onToggle}
//         />
//       </Flex>

//       {/* Responsive Menu (Hidden on large screens) */}
//       <Box display={{ base: isOpen ? "block" : "none", md: "none" }} mt={4} w="full">
//         <Box p={2} bg="teal.600" rounded="md" shadow="md">
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Docs
//             </Button>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Link to="/playground">
//               <Button display="block" variant="ghost" w="full">
//                 Playground
//               </Button>
//             </Link>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Link to="/pricing">
//               <Button display="block" variant="ghost" w="full">
//                 Pricing
//               </Button>
//             </Link>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Link to="/sidebar">
//               <Button display="block" variant="ghost" w="full">
//                 Demo
//               </Button>
//             </Link>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Contact
//             </Button>
//           </Box>
//           {!isLoggedIn && (
//             <Box mb={2}>
//               <Link to="/signup">
//                 <Button colorScheme="teal" variant="solid" w="full">
//                   Sign Up
//                 </Button>
//               </Link>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;



//--------------------------------------------------------



// import React, { useState, useEffect, useRef } from "react";
// import {
//   Box,
//   Flex,
//   Spacer,
//   Button,
//   IconButton,
//   useDisclosure,
//   Text,
//   Center,
//   Portal,
// } from "@chakra-ui/react";
// import { HamburgerIcon } from "@chakra-ui/icons";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const { isOpen, onToggle } = useDisclosure();
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
//   const userName = localStorage.getItem('userName');
//   const [showDropdown, setShowDropdown] = useState(false); // State to track the visibility of the dropdown
//   const [selectedOption, setSelectedOption] = useState(null); // State to track the selected option
//   const btnRef = useRef(null);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (btnRef.current && !btnRef.current.contains(event.target)) {
//         setShowDropdown(false);
//       }
//     };

//     document.addEventListener('click', handleClickOutside);

//     return () => {
//       document.removeEventListener('click', handleClickOutside);
//     };
//   }, []);

//   const handleBtnClick = () => {
//     setShowDropdown((prevShowDropdown) => !prevShowDropdown);
//   };

//   const handleLogout = () => {
//     // Code to handle user logout, if required
//     setIsLoggedIn(false);
//   };

//   const handleOptionClick = (option) => {
//     setSelectedOption(option);
//     setShowDropdown(false);
//   };

//   const DropdownMenu = () => {
//     return (
//       <Portal>
//         <Box
//           position="absolute"
//           top="40px"
//           right="0"
//           bg="teal.600"
//           rounded="md"
//           shadow="md"
//           zIndex="1"
//           p={2}
//           onClick={() => setShowDropdown(false)} // Close the dropdown when clicked outside
//         >
//           <Box mb={2}>{userName}</Box>
//           {/* Add user's email here */}
//           <Box mb={2} onClick={() => handleOptionClick("Manage account")}>
//             <Button>Manage Account</Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("View API keys")}>
//             <Button>View API keys</Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("Invite team")}>
//             <Button>Invite team</Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("Visit QuickSort")}>
//             <Button>Visit QuickSort</Button>
//           </Box>
//           {/* Add other options as needed */}
//           <Box mb={2} onClick={() => handleOptionClick("Help")}>
//             <Button>Help</Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("Pricing")}>
//             <Button>Pricing</Button>
//           </Box>
//           <Box mb={2} onClick={() => handleOptionClick("Terms & policies")}>
//             <Button>Terms & policies</Button>
//           </Box>
//           <Box mb={2}>
//             <Button colorScheme="teal" variant="solid" w="full" onClick={handleLogout}>
//               Log out
//             </Button>
//           </Box>
//         </Box>
//       </Portal>
//     );
//   };

//   return (
//     <Box position="fixed" top="0" left="0" right="0" bg="teal.800" p={4} zIndex="9999">
//       {/* Navbar container */}
//       <Flex align="center" height="40px">
//         {/* Logo */}
//         <Box>
//           <img
//             src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GHe702WIFcBcEwA2-TP82YwZZHlnL4yoRQ&usqp=CAU"
//             alt="Logo"
//             width="100"
//           />
//         </Box>

//         {/* Website Name */}
//         <Text
//           fontSize={{ base: "20px", md: "25px" }}
//           fontWeight="bold"
//           textTransform="uppercase"
//           ml={5}
//           marginBottom={-0.25}
//           color={"Highlight"}
//           display={{ base: "block", md: "block" }}
//         >
//           QuickSort.Ai
//         </Text>

//         {/* Spacer */}
//         <Spacer />

//         {/* Menu Links (Visible on large screens) */}
//         <Flex display={{ base: "none", md: "flex" }} alignItems="center">
//           <Box mr={4}>
//             <Button variant="ghost">Docs</Button>
//           </Box>
//           <Box mr={4}>
//             <Link to="/playground">
//               <Button variant="ghost">Playground</Button>
//             </Link>
//           </Box>
//           <Box mr={4}>
//             <Link to="/pricing">
//               <Button variant="ghost">Pricing</Button>
//             </Link>
//           </Box>
//           <Box mr={4}>
//             <Link to="/sidebar">
//               <Button variant="ghost">Demo</Button>
//             </Link>
//           </Box>
//           <Box mr={4}>
//             <Link to="/waitlist">
//               <Button variant="ghost">Contact</Button>
//             </Link>
//           </Box>
//         </Flex>

//         {/* Conditionally render the dropdown box when the user is logged in */}
//         {userName ? (
//           <Box position="relative" id="accountMenu" onClick={handleBtnClick} ref={btnRef}>
//             <Button
//               colorScheme="teal"
//               variant="solid"
//               onClick={() => setIsLoggedIn(false)} // Handle click to log out
//               display={{ base: "none", md: "block" }}
//             >
//               {/* Replace the Sign Up text with the user's name */}
//               {userName}
//             </Button>
//             {showDropdown && <DropdownMenu />}
//           </Box>
//         ) : (
//           <Link to="/signup">
//             <Button colorScheme="teal" variant="solid" display={{ base: "none", md: "block" }}>
//               Sign Up
//             </Button>
//           </Link>
//         )}

//         {/* Hamburger Icon (Visible on small screens) */}
//         <IconButton
//           display={{ base: "flex", md: "none" }}
//           aria-label="Menu"
//           icon={<HamburgerIcon />}
//           color="white"
//           onClick={onToggle}
//         />
//       </Flex>

//       {/* Responsive Menu (Hidden on large screens) */}
//       <Box display={{ base: isOpen ? "block" : "none", md: "none" }} mt={4} w="full">
//         <Box p={2} bg="teal.600" rounded="md" shadow="md">
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Docs
//             </Button>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Link to="/playground">
//               <Button display="block" variant="ghost" w="full">
//                 Playground
//               </Button>
//             </Link>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Link to="/pricing">
//               <Button display="block" variant="ghost" w="full">
//                 Pricing
//               </Button>
//             </Link>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Link to="/sidebar">
//               <Button display="block" variant="ghost" w="full">
//                 Demo
//               </Button>
//             </Link>
//           </Box>
//           <Box mr={4} mb={2}>
//             <Button display="block" variant="ghost" w="full">
//               Contact
//             </Button>
//           </Box>
//           {!isLoggedIn && (
//             <Box mb={2}>
//               <Link to="/signup">
//                 <Button colorScheme="teal" variant="solid" w="full">
//                   Sign Up
//                 </Button>
//               </Link>
//             </Box>
//           )}
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default Navbar;


//-------------------------------------------------------------------------




import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  IconButton,
  useDisclosure,
  Text,
  Center,
  Portal,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isOpen, onToggle } = useDisclosure();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status
  const userName = localStorage.getItem('userName');
  const [showDropdown, setShowDropdown] = useState(false); // State to track the visibility of the dropdown
  const [selectedOption, setSelectedOption] = useState(null); // State to track the selected option
  const btnRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (btnRef.current && !btnRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleBtnClick = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleLogout = () => {
    // Code to handle user logout, if required
    setIsLoggedIn(false);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false);
  };

  const DropdownMenu = () => {
    return (
      <Portal>
        <Box
          position="absolute"
          top="40px"
          right="0"
          bg="teal.600"
          rounded="md"
          shadow="md"
          zIndex="1"
          p={2}
          onClick={() => setShowDropdown(false)} // Close the dropdown when clicked outside
        >
          <Box mb={2}>{userName}</Box>
          {/* Add user's email here */}
          <Box mb={2} onClick={() => handleOptionClick("Manage account")}>
            <Button>Manage Account</Button>
          </Box>
          <Box mb={2} onClick={() => handleOptionClick("View API keys")}>
            <Button>View API keys</Button>
          </Box>
          <Box mb={2} onClick={() => handleOptionClick("Invite team")}>
            <Button>Invite team</Button>
          </Box>
          <Box mb={2} onClick={() => handleOptionClick("Visit QuickSort")}>
            <Button>Visit QuickSort</Button>
          </Box>
          {/* Add other options as needed */}
          <Box mb={2} onClick={() => handleOptionClick("Help")}>
            <Button>Help</Button>
          </Box>
          <Box mb={2} onClick={() => handleOptionClick("Pricing")}>
            <Button>Pricing</Button>
          </Box>
          <Box mb={2} onClick={() => handleOptionClick("Terms & policies")}>
            <Button>Terms & policies</Button>
          </Box>
          <Box mb={2}>
            <Button colorScheme="teal" variant="solid" w="full" onClick={handleLogout}>
              Log out
            </Button>
          </Box>
        </Box>
      </Portal>
    );
  };

  return (
    <Box position="fixed" top="0" left="0" right="0" bg="teal.800" p={4} zIndex="9999">
      {/* Navbar container */}
      <Flex align="center" height="40px">
        {/* Logo */}
        <Box>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5GHe702WIFcBcEwA2-TP82YwZZHlnL4yoRQ&usqp=CAU"
            alt="Logo"
            width="100"
          />
        </Box>

        {/* Website Name */}
        <Text
          fontSize={{ base: "20px", md: "25px" }}
          fontWeight="bold"
          textTransform="uppercase"
          ml={5}
          marginBottom={-0.25}
          color={"Highlight"}
          display={{ base: "block", md: "block" }}
        >
          QuickSort.Ai
        </Text>

        {/* Spacer */}
        <Spacer />

        {/* Menu Links (Visible on large screens) */}
        <Flex display={{ base: "none", md: "flex" }} alignItems="center">
          <Box mr={4}>
            <Button variant="ghost">Docs</Button>
          </Box>
          <Box mr={4}>
            <Link to="/playground">
              <Button variant="ghost">Playground</Button>
            </Link>
          </Box>
          <Box mr={4}>
            <Link to="/pricing">
              <Button variant="ghost">Pricing</Button>
            </Link>
          </Box>
          <Box mr={4}>
            <Link to="/sidebar">
              <Button variant="ghost">Demo</Button>
            </Link>
          </Box>
          <Box mr={4}>
            <Link to="/waitlist">
              <Button variant="ghost">Contact</Button>
            </Link>
          </Box>
        </Flex>

        {/* Conditionally render the dropdown box */}
      

{userName ? (
          <Box position="relative" id="accountMenu" onClick={handleBtnClick} ref={btnRef}>
            <Button
              colorScheme="teal"
              variant="solid"
              onClick={() => setIsLoggedIn(false)} // Handle click to log out
              display={{ base: "none", md: "block" }}
            >
              {/* Replace the Sign Up text with the user's name */}
              {userName}
            </Button>
            {showDropdown && <DropdownMenu />}
          </Box>
        ) : (
          <Link to="/signup">
            <Button colorScheme="teal" variant="solid" display={{ base: "none", md: "block" }}>
              Sign Up
            </Button>
          </Link>
        )}




        {/* Hamburger Icon (Visible on small screens) */}
        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label="Menu"
          icon={<HamburgerIcon />}
          color="white"
          onClick={onToggle}
        />
      </Flex>

      {/* Responsive Menu (Hidden on large screens) */}
      <Box display={{ base: isOpen ? "block" : "none", md: "none" }} mt={4} w="full">
        <Box p={2} bg="teal.600" rounded="md" shadow="md">
          <Box mr={4} mb={2}>
            <Button display="block" variant="ghost" w="full">
              Docs
            </Button>
          </Box>
          <Box mr={4} mb={2}>
            <Link to="/playground">
              <Button display="block" variant="ghost" w="full">
                Playground
              </Button>
            </Link>
          </Box>
          <Box mr={4} mb={2}>
            <Link to="/pricing">
              <Button display="block" variant="ghost" w="full">
                Pricing
              </Button>
            </Link>
          </Box>
          <Box mr={4} mb={2}>
            <Link to="/sidebar">
              <Button display="block" variant="ghost" w="full">
                Demo
              </Button>
            </Link>
          </Box>
          <Box mr={4} mb={2}>
            <Button display="block" variant="ghost" w="full">
              Contact
            </Button>
          </Box>
          {!isLoggedIn && (
            <Box mb={2}>
              <Link to="/signup">
                <Button colorScheme="teal" variant="solid" w="full">
                  Sign Up
                </Button>
              </Link>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
