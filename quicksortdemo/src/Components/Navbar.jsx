import React from "react";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Collapse,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

import "./Navbar.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();
  
  // Retrieve the user name from local storage
  const userName = localStorage.getItem('userName');

  return (
    <Box
      bg={useColorModeValue("gray.100", "gray.900")}
      px={9}
      width="100%"
      pb={"10px"}
      position="fixed" // Add this line to make the Navbar fixed
      zIndex="9999" // Add this line to adjust the stacking order of the Navbar
      
    >
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack
          w={{ base: "100%", md: "42%" }}
          justifyContent={{ base: "center", md: "flex-start" }}
        >
          <Text as="b" fontSize={{ base: "3xl", md: "5xl" }} color={'orange.400'}>
            QuickSort.AI
          </Text>
        </HStack>

        <Flex h={16} alignItems="center" justifyContent="space-between" pr={"20px"}  >
          <HStack
            as="nav"
            spacing={4}
            display={{ base: "none", md: "flex" }}
            id="myDIV"
          >
            <Button className="btnRes" bg={"#a891b7"}>
              <a href="#Docs">
                <b>Docs</b>
              </a>
            </Button>

            <Link to="/playground"><Button className="btnRes" bg={"#a891b7"}>
              <a href="#Playground">
                <b>Playground</b>
              </a>
            </Button></Link>

            <Button className="btnRes"  bg={"#a891b7"}>
              <a href="#Pricing">
                <b>Pricing</b>
              </a>
            </Button>

            <Link to="/sidebar"><Button className="btnRes" bg={"#a891b7"}>
              <a href="#Demo">
                <b>Demo</b>
              </a>
            </Button></Link> 

            <Button className="btnRes" bg={"#a891b7"}>
              <a href="#Contact">
                <b>Contact</b>
              </a>
            </Button>

            {/* <Button
           bg={"orange.400"}
            _hover={{ bg: "#a891b7", color: "black" }}
            color="white"
            variant="solid"
            size={["sm", "md"]}
            id="resumeBtn"
          >
            
            <Link to="/signup">Signup</Link>
          </Button> */}
           

           {userName ? (
            // Display the user's name instead of the signup button
            <Button
              bg={'orange.400'}
              _hover={{ bg: '#a891b7', color: 'black' }}
              color="white"
              variant="solid"
              size={['sm', 'md']}
              id="resumeBtn"
            >
              Hii, {userName}
              </Button>
          ) : (
            // Display the signup button
            <Link to="/signup"><Button
              bg={'orange.400'}
              _hover={{ bg: '#a891b7', color: 'black' }}
              color="white"
              variant="solid"
              size={['sm', 'md']}
              id="resumeBtn"
            >
             Signup
            </Button></Link>
          )}






          </HStack>

          {/* <IconButton
            icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            display={{ base: 'none', md: 'inline-flex' }}
          /> */}

          {/* <Button
            backgroundColor="#a891b7"
            _hover={{ bg: "#a891b7", color: "black" }}
            color="white"
            variant="solid"
            size={["sm", "md"]}
            id="resumeBtn"
          >
            
            <Link to="/signup">Signup</Link>
          </Button> */}
        </Flex>

        <IconButton
          size="md"
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label="Open Menu"
          display={{ md: "none" }}
          onClick={onToggle}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box pb={4} display={{ md: "none" }}>
          <Stack as="nav" spacing={4}>
            {/* Menu items */}
          </Stack>
        </Box>
      </Collapse>

      <Modal isOpen={isOpen} onClose={onToggle} size="sm">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Menu</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={4}>
              <Button className="btnRes">
                <a href="#Docs">
                  <b>Docs</b>
                </a>
              </Button>

              <Button className="btnRes">
                <a href="#Playground">
                  <b>Playground</b>
                </a>
              </Button>

              <Button className="btnRes">
                <a href="#Pricing">
                  <b>Pricing</b>
                </a>
              </Button>

              <Button className="btnRes">
                <a href="#Demo">
                  <b>Demo</b>
                </a>
              </Button>

              <Button className="btnRes">
                <a href="#Contact">
                  <b>Contact</b>
                </a>
              </Button>

              <Button className="btnRes">
                <Link to="/signup">Signup</Link>
              </Button>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}




//--------------------------------------------------------------------------------------------
