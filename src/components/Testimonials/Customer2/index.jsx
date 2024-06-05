import React from 'react';
import { ThumbsDown, ThumbsUp } from 'react-feather';
import ReactStars from 'react-rating-stars-component';

const Customer2 = () => {
  return (
    <>
      <div style={{ width: '100%', padding: '24px', display: 'flex', flexDirection: 'column', backgroundColor: '#bae6fd', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '1rem' }}>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ fontStyle: 'italic', fontWeight: 'bold', fontSize: '1.5rem', letterSpacing: '0.05em', color: '#333' }}>Khushi Sharma</div>
            <div style={{ color: '#007acc', fontWeight: 'bold', marginTop: '4px', fontSize: '1rem' }}>
              Manali, Himachal Pradesh
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <img style={{ borderRadius: '50%', height: '6rem', width: '6rem', marginBottom: '8px' }} src="https://cdn.dribbble.com/users/11920207/avatars/normal/6793f2c801abadf5b4855fc730e8bdd0.jpg?1710949884" alt="Khushi Sharma" />
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
          I've traveled with many tour companies over the years, but none have compared to the exceptional service provided by <span><button style={{ fontStyle: 'italic', fontWeight: '600', color: '#007acc', background: 'none', border: 'none', cursor: 'pointer' }}>Travel Bliss</button></span>. Their attention to detail, knowledgeable guides, and seamless logistics made our trip to Manali truly unforgettable. I can't wait to book my next adventure with them!
        </div>
        <div style={{ display: 'flex' }}>
          <button style={{ marginRight: '8px', color: '#007acc', background: 'none', border: 'none', cursor: 'pointer' }}><ThumbsUp /></button>
          <button style={{ marginRight: '8px', color: '#007acc', background: 'none', border: 'none', cursor: 'pointer' }}><ThumbsDown /></button>
        </div>
      </div>
    </>
  );
};

export default Customer2;
