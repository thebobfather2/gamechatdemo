import React, { useState } from 'react';
import "./Home.css";

function Home() {

  const [iframe2Visible, setIframe2Visible] = useState(false);

  const iframeContainerStyle = {
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100%)
  };

  const buttonStyle = {
    fontSize: '1.3vw',
    position: 'absolute',
    top: '10px', // Adjust the top and right values as needed
    left: '10px',
    zIndex: 2, // Ensure the button is above iframe1
    backgroundColor: '#cccccc00',
    borderColor: '#ccc',
    border: "solid",
  };

  const toggleIframe2 = () => {
    setIframe2Visible(!iframe2Visible);
  };

  return (
    <main className="MainContainer">
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
        {/* Iframe 2 */}
        <div style={{iframeContainerStyle, display: iframe2Visible ? 'block' : 'none' }}>
          <iframe
          src="https://vsirgaming.vercel.app/VSIR"
            title="IFrame 2"
            id="iframe2"
            style={{ position: 'absolute', top: 0, right: 0, width: '25%', height: '25%' }}
          ></iframe>
        </div>
      </section>
        {/* Button to toggle iframe2 visibility */}
        <button style={buttonStyle} onClick={toggleIframe2}>Show/Hide Music</button>
    </main>
  );
}

export default Home;

