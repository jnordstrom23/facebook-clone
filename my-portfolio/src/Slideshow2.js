import React, { useState, useEffect } from 'react';
import "./Slideshow2.css";

const Slideshow2 = ({ images2, intervalTime }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Update the current image index
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images2.length);
    }, intervalTime);

    return () => clearInterval(interval);
  }, [images2, intervalTime]);

  return (
    <div className="slideshow2">
      <img src={images2[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} />
    </div>
  );
};

export default Slideshow2;