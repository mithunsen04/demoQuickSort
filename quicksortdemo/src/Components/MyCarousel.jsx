// import React from 'react';
// import { Carousel } from 'react-bootstrap';
// import './MyCarousel.css';

// export default function MyCarousel() {
//   return (
//     <Carousel interval={10000} wrap>
//       <Carousel.Item>
//         <img
//           src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/36882NLP-e1595362635214.jpg"
//           className="d-block w-100"
//           alt="Slide 1"
//         />
//       </Carousel.Item>
//       <Carousel.Item interval={2000}>
//         <img
//           src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/05/15110810/natural-language-processing-techniques.png"
//           className="d-block w-100"
//           alt="Slide 2"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           src="https://storage.googleapis.com/aliz-website-sandbox-strapi-cms/Natural_Language_Processing_03_1_png_1a3c947369/Natural_Language_Processing_03_1_png_1a3c947369.webp"
//           className="d-block w-100"
//           alt="Slide 3"
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// }



import React, { useEffect, useState, useRef } from 'react';
import { Carousel } from 'react-bootstrap';
import './MyCarousel.css';

export default function MyCarousel() {
  const [index, setIndex] = useState(0);
  const carouselRef = React.useRef(null);
  const [carouselHeight, setCarouselHeight] = React.useState(0);

  React.useEffect(() => {
    if (carouselRef.current) {
      const height = carouselRef.current.clientHeight;
      setCarouselHeight(height);
    }
  }, []);
  const getImageStyles = () => {
    return {
      width: '100%',
      height: carouselHeight,
      objectFit: 'cover',
    };
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container" ref={carouselRef}>
    <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} interval={null} pause={false}>
      <Carousel.Item>
        <img
          src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/36882NLP-e1595362635214.jpg"
          className="d-block "
          alt="Slide 1"
          style={getImageStyles()}

        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/05/15110810/natural-language-processing-techniques.png"
          className="d-block "
          alt="Slide 2"
          style={getImageStyles()}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://storage.googleapis.com/aliz-website-sandbox-strapi-cms/Natural_Language_Processing_03_1_png_1a3c947369/Natural_Language_Processing_03_1_png_1a3c947369.webp"
          className="d-block"
          alt="Slide 3"
          style={getImageStyles()}
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-bootstrap';

// const MyCarousel = () => {
//   const [carouselHeight, setCarouselHeight] = useState(0);
//   const [index, setIndex] = useState(0);
//     useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);
//   useEffect(() => {
//     const updateCarouselHeight = () => {
//       const carouselContainer = document.getElementById('carousel-container');
//       if (carouselContainer) {
//         const { height } = carouselContainer.getBoundingClientRect();
//         setCarouselHeight(height);
//       }
//     };

//     updateCarouselHeight();
//     window.addEventListener('resize', updateCarouselHeight);
//     return () => {
//       window.removeEventListener('resize', updateCarouselHeight);
//     };
//   }, []);

//   const handleSelect = (selectedIndex) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <div id="carousel-container" style={{ height: carouselHeight, overflow: 'hidden' }}>
//       <Carousel activeIndex={index} onSelect={handleSelect} interval={null} pause={false}>
//         <Carousel.Item>
//           <img
//             src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/36882NLP-e1595362635214.jpg"
//             className="d-block w-100"
//             alt="Slide 1"
//             style={{ objectFit: 'cover', height: '100%' }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/05/15110810/natural-language-processing-techniques.png"
//             className="d-block w-100"
//             alt="Slide 2"
//             style={{ objectFit: 'cover', height: '100%' }}
//           />
//         </Carousel.Item>
//         <Carousel.Item>
//           <img
//             src="https://storage.googleapis.com/aliz-website-sandbox-strapi-cms/Natural_Language_Processing_03_1_png_1a3c947369/Natural_Language_Processing_03_1_png_1a3c947369.webp"
//             className="d-block w-100"
//             alt="Slide 3"
//             style={{ objectFit: 'cover', height: '100%' }}
//           />
//         </Carousel.Item>
//       </Carousel>
//     </div>
//   );
// };

// export default MyCarousel;



// impliment this one -----------------------------------------------------------------------------

// 


//up of the component use for right --------------------------------------------------------------------------

// import React, { useEffect, useState } from 'react';
// import { Box, Container } from '@chakra-ui/react';
// import { Carousel } from 'react-bootstrap';
// import './MyCarousel.css';

// const MyCarousel = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Container maxW="10xl">
//       <Box className="carousel-container" w="100%" h="100px">
//         <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} interval={null} pause={false}>
//           <div className="carousel-item-wrapper">
//             <Carousel.Item>
//               <img
//                 src="https://thinkpalm.com/wp-content/uploads/2019/04/BLOG_NLP-FOR-ARTIFICIAL-INTELLIGENCE_72-1.jpg"
//                 className="d-block w-100"
//                 alt="Slide 1"
//               />
//             </Carousel.Item>
//           </div>
//           <div className="carousel-item-wrapper">
//             <Carousel.Item>
//               <img
//                 src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/05/15110810/natural-language-processing-techniques.png"
//                 className="d-block w-100"
//                 alt="Slide 2"
//               />
//             </Carousel.Item>
//           </div>
//           <div className="carousel-item-wrapper">
//             <Carousel.Item>
//               <img
//                 src="https://storage.googleapis.com/aliz-website-sandbox-strapi-cms/Natural_Language_Processing_03_1_png_1a3c947369/Natural_Language_Processing_03_1_png_1a3c947369.webp"
//                 className="d-block w-100"
//                 alt="Slide 3"
//               />
//             </Carousel.Item>
//           </div>
//         </Carousel>
//       </Box>
//     </Container>
//   );
// };

// export default MyCarousel;





















// import React, { useEffect, useState } from 'react';
// import { Box, AspectRatio } from '@chakra-ui/react';
// import { Carousel } from 'react-bootstrap';

// const MyCarousel = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Box className="carousel-container">
//       <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} interval={null} pause={false}>
//         <Carousel.Item>
//           <AspectRatio ratio={16 / 9}>
//             <img
//               src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/36882NLP-e1595362635214.jpg"
//               className="d-block w-100"
//               alt="Slide 1"
//             />
//           </AspectRatio>
//         </Carousel.Item>
//         <Carousel.Item>
//           <AspectRatio ratio={16 / 9}>
//             <img
//               src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/05/15110810/natural-language-processing-techniques.png"
//               className="d-block w-100"
//               alt="Slide 2"
//             />
//           </AspectRatio>
//         </Carousel.Item>
//         <Carousel.Item>
//           <AspectRatio ratio={16 / 9}>
//             <img
//               src="https://storage.googleapis.com/aliz-website-sandbox-strapi-cms/Natural_Language_Processing_03_1_png_1a3c947369/Natural_Language_Processing_03_1_png_1a3c947369.webp"
//               className="d-block w-100"
//               alt="Slide 3"
//             />
//           </AspectRatio>
//         </Carousel.Item>
//       </Carousel>
//     </Box>
//   );
// };

// export default MyCarousel;



// import React, { useEffect, useState } from 'react';
// import { Box, AspectRatio, Flex } from '@chakra-ui/react';
// import { Carousel } from 'react-bootstrap';

// const MyCarousel = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   return (
//     <Flex justify="center" align="center" height="25vh">
//       <Box width="75%">
//         <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} interval={null} pause={false}>
//           <Carousel.Item>
//             <AspectRatio ratio={16 / 9}>
//               <img
//                 src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/36882NLP-e1595362635214.jpg"
//                 className="d-block w-100"
//                 alt="Slide 1"
//               />
//             </AspectRatio>
//           </Carousel.Item>
//           <Carousel.Item>
//             <AspectRatio ratio={16 / 9}>
//               <img
//                 src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/05/15110810/natural-language-processing-techniques.png"
//                 className="d-block w-100"
//                 alt="Slide 2"
//               />
//             </AspectRatio>
//           </Carousel.Item>
//           <Carousel.Item>
//             <AspectRatio ratio={16 / 9}>
//               <img
//                 src="https://storage.googleapis.com/aliz-website-sandbox-strapi-cms/Natural_Language_Processing_03_1_png_1a3c947369/Natural_Language_Processing_03_1_png_1a3c947369.webp"
//                 className="d-block w-100"
//                 alt="Slide 3"
//               />
//             </AspectRatio>
//           </Carousel.Item>
//         </Carousel>
//       </Box>
//     </Flex>
//   );
// };

// export default MyCarousel;





// import React, { useEffect, useState } from 'react';
// import { Box } from '@chakra-ui/react';
// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import './MyCarousel.css';

// const MyCarousel = () => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prevIndex) => (prevIndex + 1) % 3);
//     }, 3000);

//     return () => {
//       clearInterval(interval);
//     };
//   }, []);

//   const options = {
//     items: 1,
//     loop: true,
//     autoplay: false,
//     autoplayTimeout: 3000,
//     autoplayHoverPause: true,
//     responsive: {
//       768: {
//         items: 2
//       },
//       1024: {
//         items: 3
//       }
//     }
//   };

//   return (
//     <Box className="carousel-container">
//       <OwlCarousel {...options}>
//         <div className="item">
//           <img
//             src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/36882NLP-e1595362635214.jpg"
//             className="d-block w-100"
//             alt="Slide 1"
//           />
//         </div>
//         <div className="item">
//           <img
//             src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/05/15110810/natural-language-processing-techniques.png"
//             className="d-block w-100"
//             alt="Slide 2"
//           />
//         </div>
//         <div className="item">
//           <img
//             src="https://storage.googleapis.com/aliz-website-sandbox-strapi-cms/Natural_Language_Processing_03_1_png_1a3c947369/Natural_Language_Processing_03_1_png_1a3c947369.webp"
//             className="d-block w-100"
//             alt="Slide 3"
//           />
//         </div>
//       </OwlCarousel>
//     </Box>
//   );
// };

// export default MyCarousel;
