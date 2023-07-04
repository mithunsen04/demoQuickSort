// // import React, { useState } from 'react';

// // const Waitlist = () => {
// //   const [email, setEmail] = useState('');
// //   const [message, setMessage] = useState('');

// //   const handleEmailChange = (e) => {
// //     setEmail(e.target.value);
// //   };

// //   const handleMessageChange = (e) => {
// //     setMessage(e.target.value);
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     // Perform any necessary actions with the collected data
// //     // e.g., send the email and message to a backend server
// //     // or store them in a database
// //     setEmail('');
// //     setMessage('');
// //     alert('Thank you for joining our waitlist!');
// //   };

// //   return (
// //     <div className="container">
// //       <h1 className="text-center mt-5 mb-4">Join Our Waitlist</h1>
// //       <div className="row justify-content-center">
// //         <div className="col-md-6">
// //           <form onSubmit={handleSubmit}>
// //             <div className="mb-3">
// //               <label htmlFor="email" className="form-label">Email</label>
// //               <input
// //                 type="email"
// //                 className="form-control"
// //                 id="email"
// //                 value={email}
// //                 onChange={handleEmailChange}
// //                 required
// //               />
// //             </div>
// //             <div className="mb-3">
// //               <label htmlFor="message" className="form-label">Message</label>
// //               <textarea
// //                 className="form-control"
// //                 id="message"
// //                 rows="5"
// //                 value={message}
// //                 onChange={handleMessageChange}
// //               ></textarea>
// //             </div>
// //             <button type="submit" className="btn btn-primary">Submit</button>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Waitlist;





// import React, { useState } from 'react';
// import { FontAwesomeIcon } from 'react-icons/fa';
// import './Waitlist.css';

// const Waitlist = () => {
//   const [email, setEmail] = useState('');
//   const [message, setMessage] = useState('');

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handleMessageChange = (e) => {
//     setMessage(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Perform any necessary actions with the collected data
//     // e.g., send the email and message to a backend server
//     // or store them in a database
//     setEmail('');
//     setMessage('');
//     alert('Thank you for joining our waitlist!');
//   };

//   return (
//     <div className="waitlist-container">
//       <div className="row">
//         <div className="col-md-6 waitlist-form-container">
//           <h1 className="waitlist-title">Join Our Waitlist</h1>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-3">
//               <label htmlFor="email" className="form-label">Email</label>
//               <input
//                 type="email"
//                 className="form-control"
//                 id="email"
//                 value={email}
//                 onChange={handleEmailChange}
//                 required
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="message" className="form-label">Message</label>
//               <textarea
//                 className="form-control"
//                 id="message"
//                 rows="5"
//                 value={message}
//                 onChange={handleMessageChange}
//               ></textarea>
//             </div>
//             <button type="submit" className="btn btn-primary">Submit</button>
//           </form>
//         </div>
//         <div className="col-md-6 waitlist-image-container">
//           <img
//             src="https://otssolutions.com/wp-content/uploads/2018/07/Artificial-Intelligence-and-Customer-Experience.png"
//             alt="Waitlist"
//             className="waitlist-image"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Waitlist;




import React, { useState } from 'react';
import { FontAwesomeIcon } from 'react-icons/fa';
import './Waitlist.css';

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the collected data
    // e.g., send the email and message to a backend server
    // or store them in a database
    setEmail('');
    setMessage('');
    alert('Thank you for joining our waitlist!');
  };

  return (
    <div className="waitlist-container">
      <div className="row">
        <div className="col-md-6 waitlist-form-container">
          <h1 className="waitlist-title">Join Our Waitlist</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="email" className="form-label waitlist-form-label">Email</label>
              <input
                type="email"
                className="form-control waitlist-form-control"
                id="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label waitlist-form-label">Message</label>
              <textarea
                className="form-control waitlist-form-control"
                id="message"
                rows="5"
                value={message}
                onChange={handleMessageChange}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
        <div className="col-md-6 waitlist-image-container">
          <img
            src="https://otssolutions.com/wp-content/uploads/2018/07/Artificial-Intelligence-and-Customer-Experience.png"
            alt="Waitlist"
            className="waitlist-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Waitlist;
