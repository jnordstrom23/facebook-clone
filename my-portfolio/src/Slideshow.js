import "./Slideshow.css";

import React, { useState, useEffect } from 'react';

const Slideshow = ({ images, intervalTime }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images, intervalTime]);

  return (
    <div className="slideshow">
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Slideshow;
