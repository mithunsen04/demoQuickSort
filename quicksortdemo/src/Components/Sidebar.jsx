


// import React, { ReactNode } from 'react';
// import {
//   IconButton,
//   Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   useDisclosure,
//   BoxProps,
//   FlexProps,
// } from '@chakra-ui/react';
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
// } from 'react-icons/fi';
// import { IconType } from 'react-icons';
// import { ReactText } from 'react';

// interface LinkItemProps {
//   name: string;
//   icon: IconType;
// }
// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Home', icon: FiHome },
//   { name: 'Trending', icon: FiTrendingUp },
//   { name: 'Explore', icon: FiCompass },
//   { name: 'Favourites', icon: FiStar },
//   { name: 'Settings', icon: FiSettings },
// ];

// export default function Sidebar({ children }: { children: ReactNode }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   return (
//     <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>
//       <SidebarContent
//         onClose={() => onClose}
//         display={{ base: 'none', md: 'block' }}
//       />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full">
//         <DrawerContent>
//           <SidebarContent onClose={onClose} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       <MobileNav display={{ base: 'flex', md: 'none' }} onOpen={onOpen} />
//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {children}
//       </Box>
//     </Box>
//   );
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}>
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
//           Logo
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
// const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
//   return (
//     <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }
// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent="flex-start"
//       {...rest}>
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />

//       <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//         Logo
//       </Text>
//     </Flex>
//   );
// };







//-------------------------------------------------------------------------------------------------------







// import React, { ReactNode } from 'react';
// import {
//   IconButton,
//   Box,
//   CloseButton,
//   Flex,
//   Icon,
//   useColorModeValue,
//   Link,
//   Drawer,
//   DrawerContent,
//   Text,
//   useDisclosure,
//   BoxProps,
//   FlexProps,
// } from '@chakra-ui/react';
// import {
//   FiHome,
//   FiTrendingUp,
//   FiCompass,
//   FiStar,
//   FiSettings,
//   FiMenu,
// } from 'react-icons/fi';
// import { IconType } from 'react-icons';
// import { ReactText } from 'react';

// import Explore from './Explore';
// import Trending from './Trending';
// import Dashboard from './Dashboard';
// import ApiKeys from './ApiKeys';
// import Wallet from './Wallet';
// import Playground from './Playground';



// interface LinkItemProps {
//   name: string;
//   icon: IconType;
//   component: ReactNode;
// }

// const LinkItems: Array<LinkItemProps> = [
//   { name: 'Dashboard', icon: FiHome, component: <Dashboard/>  },
//   { name: 'Playground', icon: FiTrendingUp, component: <Playground/> },
//   { name: 'API Keys', icon: FiCompass, component: <ApiKeys/> },
//   { name: 'Wallet', icon: FiStar, component: <Wallet/> },
//   { name: 'API Logs', icon: FiSettings, component: <div>Settings Component</div> },
// ];

// export default function Sidebar({ children }: { children: ReactNode }) {
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const [activeComponent, setActiveComponent] = React.useState<ReactNode>(null);

//   const handleLinkItemClick = (component: ReactNode) => {
//     setActiveComponent(component);
//     onClose();
//   };

//   return (
//     <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')} py={"25px"} >
//       <SidebarContent onClose={onClose} onLinkItemClick={handleLinkItemClick} />
//       <Drawer
//         autoFocus={false}
//         isOpen={isOpen}
//         placement="left"
//         onClose={onClose}
//         returnFocusOnClose={false}
//         onOverlayClick={onClose}
//         size="full"
//       >
//         <DrawerContent>
//           <SidebarContent onClose={onClose} onLinkItemClick={handleLinkItemClick} />
//         </DrawerContent>
//       </Drawer>
//       {/* mobilenav */}
//       {/* <MobileNav onOpen={onOpen} /> */}
//       <Box ml={{ base: 0, md: 60 }} p="4">
//         {activeComponent || children}
//       </Box>
//     </Box>
//   );
// }

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
//   onLinkItemClick: (component: ReactNode) => void;
// }

// const SidebarContent = ({ onClose, onLinkItemClick, ...rest }: SidebarProps) => {
//   return (
//     <Box
//       bg={useColorModeValue('white', 'gray.900')}
//       borderRight="1px"
//       borderRightColor={useColorModeValue('gray.200', 'gray.700')}
//       w={{ base: 'full', md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}
//     >
//       <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
//         <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color={'orange.400'}>
//           QuickSort AI
//         </Text>
//         <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem
//           key={link.name}
//           icon={link.icon}
//           onClick={() => onLinkItemClick(link.component)}
//         >
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// }

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
//   onClick: () => void;
// }

// const NavItem = ({ icon, children, onClick, ...rest }: NavItemProps) => {
//   return (
//     <Link href="#" style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
//       <Flex
//         align="center"
//         p="4"
//         mx="4"
//         borderRadius="lg"
//         role="group"
//         cursor="pointer"
//         _hover={{
//           bg: 'cyan.400',
//           color: 'white',
//         }}
//         onClick={onClick}
//         {...rest}
//       >
//         {icon && (
//           <Icon
//             mr="4"
//             fontSize="16"
//             _groupHover={{
//               color: 'white',
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// }

// interface MobileProps extends FlexProps {
//   onOpen: () => void;
// }

// const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
//   return (
//     <Flex
//       ml={{ base: 0, md: 60 }}
//       px={{ base: 4, md: 24 }}
//       height="20"
//       alignItems="center"
//       bg={useColorModeValue('white', 'gray.900')}
//       borderBottomWidth="1px"
//       borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
//       justifyContent="flex-start"
//       {...rest}
//     >
//       <IconButton
//         variant="outline"
//         onClick={onOpen}
//         aria-label="open menu"
//         icon={<FiMenu />}
//       />
//       <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
//         Logo
//       </Text>
//     </Flex>
//   );
// }



//---------------------------------------------------------------------------------------------

// // Sidebar.js

// import React, { useState } from 'react';
// import {
//   Box,
//   Flex,
//   Spacer,
//   VStack,
//   Text,
//   Divider,
//   IconButton,
//   Stack,
//   Drawer,
//   DrawerOverlay,
//   DrawerContent,
//   DrawerCloseButton,
//   DrawerBody,
//   useDisclosure,
// } from '@chakra-ui/react';
// import { FaBars, FaHome, FaCube, FaKey, FaHistory, FaSignOutAlt } from 'react-icons/fa';

// // Import your separate components for Dashboard, Playground, APIKeys, and APILogs here
// import Dashboard from './Dashboard';
// import Playground from './Playground';
// import ApiKeys from './ApiKeys';
// import ApiLogs from './ApiLogs';

// const Sidebar = () => {
//   const [selectedComponent, setSelectedComponent] = useState(null);
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   const handleComponentChange = (component) => {
//     setSelectedComponent(component);
//     onClose(); // Close the drawer after selecting a component on small screens
//   };

//   const renderRightComponent = () => {
//     switch (selectedComponent) {
//       case 'Dashboard':
//         return <Dashboard />;
//       case 'Playground':
//         return <Playground />;
//       case 'API Keys':
//         return <ApiKeys />;
//       case 'API Logs':
//         return <ApiLogs />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <>
//       {/* Sidebar menu button (hamburger icon) */}
//       <IconButton
//         icon={<FaBars />}
//         aria-label="Open Menu"
//         display={{ base: 'block', md: 'none' }} // Show only on small screens
//         onClick={onOpen}
//         position="fixed"
//         top="4"
//         left="4"
//         bg="transparent"
//         _hover={{ bg: 'transparent' }}
//       />

//       {/* Sidebar drawer */}
//       <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
//         <DrawerOverlay>
//           <DrawerContent bg="purple.800" color="white">
//             <DrawerCloseButton />
//             <DrawerBody p="4">
//               <VStack spacing="4" align="flex-start">
//                 <Box>
//                   {/* Your logo here */}
//                   {/* Replace 'YourLogo.svg' with the path to your logo file */}
//                   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EzBEmIsMjocC0iXCCUDP0kQPRwnMOhO4OA&usqp=CAU" alt="Logo" />
//                 </Box>
//                 <SidebarButton
//                   icon={<FaHome />}
//                   label="Dashboard"
//                   onClick={() => handleComponentChange('Dashboard')}
//                 />
//                 <SidebarButton
//                   icon={<FaCube />}
//                   label="Playground"
//                   onClick={() => handleComponentChange('Playground')}
//                 />
//                 <SidebarButton
//                   icon={<FaKey />}
//                   label="API Keys"
//                   onClick={() => handleComponentChange('API Keys')}
//                 />
//                 <SidebarButton
//                   icon={<FaHistory />}
//                   label="API Logs"
//                   onClick={() => handleComponentChange('API Logs')}
//                 />
//               </VStack>
//               <Divider />
//               <SidebarButton icon={<FaSignOutAlt />} label="Logout" />
//             </DrawerBody>
//           </DrawerContent>
//         </DrawerOverlay>
//       </Drawer>

//       {/* Sidebar */}
//       <Flex
//         direction="column"
//         position="fixed"
//         top="0"
//         left="0"
//         h="100vh"
//         w={{ base: '60px', md: '200px' }} // Adjust the width for different screen sizes
//         bg="purple.800" // Update the background color to your desired color
//         color="white"
//         p="4"
//         display={{ base: 'none', md: 'flex' }} // Hide on small screens, show on medium and larger screens
//       >
//         <VStack spacing="4" align="flex-start">
//           <Box>
//             {/* Your logo here */}
//             {/* Replace 'YourLogo.svg' with the path to your logo file */}
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EzBEmIsMjocC0iXCCUDP0kQPRwnMOhO4OA&usqp=CAU" alt="QuickSort Logo" />
//           </Box>
//           <SidebarButton
//             icon={<FaHome />}
//             label="Dashboard"
//             onClick={() => handleComponentChange('Dashboard')}
//           />
//           <SidebarButton
//             icon={<FaCube />}
//             label="Playground"
//             onClick={() => handleComponentChange('Playground')}
//           />
//           <SidebarButton
//             icon={<FaKey />}
//             label="API Keys"
//             onClick={() => handleComponentChange('API Keys')}
//           />
//           <SidebarButton
//             icon={<FaHistory />}
//             label="API Logs"
//             onClick={() => handleComponentChange('API Logs')}
//           />
//         </VStack>
//         <Spacer />
//         <Divider />
//         <SidebarButton icon={<FaSignOutAlt />} label="Logout" />
//       </Flex>

//       {/* Right-side component */}
//       <Box ml={{ base: 0, md: '200px' }} p="4">
//         {renderRightComponent()}
//       </Box>
//     </>
//   );
// };

// const SidebarButton = ({ icon, label, onClick }) => {
//   return (
//     <Stack direction="row" spacing="2" align="center" onClick={onClick} cursor="pointer">
//       <IconButton icon={icon} aria-label={label} variant="ghost" fontSize="xl" />
//       <Text fontSize="sm">{label}</Text>
//     </Stack>
//   );
// };

// export default Sidebar;








//--------------------------------------------------------------------------------



// Sidebar.js
// Sidebar.js

import React, { useState, useEffect } from 'react';
import {
  Box,
  Flex,
  Spacer,
  VStack,
  Text,
  Divider,
  IconButton,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  useDisclosure,
} from '@chakra-ui/react';
import { FaBars, FaHome, FaCube, FaKey, FaHistory, FaSignOutAlt } from 'react-icons/fa';

// Import your separate components for Dashboard, Playground, APIKeys, and APILogs here
import Dashboard from './Dashboard';
import Playground from './Playground';
import ApiKeys from './ApiKeys';
import ApiLogs from './ApiLogs';

const Sidebar = () => {
  const [selectedComponent, setSelectedComponent] = useState('Dashboard'); // Set 'Dashboard' as default component
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleComponentChange = (component) => {
    setSelectedComponent(component);
    onClose(); // Close the drawer after selecting a component on small screens
  };

  const renderRightComponent = () => {
    switch (selectedComponent) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Playground':
        return <Playground />;
      case 'API Keys':
        return <ApiKeys />;
      case 'API Logs':
        return <ApiLogs />;
      default:
        return null;
    }
  };

  // Reset selected component to 'Dashboard' when the user revisits the page
  useEffect(() => {
    setSelectedComponent('Dashboard');
  }, []);

  return (
    <>
      {/* Sidebar menu button (hamburger icon) */}
      <IconButton
        icon={<FaBars />}
        aria-label="Open Menu"
        display={{ base: 'block', md: 'none' }} // Show only on small screens
        onClick={onOpen}
        position="fixed"
        top="4"
        left="4"
        bg="transparent"
        _hover={{ bg: 'transparent' }}
      />

      {/* Sidebar drawer */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="purple.800" color="white">
            <DrawerCloseButton />
            <DrawerBody p="4">
              <VStack spacing="4" align="flex-start">
                <Box mb={{ base: 4, md: 8 }}>
                  {/* Your logo here */}
                  {/* Replace 'YourLogo.svg' with the path to your logo file */}
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EzBEmIsMjocC0iXCCUDP0kQPRwnMOhO4OA&usqp=CAU" alt="QuickSort Logo" />
                </Box>
                <SidebarButton
                  icon={<FaHome />}
                  label="Dashboard"
                  onClick={() => handleComponentChange('Dashboard')}
                />
                <SidebarButton
                  icon={<FaCube />}
                  label="Playground"
                  onClick={() => handleComponentChange('Playground')}
                />
                <SidebarButton
                  icon={<FaKey />}
                  label="API Keys"
                  onClick={() => handleComponentChange('API Keys')}
                />
                <SidebarButton
                  icon={<FaHistory />}
                  label="API Logs"
                  onClick={() => handleComponentChange('API Logs')}
                />
              </VStack>
              <Divider />
              <SidebarButton icon={<FaSignOutAlt />} label="Logout" />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>

      {/* Sidebar */}
      <Flex
        direction="column"
        position="fixed"
        top="0"
        left="0"
        h="100vh"
        w={{ base: '60px', md: '200px' }} // Adjust the width for different screen sizes
        bg="purple.800" // Update the background color to your desired color
        color="white"
        p="4"
        display={{ base: 'none', md: 'flex' }} // Hide on small screens, show on medium and larger screens
      >
        <VStack spacing="4" align="flex-start">
          <Box mb={{ base: 4, md: 8 }}>
            {/* Your logo here */}
            {/* Replace 'YourLogo.svg' with the path to your logo file */}
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9EzBEmIsMjocC0iXCCUDP0kQPRwnMOhO4OA&usqp=CAU" alt="QuickSort Logo" />
          </Box>
          <SidebarButton
            icon={<FaHome />}
            label="Dashboard"
            onClick={() => handleComponentChange('Dashboard')}
            
          />
          <SidebarButton
            icon={<FaCube />}
            label="Playground"
            onClick={() => handleComponentChange('Playground')}
          />
          <SidebarButton
            icon={<FaKey />}
            label="API Keys"
            onClick={() => handleComponentChange('API Keys')}
          />
          <SidebarButton
            icon={<FaHistory />}
            label="API Logs"
            onClick={() => handleComponentChange('API Logs')}
          />
        </VStack>
        <Spacer />
        <Divider />
        <SidebarButton icon={<FaSignOutAlt />} label="Logout" />
      </Flex>

      {/* Right-side component */}
      <Box
        ml={{ base: 0, md: '200px' }}
        p={{ base: 4, md: 0 }} // Adjust padding for small and larger screens
      >
        {renderRightComponent()}
      </Box>
    </>
  );
};

const SidebarButton = ({ icon, label, onClick }) => {
  return (
    <Stack direction="row" spacing="2" align="center" onClick={onClick} cursor="pointer" 
    

    direction="row"
      spacing="2"
      align="center"
      onClick={onClick}
      cursor="pointer"
      borderColor="purple.700" // Set the border color to purple.700 or any desired color
      borderWidth="1px" // Set the width of the border
      borderRadius="md" // Set the border radius to have rounded corners
      _hover={{ borderColor: "purple.100" }} // Set the border color on hover
      p={2} // Add some padding to the button for better visual appearance
    >
      <IconButton icon={icon} aria-label={label} variant="ghost" fontSize="xl" />
      <Text fontSize="sm" fontWeight="bold" mb={"5px"}>{label}</Text>
    </Stack>
  );
};

export default Sidebar;





//---------------------------------------------------------------------

