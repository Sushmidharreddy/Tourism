import React from 'react';
import { ThumbsDown, ThumbsUp } from 'react-feather';
import ReactStars from 'react-rating-stars-component';

const Customer4 = () => {
  return (
    <>
      <div style={{ width: '100%', padding: '24px', display: 'flex', flexDirection: 'column', backgroundColor: '#bae6fd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '1rem' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.05em', color: '#333' }}>Sakshi Verma</div>
            <div style={{ color: '#007acc', fontWeight: 'bold', marginTop: '4px', fontSize: '1rem' }}>
              Delhi Sarojini nagar
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img style={{ borderRadius: '50%', height: '6rem', width: '6rem', marginBottom: '8px' }} src="https://cdn.dribbble.com/users/7883727/avatars/normal/26ab7043a07228a679414eb89392f730.jpeg?1680217851" alt="Sakshi Verma" />
            <ReactStars
              count={5}
              size={24}
              activeColor="#ffd700"
              value={4} // Example rating value
              edit={false} // Make it non-editable
            />
          </div>
        </div>
        <div style={{ color: '#555', marginBottom: '16px', fontSize: '1rem' }}>
          The overall experience was very good. PMT helped us in planning our journey in Bali. The local guide/driver (Deva) was very supportive. The backend support staff were very supportive and helpful. They briefed about the journey in detail. There were no havoc in the entire journey.
        </div>
        <div style={{ display: 'flex' }}>
          <button style={{ marginRight: '8px', color: '#007acc', background: 'none', border: 'none', cursor: 'pointer' }}><ThumbsUp /></button>
          <button style={{ marginRight: '8px', color: '#007acc', background: 'none', border: 'none', cursor: 'pointer' }}><ThumbsDown /></button>
        </div>
      </div>
    </>
  );
};

export default Customer4;
