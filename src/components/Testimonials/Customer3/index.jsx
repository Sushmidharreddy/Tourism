import React from 'react';
import { ThumbsDown, ThumbsUp } from 'react-feather';
import ReactStars from 'react-rating-stars-component';

const Customer3 = () => {
  return (
    <>
      <div style={{ width: '100%', padding: '24px', display: 'flex', flexDirection: 'column', backgroundColor: '#bae6fd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '1rem' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.05em', color: '#333' }}>Mahendra Joshi</div>
            <div style={{ color: '#007acc', fontWeight: 'bold', marginTop: '4px', fontSize: '1rem' }}>
              Mumbai, Maharashtra
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img style={{ borderRadius: '50%', height: '6rem', width: '6rem', marginBottom: '8px' }} src="https://cdn.dribbble.com/users/17014501/avatars/normal/data?1690225284" alt="Mahendra Joshi" />
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={5} // Example rating value
              edit={false} // Make it non-editable
            />
          </div>
        </div>
        <div style={{ color: '#555', marginBottom: '16px', fontSize: '1rem' }}>
          Booking my hotel and transport through <span><button style={{ fontStyle: 'italic', fontWeight: '600', color: '#007acc', background: 'none', border: 'none', cursor: 'pointer' }}>Travel Bliss</button></span> was a breeze! The options were diverse, the process was smooth, and the experience was seamless. Highly recommend for stress-free travel planning!
        </div>
        <div style={{ display: 'flex' }}>
          <button style={{ marginRight: '8px', color: '#007acc', background: 'none', border: 'none', cursor: 'pointer' }}><ThumbsUp /></button>
          <button style={{ marginRight: '8px', color: '#007acc', background: 'none', border: 'none', cursor: 'pointer' }}><ThumbsDown /></button>
        </div>
      </div>
    </>
  );
};

export default Customer3;
