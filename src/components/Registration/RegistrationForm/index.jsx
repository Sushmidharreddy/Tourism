import React, { useState } from 'react';
import OTPVerification from '../OTPVerification';
import ToursandTravelsServices from '../../../Services/ToursandTravelsServices';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    userName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [emailOTP, setEmailOTP] = useState('');
  const [mobileOTP, setMobileOTP] = useState('');
  const [emailVerified, setEmailVerified] = useState(false);
  const [mobileVerified, setMobileVerified] = useState(false);
  const [otpMessage, setOtpMessage] = useState('');

  const validate = {
    userName: (value) => /^[a-zA-Z0-9_.-@]{3,16}$/.test(value) ? '' : 'Username must be 3-16 characters and can only contain letters, numbers, and underscores.',
    email: (value) => /^(?!.?\.\.)(?!.?\.(|\.|\.))([a-zA-Z0-9]+[a-zA-Z]*)(?:[.][a-zA-Z0-9]+)?(?:[.]?[a-zA-Z0-9]+)?@[a-zA-Z.]+(?:[a-zA-Z0-9]+)?\.[a-zA-Z]{2,3}$/.test(value) ? '' : 'Email must be in lowercase, include "@" and a valid domain extension.',
    mobileNumber: (value) => /^[6-9]\d{9}$/.test(value) ? '' : 'Contact number must be 10 digits and start with a digit from 6 to 9.',
    password: (value) => /^(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!]).{8,}$/.test(value) ? '' : 'Password must be at least 8 characters long, contain uppercase and lowercase letters, and include special characters.',
    confirmPassword: (value, password) => value === password ? '' : 'Passwords do not match.',
    fullName: (value) => /^[a-zA-Z. ]{6,30}$/.test(value) ? '' : 'Full name must contain alphabets and be between 6 and 30 characters.'
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'mobileNumber' && (!/^\d*$/.test(value) || value.length > 10)) {
      return;
    }
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validate[name](value, formData.password)
    }));
  };1

  const creatUser=async()=>
    {
      try{
        const res= await ToursandTravelsServices.sendOtptoEmail(formData.email);
        console.log(res.data);
        console.log("hello");
      }
      catch(error)
      {
        console.log(error);
      }
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = Object.keys(formData).reduce((acc, key) => {
      const error = validate[key](formData[key], formData.password);
      if (error) acc[key] = error;
      return acc;
    }, {});

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted successfully');
      creatUser();
      setIsPopupVisible(true);
    } else {
      setErrors(newErrors);
    }
  };

  const handleClosePopup = () => {
    if (emailVerified && mobileVerified) {
      console.log('Form data:', formData); // You can replace this with the actual data storage logic
      setIsPopupVisible(false);
      setFormData({
        fullName: '',
        userName: '',
        email: '',
        mobileNumber: '',
        password: '',
        confirmPassword: ''
      });
      setEmailOTP('');
      setMobileOTP('');
      setEmailVerified(false);
      setMobileVerified(false);
    } else {
      setOtpMessage('Please verify OTP first');
    }
  };

  const togglePasswordVisibility = (field) => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'confirmPassword') {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  return (
    <div className='flex flex-col justify-center items-center w-8/12 py-16'>
      <div className='bg-white py-2 px-8 opacity-90 rounded-lg w-full text-center'>Sign Up to your Account</div>
      <form className='bg-white opacity-90 w-full rounded-lg px-8 flex flex-col' onSubmit={handleSubmit}>
        {['fullName', 'email', 'mobileNumber', 'userName', 'password', 'confirmPassword'].map((field) => (
          <div key={field} className='mt-6 flex flex-col relative'>
            <label className='text-neutral-500 text-sm' htmlFor={field}>{field.charAt(0).toUpperCase() + field.slice(1)}</label>
            <input
              className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none'
              type={(field === 'password' && !passwordVisible) || (field === 'confirmPassword' && !confirmPasswordVisible) ? 'password' : 'text'}
              name={field}
              id={field}
              value={formData[field]}
              onChange={handleChange}
              required
              maxLength={field === 'mobileNumber' ? 10 : undefined}
            />
            {(field === 'password' || field === 'confirmPassword') && (
              <button
                type='button'
                className='absolute right-2 top-8'
                onClick={() => togglePasswordVisibility(field)}
              >
                {((field === 'password' && passwordVisible) || (field === 'confirmPassword' && confirmPasswordVisible)) ? '👁️' : '👁️‍🗨️'}
              </button>
            )}
            {errors[field] && <p className="text-red-500 text-sm">{errors[field]}</p>}
          </div>
        ))}
        <button className='bg-teal-500 text-white py-2 rounded-xl my-4' type="submit">Sign Up</button>
      </form>
      {isPopupVisible && (
        <OTPVerification
          formData={formData}
          emailOTP={emailOTP}
          setEmailOTP={setEmailOTP}
          emailVerified={emailVerified}
          setEmailVerified={setEmailVerified}
          mobileOTP={mobileOTP}
          setMobileOTP={setMobileOTP}
          mobileVerified={mobileVerified}
          setMobileVerified={setMobileVerified}
          otpMessage={otpMessage}
          setOtpMessage={setOtpMessage}
          handleClosePopup={handleClosePopup}
        />
      )}
    </div>
  );
};

export default RegistrationForm;
