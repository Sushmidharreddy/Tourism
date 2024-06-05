import React from 'react'
import { ArrowRight } from 'react-feather'
import { Link } from 'react-router-dom'

const RegistrationRight = () => {
  return (
    <>
    <div className='flex flex-col'>
            <div className='text-neutral-700 text-center'>
                LET'S FIND LATEST TRIPS
            </div>
            <div className='text-center text-6xl mt-8'>
                POWERED BY THE CREATERS OF THE <span className='logo text-teal-500'>TB</span>
            </div>
            <div className='mt-24 flex flex-col items-center wf-ull'>
                <div className='text-center text-neutral-400'>You Wan't to register?</div>
                <Link to='/login' className='border-b border-black flex justify-center items-center px-4'>
                        <div className='mr-2'>Login</div>
                        <div>
                            <ArrowRight size={20} />
                        </div>
                </Link>
            </div>
        </div>
    </>
  )
}

export default RegistrationRight