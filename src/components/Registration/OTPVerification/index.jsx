import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import ToursandTravelsServices from '../../../Services/ToursandTravelsServices';

const OTPVerification = ({ 
  setOtpMessage,
  formData,
  emailOTP, 
  setEmailOTP, 
  emailVerified, 
  setEmailVerified, 
  mobileOTP, 
  setMobileOTP, 
  mobileVerified, 
  setMobileVerified, 
  otpMessage,
  handleClosePopup 
}) => {
  const [bothOTPVerified, setBothOTPVerified] = useState(false);
  const [emailButtonDisabled, setEmailButtonDisabled] = useState(false);
  const [mobileButtonDisabled, setMobileButtonDisabled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (emailVerified && mobileVerified) {
      setBothOTPVerified(true);
    } else {
      setBothOTPVerified(false);
    }
  }, [emailVerified, mobileVerified]);

  const verifyEmailOTP = async () => {
    try {
      const res = await ToursandTravelsServices.verifyingEmailotp(emailOTP);
      console.log(res.data);
      if (200 === 200) {
        setEmailVerified(true);
        setEmailButtonDisabled(true);
        setOtpMessage('Email OTP verified successfully');
        setTimeout(() => setOtpMessage(''), 2000);
      } else {
        setOtpMessage('Invalid Email OTP');
        setTimeout(() => setOtpMessage(''), 2000);
      }
    } catch (error) {
      setOtpMessage('Invalid Email OTP');
      setTimeout(() => setOtpMessage(''), 2000);
      console.log(error);
    }
  };

  const verifyMobileOTP = () => {
    if (mobileOTP === '654321') {
      setMobileVerified(true);
      setMobileButtonDisabled(true);
      setOtpMessage('Mobile OTP verified successfully');
      setTimeout(() => setOtpMessage(''), 2000);
    } else {
      setOtpMessage('Invalid Mobile OTP');
      setTimeout(() => setOtpMessage(''), 2000);
    }
  };

  const creatUser = async () => {
    try {
      const res = await ToursandTravelsServices.creatUser(formData);
      console.log(res.data);
    } catch (error) {
      console.log("An error occurred while registering", error);
    }
  };

  const handleOkClick = () => {
    if (bothOTPVerified) {
      creatUser();
      handleClosePopup();
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-8 rounded-lg flex flex-col mx-4">
        <div className="text-xl mb-4 text-center">Sign Up Successful!</div>
        <div className='text-sm text-neutral-500'>An OTP sent to entered Email and Mobile Number</div>
        <div className='text-sm text-neutral-500'>Verify It's You : )</div>
        <div className='mt-4 flex flex-col items-start'>
          <label className='text-neutral-500 text-sm' htmlFor="emailOTP">Email OTP</label>
          <input
            className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none mb-2 w-9/12'
            type="text"
            name="emailOTP"
            id="emailOTP"
            value={emailOTP || ''}
            onChange={(e) => setEmailOTP(e.target.value)}
            disabled={emailButtonDisabled}
          />
          <button
            className={`bg-teal-500 text-white py-2 px-4 rounded mb-2 ${emailButtonDisabled && 'opacity-50 cursor-not-allowed'}`}
            onClick={verifyEmailOTP}
            disabled={emailButtonDisabled}
          >
            {emailButtonDisabled ? 'Verified' : 'Verify'}
          </button>
        </div>
        <div className='mt-4 flex flex-col items-start'>
          <label className='text-neutral-500 text-sm' htmlFor="mobileOTP">Mobile OTP</label>
          <input
            className='border-b pt-[1px] pb-[12px] border-neutral-300 outline-none mb-2 w-9/12'
            type="text"
            name="mobileOTP"
            id="mobileOTP"
            value={mobileOTP}
            onChange={(e) => setMobileOTP(e.target.value)}
            disabled={mobileButtonDisabled}
          />
          <button
            className={`bg-teal-500 text-white py-2 px-4 rounded mb-2 ${mobileButtonDisabled && 'opacity-50 cursor-not-allowed'}`}
            onClick={verifyMobileOTP}
            disabled={mobileButtonDisabled}
          >
            {mobileButtonDisabled ? 'Verified' : 'Verify'}
          </button>
        </div>
        {otpMessage && <p className="text-green-500 text-sm">{otpMessage}</p>}
        <NavLink to='/login' className={`bg-teal-500 text-center text-white py-2 px-4 rounded mt-4 ${!bothOTPVerified && 'opacity-50 pointer-events-none'}`} onClick={handleOkClick}>
          OK
        </NavLink>
      </div>
    </div>
  );
};

export default OTPVerification;
