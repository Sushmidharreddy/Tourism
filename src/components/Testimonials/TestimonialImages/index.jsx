import React from 'react';
import Testimonials from '..';


const images = [
  require('https://images.pexels.com/photos/962464/pexels-photo-962464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'),
  require('./images/s2.jpeg'),
  // Add more image URLs as needed
];

const TestimonialsImages = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Testimonials images={images} />
    </div>
  );
};

export default TestimonialsImages;