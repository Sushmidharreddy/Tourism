import React from 'react'
import LoginLeftFlex from '../LoginLeftFlex'
import LoginForm from '../LoginForm'

const Login = () => {
  return (
    <>
        <div className='w-full flex justify-center bg-gray-100 h-[calc(100vh-96px)]'>
            <div className='w-11/12'>
                <div className='grid gap-8 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 h-full pb-4 '>
                    <div className='grid-items flex justify-center items-center'>
                        <LoginLeftFlex/>
                    </div>
                    <div className='grid-item bg-cover bg-center bg-[url("../public/images/LoginBackground.avif")] rounded-xl flex justify-center items-center '>
                        <LoginForm/>
                    </div>

                </div>

            </div>

        </div>
    </>
  )
}

export default Login