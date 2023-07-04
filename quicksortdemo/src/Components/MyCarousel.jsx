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



import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './MyCarousel.css';

export default function MyCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % 3);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="carousel-container">
    <Carousel activeIndex={index} onSelect={(selectedIndex) => setIndex(selectedIndex)} interval={null} pause={false}>
      <Carousel.Item>
        <img
          src="https://cdn.analyticsvidhya.com/wp-content/uploads/2021/05/36882NLP-e1595362635214.jpg"
          className="d-block w-100"
          alt="Slide 1"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://codesrevolvewordpress.s3.us-west-2.amazonaws.com/revolveai/2022/05/15110810/natural-language-processing-techniques.png"
          className="d-block w-100"
          alt="Slide 2"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://storage.googleapis.com/aliz-website-sandbox-strapi-cms/Natural_Language_Processing_03_1_png_1a3c947369/Natural_Language_Processing_03_1_png_1a3c947369.webp"
          className="d-block w-100"
          alt="Slide 3"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
