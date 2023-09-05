import React, { useState } from 'react';
import "./Home.css";

function Home() {

  const iframeContainerStyle = {
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100%)
  };

  return (
    <main className="MainContainer">

              {/* Iframe 2 */}
              <div style={iframeContainerStyle}>
          <iframe
          src="https://vsnreact.herokuapp.com/VSIR"
            title="IFrame 2"
            id="iframe2"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
            allow="autoplay" // Allow autoplay
            autoplay // Autoplay attribute
          ></iframe>
        </div>
        
      <section className="iframeContainer">
        {/* Iframe 1 */}
        <div style={iframeContainerStyle}>
          <iframe
          src="https://www.miniplay.com/embed/mario-kart-64"
            title="IFrame 1"
            id="iframe1"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>

      </section>
    </main>
  );
}

export default Home;

