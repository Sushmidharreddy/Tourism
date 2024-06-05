import React from 'react'
import { Facebook, Linkedin, X, Youtube } from 'react-feather'
import { NavLink, Outlet } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <div className='block mt-64 sm:mt-56 md:mt-40 lg:mt-2'>

        
        <NavLink to="" className="flex items-center ml-4 mt-8 mb-4">
              <div className=" flex relative">
                <svg className="w-64 h-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 369.65517241379314 54.968672127559266"><g id="SvgjsG1013" featurekey="A7DQL5-0" transform="matrix(2.7845508400860948,0,0,2.7845508400860948,80.00005443886968,-5.806494924631933)" fill="#111111" ><path d="M5.86 4.5 l-0.000019531 -0.26 l-5.86 0 l0 0.64 l3.38 0 l0 15.12 l0.7 0 l0 -15.12 l1.8 0 c-0.02666 -0.21334 -0.03332 -0.34 -0.01998 -0.38 z M6.38 4.24 l0 0.64 l1.1 0 l0 -0.64 l-1.1 0 z M14.48 15.219999999999999 c0.85334 -0.48 1.5067 -1.1567 1.96 -2.03 s0.68 -1.8633 0.68 -2.97 l0 -0.28 c0 -1.64 -0.49 -3 -1.47 -4.08 s-2.3766 -1.62 -4.19 -1.62 l-1.38 0 l0 6.34 c0.22666 0.01334 0.45332 0.02 0.67998 0.02 l0 -5.72 l0.66 0 c1.64 0 2.88 0.47666 3.72 1.43 s1.26 2.1766 1.26 3.67 l0 0.22 c0 1.48 -0.42 2.6934 -1.26 3.64 s-2.08 1.42 -3.72 1.42 l-0.66 0 l0 0 l-0.68 0 l0 0.64 c0.4 0.01334 0.66666 0.02 0.8 0.02 l0.58 0 c0.92 0 1.7267 -0.14 2.42 -0.42 l2.48 4.5 l0.8 0 z M25.099999999999998 6.140000000000001 c0 0.08 0.23666 0.84334 0.71 2.29 s0.99 3.03 1.55 4.75 s1.3133 3.9934 2.26 6.82 l0.86 0 l-5.3 -15.76 l-0.16 0 l-5.26 15.76 l0.82 0 z M24.74 15.52 l-0.72 0 l1.2 4.48 l0.72 0 z M41.519999999999996 4.24 c-0.92 3.1066 -1.6533 5.59 -2.2 7.45 s-1.0467 3.5666 -1.5 5.12 s-0.68 2.3434 -0.68 2.37 l0.24 0.82 l0.16 0 l4.8 -15.76 l-0.82 0 z M36.82 14.68 l-2.86 -10.44 l-0.88 0 l3.34 12.28 z M45.5 14.16 l0 -9.36 l4.8 0 l0 -0.56 l-5.36 0 l0 9.92 l0.56 0 z M50.5 20 l0 -0.54 l-5 0 l0 -4.14 l0.8 0 l0 -0.54 l-1.36 0 l0 5.22 l5.56 0 z M53.75999999999999 16.06 l0 -11.82 l-0.66 0 l0 11.82 l0.66 0 z M59.13999999999999 20 l0 -0.68 l-5.38 0 l0 -1.96 l-0.66 0 l0 2.64 l6.04 0 z M66.74 10.94 l0.000039062 9.06 l3.84 0 c1.1467 0 2.0534 -0.40666 2.72 -1.22 s1 -1.8667 1 -3.16 c0 -0.34666 -0.04334 -0.74332 -0.13 -1.19 s-0.23332 -0.88 -0.43998 -1.3 s-0.48666 -0.8 -0.84 -1.14 s-0.81 -0.57666 -1.37 -0.71 c0.56 -0.34666 0.96666 -0.81 1.22 -1.39 s0.38 -1.19 0.38 -1.83 c0 -1.2267 -0.34 -2.17 -1.02 -2.83 s-1.6067 -0.99 -2.78 -0.99 l-2.58 0 l0 6.22 l0.7 0 l-0.02 -5.4 l1.96 0 c1.1067 0 1.8867 0.29 2.34 0.87 s0.68 1.29 0.68 2.13 c0 0.90666 -0.20666 1.61 -0.62 2.11 s-0.98 0.75 -1.7 0.75 l-2.62 0 l0.44 0.88 l2.68 0 c0.54666 0 1.0133 0.12334 1.4 0.37 s0.70332 0.55666 0.94998 0.93 s0.43 0.79334 0.55 1.26 s0.18 0.92 0.18 1.36 c0 0.42666 -0.06 0.84666 -0.18 1.26 s-0.3 0.78334 -0.54 1.11 s-0.55334 0.59 -0.94 0.79 s-0.84666 0.3 -1.38 0.3 l-3.2 0 l0.02 -8.24 l-0.7 0 z M77.55999999999999 16.06 l0 -11.82 l-0.66 0 l0 11.82 l0.66 0 z M82.94 20 l0 -0.68 l-5.38 0 l0 -1.96 l-0.66 0 l0 2.64 l6.04 0 z M85.53999999999999 4.24 l0 15.76 l0.52 0 l0 -15.76 l-0.52 0 z M90.74 11.02 l1.78 1.66 c0.56 0.52 1 1.0767 1.32 1.67 s0.48 1.19 0.48 1.79 l0 0.26 c0.01334 0.42666 -0.04 0.80666 -0.16 1.14 l0.74 0 c0.10666 -0.36 0.15332 -0.73334 0.13998 -1.12 l0 -0.28 c0 -0.72 -0.18334 -1.4067 -0.55 -2.06 s-0.87666 -1.2933 -1.53 -1.92 l-1.72 -1.62 c-0.54666 -0.52 -0.99666 -1.0067 -1.35 -1.46 s-0.53 -1.02 -0.53 -1.7 l0 -0.12 c0 -0.70666 0.19666 -1.2767 0.59 -1.71 s0.94334 -0.65 1.65 -0.65 c0.50666 0 0.92 0.07666 1.24 0.23 s0.64666 0.38334 0.98 0.69 l0.46 -0.52 c-0.37334 -0.34666 -0.75668 -0.60666 -1.15 -0.78 s-0.90334 -0.26 -1.53 -0.26 c-0.81334 0 -1.5033 0.26334 -2.07 0.79 s-0.85 1.2567 -0.85 2.19 l0 0.16 c0 0.76 0.19 1.41 0.57 1.95 s0.87666 1.0967 1.49 1.67 z M94.61999999999999 18.3 l-0.82002 0 c-0.46666 0.68 -1.2133 1.0267 -2.24 1.04 c-0.34666 0 -0.66 -0.04 -0.94 -0.12 l0 0.7 c0.28 0.05334 0.59334 0.08 0.94 0.08 c0.72 0 1.34 -0.14666 1.86 -0.44 s0.92 -0.71334 1.2 -1.26 z M99.72 11.02 l1.78 1.66 c0.56 0.52 1 1.0767 1.32 1.67 s0.48 1.19 0.48 1.79 l0 0.26 c0.01334 0.42666 -0.04 0.80666 -0.16 1.14 l0.74 0 c0.10666 -0.36 0.15332 -0.73334 0.13998 -1.12 l0 -0.28 c0 -0.72 -0.18334 -1.4067 -0.55 -2.06 s-0.87666 -1.2933 -1.53 -1.92 l-1.72 -1.62 c-0.54666 -0.52 -0.99666 -1.0067 -1.35 -1.46 s-0.53 -1.02 -0.53 -1.7 l0 -0.12 c0 -0.70666 0.19666 -1.2767 0.59 -1.71 s0.94334 -0.65 1.65 -0.65 c0.50666 0 0.92 0.07666 1.24 0.23 s0.64666 0.38334 0.98 0.69 l0.46 -0.52 c-0.37334 -0.34666 -0.75668 -0.60666 -1.15 -0.78 s-0.90334 -0.26 -1.53 -0.26 c-0.81334 0 -1.5033 0.26334 -2.07 0.79 s-0.85 1.2567 -0.85 2.19 l0 0.16 c0 0.76 0.19 1.41 0.57 1.95 s0.87666 1.0967 1.49 1.67 z M103.6 18.3 l-0.82002 0 c-0.46666 0.68 -1.2133 1.0267 -2.24 1.04 c-0.34666 0 -0.66 -0.04 -0.94 -0.12 l0 0.7 c0.28 0.05334 0.59334 0.08 0.94 0.08 c0.72 0 1.34 -0.14666 1.86 -0.44 s0.92 -0.71334 1.2 -1.26 z"></path></g></svg>
                <div className="absolute">
                  <svg className="w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="#01a7a3" ><g id="SvgjsG1129"><path d="M94,65H77c-0.044,0-0.082,0.02-0.124,0.025L51,22.231l0,0l7.995-13.223C58.997,9.005,59,9.003,59.002,9  c0.332-0.552,0.153-1-0.399-1c-0.552,0-1.269,0.448-1.601,1H57l-6,9.923V6c0-0.552-0.448-1-1-1s-1,0.448-1,1v12.923l-5.999-9.922  C43,9.001,43,9,43,9c-0.332-0.552-1.049-1-1.601-1C40.847,8,40.668,8.448,41,9h0l7.966,13.175l-0.031,0.163L23.124,65.025  C23.082,65.02,23.044,65,23,65H6c-0.552,0-1,0.448-1,1c0,0.552,0.448,1,1,1h15.93l-3.652,6.04l-1.081,1.788  c0.405,0.429,0.814,0.852,1.235,1.265c5.034,4.937,11.212,8.711,18.11,10.864l-0.699,3.643l-0.382,1.991  c0.623,0.212,1.251,0.411,1.886,0.597C41.363,94.36,45.606,95,50,95c13.453,0,25.523-5.896,33.788-15.236  c0.398-0.45,0.791-0.904,1.172-1.37l-1.116-1.846L78.07,67H94c0.552,0,1-0.448,1-1C95,65.448,94.552,65,94,65z M19.505,74.319  l28.501-47.137L36.924,84.967C30.273,82.845,24.322,79.148,19.505,74.319z M68.069,89.017V70.802c0-4.165-3.376-6.636-7.541-5.521  s-7.541,5.397-7.541,9.562v18.042C51.999,92.954,51.005,93,50,93c-4.264,0-8.381-0.632-12.273-1.79l0.712-3.712l0.379-1.977  l11.667-60.834l32.205,53.261C78.685,82.607,73.703,86.401,68.069,89.017z"></path></g></svg>
                </div>
              </div>
            </NavLink>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gapy-8 mx-8'>
            <div className='grid-items aspect-auto'>
                <div className='text-neutral-500'>Categories</div>
                <div className='flex flex-col justify-center items-start'>
                    <NavLink className='hover:underline'>Winter</NavLink>
                    <NavLink className='hover:underline'>Summer</NavLink>
                    <NavLink className='hover:underline'>Royal Heritage</NavLink>
                </div>
            </div>
            <div className='grid-items aspect-auto'>
                <div className='text-neutral-500'>Categories</div>
                <div className='flex flex-col justify-center items-start'>
                    <NavLink className='hover:underline'>Winter</NavLink>
                    <NavLink className='hover:underline'>Summer</NavLink>
                    <NavLink className='hover:underline'>Royal Heritage</NavLink>
                </div>
            </div>
            <div className='grid-items'>
                <div className='text-neutral-500'>Categories</div>
                <div className='flex flex-col justify-center items-start'>
                    <NavLink className='hover:underline'>Winter</NavLink>
                    <NavLink className='hover:underline'>Summer</NavLink>
                    <NavLink className='hover:underline'>Royal Heritage</NavLink>
                </div>
            </div>
            
            <div className='grid-items col-span-2'>
                <div className='mt-4'>
                    <label className='text-neutral-500  mx-2 sm:4 md:8  lg:mx-16' htmlFor="">CONNECT WITH US</label>
                    <div className='relative -z-10 mx-2 sm:4 md:8  lg:mx-16'>
                        <input className='mt-4  outline-none border border-teal-500 rounded-full pl-4 h-14 w-full' placeholder='Email' type="Email" />
                        <button className='absolute right-0 mt-6 rounded-full top-0 right-0 bg-teal-500 px-6 py-2 mr-2'>Contact Us</button>
                    </div>
                    <div className='mt-8'>

                    <label className='text-neutral-500  mx-2 sm:4 md:8  lg:mx-16' htmlFor="">SOCIALS</label>
                    </div>
                    <div className='mx-2 sm:4 md:8  lg:mx-16 flex mt-4'>
                        <NavLink className='border rounded-full border-black p-2 hover:bg-blue-700'>
                            <Facebook/>
                        </NavLink>
                        <NavLink className='border rounded-full border-black p-2 hover:bg-blue-400 ml-2'>
                            <Linkedin/>
                        </NavLink>
                        <NavLink className='border rounded-full border-black p-2 hover:bg-rose-600 ml-2'>
                            <Youtube/>
                        </NavLink>
                        <NavLink className='border rounded-full border-black p-2 ml-2'>
                            <X/>
                        </NavLink>
                        
                    </div>
                </div>
            </div>

        </div>
        <div className='bg-black text-white py-4 mt-4 px-16'>
        ( c ) Chanchal Sharma. All Right Reserved 2024
        </div>
        </div>
    </>

    
  )
}

export default Footer
//   const checkLogin = async () => {
//     try {
//       const res = await ToursandTravelsServices.loginuser(formData);
//       if (res.status === 202) {
//         setPopup({ isVisible: true, message: 'Login successful!', isSuccess: true });
//       } else {
//         setPopup({ isVisible: true, message: 'Invalid credentials.', isSuccess: false });
//       }
//     } catch (error) {
//       setPopup({ isVisible: true, message: 'An error occurred. Please try again.', isSuccess: false });
//     }
//   };
