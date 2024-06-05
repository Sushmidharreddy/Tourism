import React from 'react'

const Delhi = () => {
  return (
    <>
        <div className='absolute top-1/2 w-full left-1/2 -translate-x-1/2 -translate-y-1/2 z-20' >
            <div className='font-["Pacifico"] text-8xl text-white text-center tracking-widest'>
                <div className='text-4xl -ml-32 text-teal-400'>Let's</div>
                <div className='font-semibold traking-widest'>Explore</div>
                <div className='text-4xl ml-56'>The <span className='text-teal-400'>DELHI</span></div>
            </div>
            <div className='flex justify-center'>
                <div className='text-center text-white text-xl w-5/12 mt-4'>"Footloose Adventure: Embrace Serendipity, Reveal in the Unknown, and Discover the World's Hidden Treasures."</div>

            </div>
            <div className='flex justify-center mt-6'>
                <button className='px-8 py-3 bg-black bg-opacity-5 border border-white rounded shadow-xl text-xl font-semibold hover:bg-opacity-30 transition-all duration-500 text-white'>Book Now</button>
            </div>
            <div className='flex w-full justify-center mt-16 opacity-90'>
                <div className='flex'>
                    <img className='h-12' src="./images/hotel.png" alt="" />
                    <div className='border-l border-white ml-4 pl-4 text-white'>
                        <div className='font-semibold'>Accommodation</div>
                        <div>3 Star Hotel</div>
                        <div>Stay</div>
                    </div>
                </div>
                <div className='flex ml-8'>
                    <img className='h-12' src="./images/food.png" alt="" />
                    <div className='border-l border-white ml-4 pl-4 text-white'>
                        <div className='font-semibold'>Meal Plan</div>
                        <div>Breakfast</div>
                        <div>Lunch & dinner</div>
                    </div>
                </div>
                <div className='flex ml-8'>
                    <img className='h-12' src="./images/car.png" alt="" />
                    <div className='border-l border-white ml-4 pl-4 text-white'>
                        <div className='font-semibold'>Transfer</div>
                        <div>Shared</div>
                        <div>Speed Vehicles</div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Delhi