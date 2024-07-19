import React, { useState, useEffect } from 'react';
import letsConnect from '../images/btp.jpg';

const LetsConnect = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // You can adjust the scroll threshold value as needed
      if (window.scrollY > 100) {
        setShowImage(true);
      } else {
        setShowImage(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Detach the scroll event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <>
      {showImage && (
        <div className="icon-bar">
          <a href="#">
            <img src={letsConnect} className="facebook" alt='talk'/>
            <p className='talkCl mt-2'>Get in touch</p>
          </a> 
        </div>
      )}
    </>
  );
};

export default LetsConnect;
