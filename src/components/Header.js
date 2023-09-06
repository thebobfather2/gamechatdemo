import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './style.css';

function Header({ handlePageChange, currentPage }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  // Set isHeaderVisible to false when the component mounts
  useEffect(() => {
    setIsHeaderVisible(false);
  }, []);

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        color: '#ffffff',
        backgroundColor: '#000000',
        position: 'relative',
        transform: `translateY(${isHeaderVisible ? 0 : '-100%'})`,
        transition: 'transform 0.3s ease', // Adjust the duration and easing as needed
      }}
    >
      <h1
        className="Header"
        style={{
          textAlign: 'right',
          textShadow: '2px 2px #F3E47D',
          color: '#ffffff',
        }}
      >
        <a href="/" style={{ display: 'block' }}>
          <img src="./img/vsnlogo.png" style={{ width: '70px', marginLeft: '30px' }} alt="Logo" />
        </a>
      </h1>
      <Navbar handlePageChange={handlePageChange} currentPage={currentPage} />
    </header>
  );
}

export default Header;
