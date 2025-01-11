import React, { useState } from "react";
import "../assets/styles/Design.scss";
import image1 from '../assets/images/Design/1.jpg'; 
import image2 from '../assets/images/Design/bnc_road.jpg'; 
import image3 from '../assets/images/Design/crypto_bajaj_1.jpg'; 
import image4 from '../assets/images/Design/image1.png'; 
import image5 from '../assets/images/Design/jmbirthday.png'; 

const images = [
    image4, image2, image3, image1, image5

];

function Design() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="design-container" id="design">
        <div className="contact_wrapper">

      <h1>Designs réalisés</h1>
      <div className="design-images">
        {images.map((image, index) => (
          <div key={index} className="image-wrapper">
            <img
              src={image}
              alt={`Design ${index + 1}`}
              onClick={() => openLightbox(index)}
            />
          </div>
        ))}
      </div>

      {lightboxOpen && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content">
            <button className="lightbox-prev" onClick={(e) => { e.stopPropagation(); goToPrevious(); }}>
              &#10094; {/* Caractère flèche gauche */}
            </button>
            <img src={images[currentIndex]} alt={`Design ${currentIndex + 1}`} />
            <button className="lightbox-next" onClick={(e) => { e.stopPropagation(); goToNext(); }}>
              &#10095; {/* Caractère flèche droite */}
            </button>
          </div>
        </div>
      )}
              </div>

    </div>
  );
}

export default Design;