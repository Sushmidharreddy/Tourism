import React from 'react'

const Rajasthan = () => {
  return (
    <>
         <div className='absolute top-0 w-full h-[calc(100%-6px)] rounded-md bg-black bg-opacity-0'>
                        
        </div>
        
        <div className='absolute border-2 border-white px-12 py-10 rounded flex flex-col justify-center items-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20' >
            <div className='w-full '>
                <div className='flex justify-center items-end'>
                    <img className='h-32' src="./images/travel.png" alt="" />
                    <img className='h-24 -ml-6' src="./images/travel.png" alt="" />
                    <img className='h-16 -ml-3 mb-[2px]' src="./images/travel.png" alt="" />
                </div>
                <div className='break-Paint text-5xl sm:text-5xl md:text-7xl lg:text-8xl text-white text-center tracking-wider'>RAJASTHAN</div>
                <div className="text-center text-white text-4xl  mt-4 tracking-widest"></div>
                <div className="text-center font-['Sevillana'] text-white text-4xl italic mt-4 ">"Unlocking the World's Hidden Gems: Your Pass to Uncharted Wonder"</div>
                <div className="text-center font-['Roboto'] text-white text-2xl mt-4 ">#padharomharedesh</div>
            </div>
                
            
        </div>
    </>
  )
}

export default Rajasthan