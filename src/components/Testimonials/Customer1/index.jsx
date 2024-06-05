import React from 'react';
import { ThumbsDown, ThumbsUp } from 'react-feather';
import ReactStars from 'react-rating-stars-component';

const Customer1 = () => {
  return (
    <>
     <div style={{ width: '100%', padding: '24px', display: 'flex', flexDirection: 'column', backgroundColor: '#bae6fd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '1rem' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.05em', color: '#333' }}>Arjun Baniya</div>
            <div style={{ color: '#007acc', fontWeight: 'bold', marginTop: '4px', fontSize: '1rem' }}>
            Mumbai, Maharashtra
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img style={{ borderRadius: '50%', height: '6rem', width: '6rem' }} src="https://cdn.dribbble.com/users/2124370/avatars/normal/6672b16d88004bdf420c30258010b5bf.jpg?1700923250" alt="Arjun Baniya" />
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={4.5} // Example rating value
              edit={false} // Make it non-editable
            />
          </div>
        </div>
        
        <div style={{ color: '#4a5568', margin: '16px 0' }}>
          I was amazed by the quality of service provided by <span><button style={{ fontStyle: 'italic', fontWeight: '600' }}>Travel Bliss</button></span>. They exceeded my expectations and I highly recommend them to anyone in need of their services.
        </div>
        <div style={{ display: 'flex' }}>
          <button style={{ marginRight: '8px' }}><ThumbsUp /></button>
          <button style={{ marginRight: '8px' }}><ThumbsDown /></button>
        </div>
      </div>
    </>
  );
};

export default Customer1;
