


// import {
//     Box,
//     chakra,
//     SimpleGrid,
//     Stat,
//     StatLabel,
//     StatNumber,
//     useColorModeValue,
//   } from '@chakra-ui/react';
  
//   interface StatsCardProps {
//     title: string;
//     stat: string;
//   }
//   function StatsCard(props: StatsCardProps) {
//     const { title, stat } = props;
//     return (
//       <Stat
//         px={{ base: 4, md: 8 }}
//         py={'5'}
//         shadow={'xl'}
//         border={'1px solid'}
//         borderColor={useColorModeValue('gray.800', 'gray.500')}
//         rounded={'lg'}>
//         <StatLabel fontWeight={'medium'} isTruncated>
//           {title}
//         </StatLabel>
//         <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
//           {stat}
//         </StatNumber>
//       </Stat>
//     );
//   }
  
//   export default function Dashboard() {
//     return (
//       <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
//         <chakra.h1
//           textAlign={'center'}
//           fontSize={'4xl'}
//           py={10}
//           fontWeight={'bold'}>
//           Dashboard : 
//         </chakra.h1>
//         <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} pr={"20px"} >
//           <StatsCard title={'CREDITS'} stat={'0.0488'} />
//           <StatsCard title={'API KEYS'} stat={'1'} />
//           <StatsCard title={'API HITS'} stat={'5'} />
//         </SimpleGrid>
//       </Box>
//     );
//   }



//------------------------------------------------------------------------------------------------------------





import React from 'react';
import {
  Box,
  chakra,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from '@chakra-ui/react';

// Define the interface for the StatsCardProps
interface StatsCardProps {
  title: string;
  stat: string;
}

// Create the StatsCard component
function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 4, md: 8 }}
      py={'5'}
      shadow={'xl'}
      border={'1px solid'}
      borderColor={useColorModeValue('gray.800', 'gray.500')}
      rounded={'lg'}
      width="100%" // Set the width to 100% for responsiveness
      minWidth="0" // Allow the element to shrink when needed
      textAlign="center" // Center-align the content
    >
      <StatLabel fontWeight={'medium'} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

// Define the Dashboard component
function Dashboard() {
  return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={{ base: '3xl', md: '4xl' }} // Set different font sizes based on screen size
        py={10}
        fontWeight={'bold'} color={"orange.300"}>
        Dashboard:
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }} pr={['0', '20px']} >
        <StatsCard title={'CREDITS'} stat={'0.0488'} />
        <StatsCard title={'API KEYS'} stat={'1'} />
        <StatsCard title={'API HITS'} stat={'5'} />
      </SimpleGrid>
    </Box>
  );
}

export default Dashboard;
