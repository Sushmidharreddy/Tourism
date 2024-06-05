import React from 'react'

const KeralaSlider = () => {
  return (
    <>
        <div className='absolute top-0 w-full h-full bg-black bg-opacity-30'>
                        
        </div>
        
        <div className='absolute flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20' >
            <div className='w-full lg:w-11/12'>
                <div className="font-['Sevillana'] italic font-bold text-5xl sm:text-5xl md:text-7xl lg:text-9xl text-white text-center tracking-widest">Kerala</div>
                <div className="text-center font-['Teko'] text-white text-3xl  mt-4 tracking-widest">THIS AUGUST</div>
                <div className="text-center font-['Roboto'] text-white text-2xl mt-4 ">Experience mesmerizing back water of Kerala</div>
            </div>
                
            <div className='flex justify-center mt-6 items-center mt-16'>
                <div className='text-white text-xl'>Visit us for exciting prices : )</div>
                <button className='text-white px-12 py-2 border border-white rounded ml-4 hover:bg-black hover:bg-opacity-30 hover:transition-all duration-500'>Let's Go!</button>
            </div>
        </div>
    </>
  )
}

export default KeralaSlider