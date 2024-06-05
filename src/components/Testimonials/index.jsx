import React, { useState, useEffect } from 'react';
import Customer1 from './Customer1';
import Customer2 from './Customer2';
import Customer3 from './Customer3';
import Customer4 from './Customer4';

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [fadeIn, setFadeIn] = useState(false);

  const images = [
    { id: 1, src: 'https://cdn.dribbble.com/users/2124370/avatars/normal/6672b16d88004bdf420c30258010b5bf.jpg?1700923250', data: 'Data for Image 1' },
    { id: 2, src: 'https://cdn.dribbble.com/users/11920207/avatars/normal/6793f2c801abadf5b4855fc730e8bdd0.jpg?1710949884', data: 'Data for Image 2' },
    { id: 3, src: 'https://cdn.dribbble.com/users/17014501/avatars/normal/data?1690225284', data: 'Data for Image 3' },
    { id: 4, src: 'https://cdn.dribbble.com/users/7883727/avatars/normal/26ab7043a07228a679414eb89392f730.jpeg?1680217851', data: 'Data for Image 4' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setSelectedImage(images[nextIndex].data);
      setCurrentIndex(nextIndex);
      setFadeIn(true); // Set fadeIn to true when rendering a new image
      setTimeout(() => {
        setFadeIn(false); // Set fadeIn back to false after a delay
      }, 3000);
    }, 4000);

    return () => clearInterval(interval);
  }, [currentIndex, images.length]);

  const handleImageClick = (imageData) => {
    setSelectedImage(imageData);
  };

  return (
    <div className="w-full flex justify-center bg-gray-100 py-16">
      <div className="flex flex-col w-10/12 py-16 px-16 bg-teal-100">
        <div className="mb-12 font-['Ubuntu Sans Mono'] text-neutral-600 text-5xl italic mt-4">OUR TESTIMONIALS</div>
        <div className="flex">
          <div className="w-1/4 relative flex flex-col justify-center items-end border-r-2 border-gray-300 pr-16">
            {images.map(image => (
              <div key={image.id} className="relative w-20">
                <img
                  src={image.src}
                  alt={`Image ${image.id}`}
                  className={`cursor-pointer rounded-full my-6 h-20 w-20 ${selectedImage === image.data ? 'border border-teal-600' : ''}`}
                  onClick={() => handleImageClick(image.data)}
                />
                {selectedImage === image.data && (
                  <svg className="absolute top-1/2 transform  right-0 -translate-y-1/2 -mr-8 text-teal-600" width="48" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 12L8 21V3L16 12Z" fill="currentColor"/>
                  </svg>
                )}
              </div>
            ))}
          </div>
          <div className={`w-3/4 ml-4 flex justify-center items-center transition-opacity duration-1000 ${fadeIn ? 'opacity-100' : 'opacity-0'}`}>
            {selectedImage && (
              <div className='w-11/12 flex justify-center'>
                {selectedImage === 'Data for Image 1' && <Customer1 />}
                {selectedImage === 'Data for Image 2' && <Customer2 />}
                {selectedImage === 'Data for Image 3' && <Customer3 />}
                {selectedImage === 'Data for Image 4' && <Customer4 />}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
