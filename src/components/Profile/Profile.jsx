import React from 'react';
import './profile.css';

export default function Profile({ source, alternate }) {
    return (
      <img className='profile'
        src={source}
        alt={alternate}

        
      />
    );
  }