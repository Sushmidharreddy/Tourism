import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import KeralaSlider from './KeralaSlider';
import TajMahal from './TajMahal';
import Delhi from './Delhi';
import Himachal from './Himachal';
import Rajasthan from './Rajasthan';

const HomeFlexSlider = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className}
                style={{ ...style, display: "block", background: "#26b8a7", borderRadius: "16px", paddingTop: "1px" }}
                onClick={onClick}
            />
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div className={className}
                style={{ ...style, display: "block", background: "#26b8a7", paddingTop: "1px", borderRadius: "16px" }}
                onClick={onClick}
            />
        );
    }
    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false,
        initialSlide: 0,
        autoplay: true,
    autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        appendDots: dots => (
            <div
              style={{
                borderRadius: "10px",
              }}
            >
              <ul style={{
                    display:"flex",
                    justifyContent: "center",
                    items:"center",
                    opacity: "0.8",
             }}> {dots} </ul>
            </div>
          ),
        // responsive: [
        //     {
        //         breakpoint: 1024,
        //         settings: {
        //             slidesToShow: 3,
        //             slidesToScroll: 3,
        //             infinite: true,
        //             dots: true
        //         }
        //     },
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2,
        //             initialSlide: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    };

    return (
        <div className='flex justify-center bg-neutral-100 mb-16'>
            <div className='w-11/12 h-[calc(100vh-200px)] mb-16 '>
                <Slider className="slider-container h-h-[calc(100vh-200px)] rounded-lg" {...settings}>
                <div className='relative h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full bg-cover bg-center object-cover rounded-lg' src="/images/s3.jpg" alt="Login Background" />
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20' >
                            <div className="font-['Sevillana'] italic font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl text-white text-center tracking-widest">Experience</div>
                            <div className='text-center text-white text-xl mt-4'>You have an amazing opportunity to experience a world of adventure and new experiences</div>
                            <div className='flex justify-center mt-6'>
                                <button className='px-16 py-2 bg-black bg-opacity-5 border border-white rounded shadow-xl hover:bg-opacity-20 transition-all duration-500 text-white'>Start adventure</button>
                            </div>
                        </div>
                    </div>
                    <div className='relative h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full object-cover rounded' src="/images/s9.jpg" alt="Background" />
                        <KeralaSlider/>
                    </div>
                    <div className=' h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full bg-cover bg-center object-cover rounded-lg ' src="/images/TajMahal.jpg" alt="Login Background" />
                        <TajMahal/>
                    </div>
                    <div className=' h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full bg-cover bg-center object-cover rounded-lg' src="/images/s10.jpg" alt="Login Background" />
                        <Delhi/>
                        
                    </div>
                    
                    <div className=' h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full bg-cover bg-center object-cover rounded-lg' src="/images/s7.jpg" alt="Login Background" />
                        <Himachal/>
                    </div>
                    
                    <div className=' h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full bg-cover bg-center  rounded-lg' src="/images/s11.jpg" alt="Login Background" />
                        <Rajasthan/>
                    </div>
                    {/* <div className=' h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full bg-cover bg-center object-cover rounded-lg' src="/images/s12(1).jpg" alt="Login Background" />
                    </div>
                    <div className=' h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full bg-cover bg-center object-cover rounded-lg' src="/images/s6.jpg" alt="Login Background" />
                    </div>
                    <div className=' h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full  object-cover rounded-lg' src="/images/s4.jpg" alt="Login Background" />
                    </div>
                    <div className=' h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full  object-cover rounded-lg' src="/images/s8.jpg" alt="Login Background" />
                    </div>
                    <div className=' h-[calc(100vh-200px)] w-full flex items-center justify-center'>
                        <img className='  w-full h-full  object-cover rounded-lg' src="/images/s5.jpeg" alt="Login Background" />
                    </div>
                    */}
                </Slider>
            </div>
        </div>
    );
};

export default HomeFlexSlider;
