import React, { useState, useEffect, useRef } from 'react';
import "./Home.css";

function Home() {
  const iframeContainerStyle = {
    width: '80%',
    margin: '0 auto',
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100%)
  };

  const iframeRefs = {
    iframe1: useRef(null),
  };

  // Function to simulate a click on the button within the iframe
  function simulateButtonClick(iframeRef) {
    if (iframeRef.current) {
      const buttonInIframe = iframeRef.current.contentDocument.querySelector('[data-btn="mute"]');
      if (buttonInIframe) {
        buttonInIframe.click(); // Simulate a click on the button
      }
    }
  }

  // Function to handle the button click in the parent component
  function handleButtonClick() {
    // Simulate a click on the button in iframe 1
    simulateButtonClick(iframeRefs.iframe1);
  }

  return (
    <main className="MainContainer">
      <section className="iframeContainer">
        {/* Iframe 1 */}

        <div style={iframeContainerStyle}>
          <iframe
            src="https://www.miniplay.com/embed/mario-kart-64?volume=0"
            title="IFrame 1"
            id="iframe1"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}
          ></iframe>
                  <button onClick={handleButtonClick} style={{ zIndex: 1 }}>Simulate Button Click</button>
        </div>
        {/* Iframe 2 */}
        <div style={iframeContainerStyle}>
          <iframe
          src="https://vsirgaming.vercel.app/VSIR"
            title="IFrame 2"
            id="iframe2"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default Home;

