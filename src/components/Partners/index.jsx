import React from 'react'
import './partners.css'

const logos = [
    'https://www.thomascook.in/images/logo.jpg',
    'https://www.travelperk.com/wp-content/themes/travelperk/static/img/travelperk-logo-light.svg',
    'https://24x7travels.com/wp-content/uploads/2023/05/cropped-638061122330933585_temp-1.jpeg',
    'https://www.thomascook.in/images/logo.jpg',
    'https://www.travelperk.com/wp-content/themes/travelperk/static/img/travelperk-logo-light.svg',
    'https://24x7travels.com/wp-content/uploads/2023/05/cropped-638061122330933585_temp-1.jpeg',
  ];

const Partners = () => {
  return (
    <>
        
    <div className="overflow-hidden whitespace-nowrap">
            <div className="inline-block animate-marquee">
                {logos.map((logo, index) => (
                <img key={index} src={logo} alt={`Logo ${index + 1}`} className="inline-block mx-8 w-32 h-auto" />
                ))}
                {logos.map((logo, index) => (
                <img key={index + logos.length} src={logo} alt={`Logo ${index + 1}`} className="inline-block mx-4 w-32 h-auto" />
                ))}
            </div>
    </div>

    </>
  )
}

export default Partners