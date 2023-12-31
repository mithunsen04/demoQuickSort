

// import React from 'react';
// import './Offer.css';

// const Offer = () => {
//   return (
//     <div className="offer-container">
//       <h1 className="offer-title">Experience the Power of QuickSort.AI</h1>
//       <p className="offer-description">
//         Enjoy the first 6 months of our premium NLP services <strong>completely free</strong>. Unlock the full potential of AI-driven language processing, gain valuable insights, and supercharge your business operations <strong>at no cost</strong>.
//       </p>
//       <p className="offer-cta">
//         Don't miss this opportunity to embark on your NLP journey with QuickSort.AI and witness the transformative impact it can have on your organization. Start maximizing efficiency, accuracy, and innovation today with our unparalleled <strong>6-month free service package</strong>.
//       </p>
//     </div>
//   );
// };

// export default Offer;




// import React from 'react';
// import './Offer.css';

// const Offer = () => {
//   return (
//     <div className="offer-container">
//       <h1 className="offer-title">Experience the Power of QuickSort.AI</h1>
//       <p className="offer-description">
//         Enjoy the first 6 months of our premium NLP services <strong>completely free</strong>. Unlock the full potential of AI-driven language processing, gain valuable insights, and supercharge your business operations <strong>at no cost</strong>.
//       </p>
//       <p className="offer-cta">
//         Don't miss this opportunity to embark on your NLP journey with QuickSort.AI and witness the transformative impact it can have on your organization. Start maximizing efficiency, accuracy, and innovation today with our unparalleled <strong>6-month free service package</strong>.
//       </p>
//     </div>
//   );
// };

// export default Offer;


// import React from 'react';
// import './Offer.css';

// const Offer = () => {
//   return (
//     <div className="offer-container">
//       <div className="offer-left">
//         <h1 className="offer-title">Experience the Power of QuickSort.AI</h1>
//         <p className="offer-description">
//           Enjoy the first 6 months of our premium NLP services <strong>completely free</strong>.<br></br> Unlock the full potential of AI-driven language processing, gain valuable<br/>insights and supercharge your business operations <strong>at no cost</strong>.
//         </p>
//       </div>
//       <div className="offer-right">
//         <p className="offer-cta">
//           Don't miss this opportunity to embark on your NLP journey with QuickSort.AI and witness the transformative impact it can have on your organization. Start maximizing efficiency, accuracy, and innovation today with our unparalleled
//           <strong> 6-month free service package</strong>.
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Offer;




import React from 'react';
import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const Offer = () => {
  return (
    <Flex direction={['column', 'column', 'row']} p={4} className="offer-container">
      <Box flex={['unset', 'unset', 1]} pr={[0, 0, 4]} className="offer-left">
        <Heading as="h1" textAlign={['center', 'center', 'center']} className="offer-title">
          Experience the Power of QuickSort.AI
        </Heading>
        <Text textAlign={['center', 'center', 'center']} className="offer-description">
          Enjoy the first 6 months of our premium NLP services <strong>completely free</strong>.<br /> Unlock the full potential of AI-driven language processing, gain valuable<br />insights and supercharge your business operations <strong>at no cost</strong>.
        </Text>
      </Box>
      <Box flex={['unset', 'unset', 1]} className="offer-right">
        <Text textAlign={['center', 'center', 'left']} className="offer-cta" color={'white'}  as='b' fontSize='15px'>
          Don't miss this opportunity to embark on your NLP journey with QuickSort.AI and witness the transformative impact it can have on your organization. Start maximizing efficiency, accuracy, and innovation today with our unparalleled
          <strong> 6-month free service package</strong>.
        </Text>
      </Box>
    </Flex>
  );
};

export default Offer;
