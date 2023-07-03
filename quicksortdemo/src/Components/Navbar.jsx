


import React from 'react';
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import './Navbar.css';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div id="navFix">
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={9} width={['100%']}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <HStack w="42%">
            <Text as="b" fontSize="5xl">
              QuickSort.AI
            </Text>
            <Show breakpoint="(min-width: 1000px)"></Show>
          </HStack>

          <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
            <HStack spacing={8} alignItems={'center'}>
              <HStack
                as={'nav'}
                spacing={4}
                display={{ base: 'none', md: 'flex' }}
                id="myDIV"
              >
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
              </HStack>
            </HStack>
          </Flex>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <IconButton
                icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
              />

              <Button
                backgroundColor="#a891b7"
                _hover={{ bg: '#a891b7', color: 'black' }}
                color="white"
                variant="solid"
                size={['sm', 'md']}
                id="resumeBtn"
              >
                <a target="_blank">Sign Up</a>
              </Button>
            </Stack>
          </Flex>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {isOpen ? (
            <Box pb={4} display={{ md: 'none' }}>
              <Stack as={'nav'} spacing={4}>
                {/* Menu items */}
              </Stack>
            </Box>
          ) : null}
        </Flex>
      </Box>
    </div>
  );
}