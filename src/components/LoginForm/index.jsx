import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import ToursandTravelsServices from '../../Services/ToursandTravelsServices';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    userName: '',
    password: '',
    mobileNumber: '',
    otp: ''
  });
  const [errors, setErrors] = useState({});
  const [popup, setPopup] = useState({ isVisible: false, message: '', isSuccess: false });
  const [loginMethod, setLoginMethod] = useState('username');
  const [showOTPField, setShowOTPField] = useState(false);

  const validate = {
    userName: (value) => value ? '' : 'Username is required.',
    password: (value) => value ? '' : 'Password is required.',
    mobileNumber: (value) => value ? '' : 'Mobile number is required.',
    otp: (value) => value ? '' : 'OTP is required.'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate[name](value)
    }));
  };

  const checkLogin = async () => {
    try {
      const res = await ToursandTravelsServices.loginuser(formData);
      if (res.status === 202) {
        setPopup({ isVisible: true, message: 'Login successful!', isSuccess: true });
      } else {
        setPopup({ isVisible: true, message: 'Invalid credentials.', isSuccess: false });
      }
    } catch (error) {
      setPopup({ isVisible: true, message: 'An error occurred. Please try again.', isSuccess: false });
    }
  };

  const sendOTP = async () => {
    setShowOTPField(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const fieldsToValidate = loginMethod === 'username' ? ['userName', 'password'] : ['mobileNumber', 'otp'];
    const newErrors = fieldsToValidate.reduce((acc, key) => {
      const error = validate[key](formData[key]);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.keys(newErrors).length === 0) {
      checkLogin();
    } else {
      setErrors(newErrors);
    }
  };

  const handleClosePopup = () => {
    setPopup({ isVisible: false, message: '', isSuccess: false });
    setFormData({
      userName: '',
      password: '',
      mobileNumber: '',
      otp: ''
    });
    if (!popup.isSuccess) {
      window.location.reload();
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-8/12 py-16'>
      <div className='bg-white py-2 px-8 opacity-80 rounded-lg w-full text-center'>Login to your Account</div>
      <form className='bg-white opacity-80 w-full rounded-lg px-8 flex flex-col' onSubmit={handleSubmit}>
        {loginMethod === 'username' ? (
          <>
            <div className='mt-6 flex flex-col'>
              <label className='text-neutral-500 text-sm' htmlFor="userName">Username</label>
              <input
                className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none'
                type="text"
                name="userName"
                id="userName"
                value={formData.userName}
                onChange={handleChange}
                required
              />
              {errors.userName && <p className="text-red-500 text-sm">{errors.userName}</p>}
            </div>
            <div className='mt-6 flex flex-col'>
              <label className='text-neutral-500 text-sm' htmlFor="password">Password</label>
              <input
                className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none'
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
            </div>
          </>
        ) : (
          <>
            <div className='mt-6 flex flex-col'>
              <label className='text-neutral-500 text-sm' htmlFor="mobileNumber">Enter Mobile Number</label>
              <input
                className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none'
                type="text"
                name="mobileNumber"
                id="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleChange}
                required
              />
              {errors.mobileNumber && <p className="text-red-500 text-sm">{errors.mobileNumber}</p>}
            </div>
            {showOTPField && (
              <div className='mt-6 flex flex-col'>
                <label className='text-neutral-500 text-sm' htmlFor="otp">Enter OTP</label>
                <input
                  className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none'
                  type="text"
                  name="otp"
                  id="otp"
                  value={formData.otp}
                  onChange={handleChange}
                  required
                />
                {errors.otp && <p className="text-red-500 text-sm">{errors.otp}</p>}
              </div>
            )}
            <div className='flex items-center justify-end'>
              {!showOTPField && (
                <button type="button" className='bg-teal-500 text-white py-2 rounded-xl mt-4 px-4 hover:bg-teal-700' onClick={sendOTP}>
                  Send OTP
                </button>
              )}
            </div>
          </>
        )}
        <div className='flex justify-end text-neutral-500 flex-col items-center'>
          <div className='my-6'>or</div>
          <button
            type="button"
            className='hover:text-black'
            onClick={() => setLoginMethod(loginMethod === 'username' ? 'mobile' : 'username')}
          >
            {loginMethod === 'username' ? 'Login with Mobile Number' : 'Login with Username and Password'}
          </button>
        </div>
        <button className='bg-teal-500 text-white py-2 rounded-xl my-4' type="submit">Login</button>
        
        <div className='h-12 opacity-5 transparent'>
        </div>
      </form>
      {popup.isVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded-lg text-center">
            <h2 className="text-xl mb-4">{popup.message}</h2>
            <NavLink to='/' className="bg-teal-500 text-white py-2 px-4 rounded" onClick={handleClosePopup}>OK</NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;

    // Implement your send OTP logic here
    // For example:
    // const res = await ToursandTravelsServices.sendOTP(formData.mobileNumber);