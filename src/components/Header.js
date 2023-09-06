import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import './style.css';

function Header({ handlePageChange, currentPage }) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    // Add an event listener to track mouse position
    const handleMousePosition = (e) => {
      setMouseY(e.clientY);
    };

    window.addEventListener('mousemove', handleMousePosition);

    return () => {
      window.removeEventListener('mousemove', handleMousePosition);
    };
  }, []);

  useEffect(() => {
    // Define the threshold (e.g., 50 pixels from the top)
    const threshold = 130;

    // Check if the mouse is close enough to the top to keep the header visible
    setIsHeaderVisible(mouseY <= threshold);
  }, [mouseY]);

  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        color: 'none',
        backgroundColor: 'none',
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
      </h1>
    </header>
  );
}

export default Header;
