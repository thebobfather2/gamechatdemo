import React, { useState } from 'react';
import "./Home.css";
import vsnLogo from "../img/vsnredbanner.jpg";

function Home() {
  // State variables to track mute status for each iframe
  const [iframe1Muted, setIframe1Muted] = useState(false);
  const [iframe2Muted, setIframe2Muted] = useState(false);

  // Function to toggle the mute state for iframe 1
  const toggleIframe1Mute = () => {
    setIframe1Muted(!iframe1Muted);
    // Access the iframe element and set its volume to 0 when muted
    const iframe1 = document.getElementById('iframe1');
    if (iframe1) {
      iframe1.volume = iframe1Muted ? 1 : 0;
    }
    console.log("mute button pressed")
  };

  // Function to toggle the mute state for iframe 2
  const toggleIframe2Mute = () => {
    setIframe2Muted(!iframe2Muted);
    // Access the iframe element and set its volume to 0 when muted
    const iframe2 = document.getElementById('iframe2');
    if (iframe2) {
      iframe2.volume = iframe2Muted ? 1 : 0;
    }
  };

  const iframeContainerStyle = {
    width: '80%',
    margin: '0 auto',
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100%)
  };

  // CSS styles for the mute button in the top right corner
  const muteButtonStyle = {
    position: 'absolute',
    top: '0px',
    right: '0px',
    background: 'rgba(255, 0, 0, 0.5)', // Red with 50% opacity
    color: 'white',
    padding: '5px 10px',
    cursor: 'pointer',
    fontSize: '2vw', // Adjust the font size as needed
    zIndex: 1, // Ensures the button is displayed on top
  };

  return (
    <main className="MainContainer">
      <section className="iframeContainer">
        {/* Iframe 1 */}

        <div style={iframeContainerStyle}>
          {/* Mute button for Iframe 1 */}
          <button
            onClick={toggleIframe1Mute}
            style={muteButtonStyle}
          >
            {iframe1Muted ? "Unmute Game" : "Mute Game"}
          </button>
          <iframe
            src="https://www.miniplay.com/embed/mario-kart-64"
            title="IFrame 1"
            id="iframe1"
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
          ></iframe>
        </div>

        {/* Iframe 2 */}
        <div style={iframeContainerStyle}>
          <button
            onClick={toggleIframe2Mute}
            style={muteButtonStyle}
            >
            {iframe2Muted ? "Unmute VSIR" : "Mute VSIR"}
          </button>
          <iframe
          src="https://vsnreact.herokuapp.com/VSIR"
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

