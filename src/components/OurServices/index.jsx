import React from 'react'
import { ArrowRight } from 'react-feather'
import KeralaSlider from '../HomeFlexSlider/KeralaSlider'

const OurServices = () => {
  return (
    <>
      <div className='w-full flex justify-center bg-sky-50 pb-32'>
        <div className='w-11/12'>
          <div className='font-["Roboto"] text-5xl text-center my-16'>Quality Services, <span className='text-teal-500'>You Can Get</span></div>
          <div class="flex sm:flex flex-col md:grid lg:grid grid-cols-5 sm:grid-cols-5 md:grid-cols-11 lg:grid-cols-11 gap-8">
            <div class="grid-items col-span-5 w-full  rounded-lg bg-teal-100 px-8 py-8">
                <div className='text-neutral-600 mb-8'>Best Places</div>
                <div className='text-4xl my-4'>Navigate The Best Places to Visit</div>
                <div className='text-md w-10/12 text-neutral-600'>Embark on a journey with us to explore the best places to visit, where each destination promises unforgettable experiences and lasting memories.</div>
                <button className='flex text-neutral-700 hover:text-black my-4'>Explore More Places 
                  <div><ArrowRight color='gray'/> </div>
                </button>
                <div className='h-48'>
                  {/* <img className='w-full h-full bg-cover bg-center object-cover rounded-lg' src="https://images.pexels.com/photos/1359935/pexels-photo-1359935.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" /> */}
                  <img className='w-full h-full   rounded-lg' src="./images/bestplaces.svg" alt="" />
                </div>
            </div>
            <div class="grid-items col-span-6 rounded-lg bg-teal-50 px-8 py-8 flex">
                <div className='w-7/12 flex flex-col justify-between'>
                  <div className='text-neutral-600 mb-8'>Quality Hotels</div>
                  <div className=''>

                    <div className='text-4xl my-4'>Premier Accommodations Await</div>
                    <div className='text-md w-10/12 text-neutral-600'>Discover top-tier accommodations, exceptional service, and unforgettable experiences at our carefully curated selection of quality hotels, tailored to exceed your expectations.</div>
                    <button className='flex text-neutral-700 hover:text-black my-4'>Explore Hotels 
                      <div><ArrowRight color='gray'/> </div>
                    </button>
                  </div>
                </div>
                <div className='w-5/12'>
                {/* <img className='w-full h-full bg-cover bg-center object-cover rounded-lg' src="https://images.pexels.com/photos/20091032/pexels-photo-20091032/free-photo-of-closeup-of-a-hotel-with-a-dome-and-oriels.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" /> */}
                <img className='w-full h-full bg-cover bg-center  rounded-lg' src="./images/Hotels.svg" alt="" />
                </div>
            </div>
            <div class="grid-items order-2 sm:order-2 md:order-1 lg:order-1 col-span-6 rounded-lg bg-teal-50 px-8 py-8 flex">
                <div className='w-7/12 flex flex-col justify-between'>
                  <div className='text-neutral-600 mb-8'>Vacation For All</div>
                  <div className=''>

                    <div className='text-4xl my-4'>Perfect Getaways for Every Traveler</div>
                    <div className='text-md w-10/12 text-neutral-600'>Tailored vacations for honeymooners, families, and friends, offering diverse destinations and activities to create unforgettable memories for every type of traveler.</div>
                    <button className='flex text-neutral-700 hover:text-black my-4'>More Travellers 
                      <div><ArrowRight color='gray'/> </div>
                    </button>
                  </div>
                </div>
                <div className='w-5/12'>
                {/* <img className='w-full h-full bg-cover bg-center object-cover rounded-lg' src="https://images.pexels.com/photos/988622/pexels-photo-988622.jpeg?auto=compress&cs=tinysrgb&w=800" alt="" /> */}
                <img className='w-full h-full bg-cover bg-center object-contain rounded-lg' src="./images/tripforall.svg" alt="" />
                </div>
            </div>
            <div class="grid-items order-1 sm:order-1 md:order-2 lg:order-2 col-span-5 w-full   rounded-lg bg-teal-100 px-8 py-8">
                <div className='text-neutral-600 mb-8'>Transportation</div>
                <div className='text-4xl my-4'>Seamless Transportation Solutions</div>
                <div className='text-md w-10/12 text-neutral-600'>Efficient and reliable transportation services tailored to meet your travel needs, ensuring smooth journeys for all.</div>
                <button className='flex text-neutral-700 hover:text-black my-4'>Explore More
                  <div><ArrowRight color='gray'/> </div>
                </button>
                
                <div className='relative h-48 w-full flex items-center justify-center'>
                        {/* <img className=' rounded-lg  w-full h-full object-cover rounded' src="https://media.istockphoto.com/id/919763570/photo/busy-airport-view-with-airplanes-and-service-vehicles-at-sunset.jpg?s=612x612&w=0&k=20&c=de1SqoODkhFReLsar8yat0aP_2MiCHks6nL_71YxhI8=" alt="Background" /> */}
                        <img className=' rounded-lg  w-full h-full object-contain rounded' src="./images/transport.svg" alt="Background" />
                </div>
                
            </div>
          </div>





        </div>

      </div>
    </>
  )
}

export default OurServices