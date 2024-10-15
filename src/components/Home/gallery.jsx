import React, { useState } from 'react';


const Gallery = () => {
 
  const images = [
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849365/Picture5_nodt5l.jpg',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849366/Picture12_kzddrl.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849363/Picture8_kur7ae.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849362/Picture9_cmgyns.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849368/Picture2_eyas83.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849367/Picture11_bignia.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849370/Picture3_n5pve4.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849364/Picture1_s9j28t.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849612/Picture13_han9v2.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849601/Picture15_ff2q5w.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849598/Picture18_ydmwnm.png',
    'https://res.cloudinary.com/dwutcpv9n/image/upload/v1728849798/Picture16_j3nkzy.jpg'
  ]

  // State to handle the lightbox visibility and the selected image
  const [lightboxImage, setLightboxImage] = useState(null);

  // Function to open lightbox
  const openLightbox = (image) => {
    setLightboxImage(image);
  };

  // Function to close lightbox
  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <div className="bg-gray-100 p-8 " style={{ marginLeft: '100px', marginRight: '100px' ,marginBottom:'45px' }} >
      <h2 className="text-2xl font-semibold text-center mb-8 text-[color:#324d67]" id="gallery">GALLERY</h2>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              style={{ aspectRatio: '4/3' }} // Maintain a consistent aspect ratio for the images
            />
          </div>
        ))}
      </div>

      {/* Lightbox Overlay */}
      {lightboxImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeLightbox}
        >
          <div className="relative">
            <img
              src={lightboxImage}
              alt="Enlarged Gallery"
              className="max-w-full max-h-screen object-contain"
            />
            <button
              className="absolute top-0 right-0 p-4 text-white text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
