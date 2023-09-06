import React, { useState } from 'react';
import "./Home.css";

function Home() {

  const [iframe2Visible, setIframe2Visible] = useState(false);

  const iframeContainerStyle = {
    width: '100%',
    margin: '0 auto',
    position: 'relative',
    paddingBottom: '56.25%', // 16:9 aspect ratio (9 / 16 * 100%)
    border: 'none',
  };

  const buttonStyle = {
    fontSize: '1.3vw',
    position: 'absolute',
    top: '5px', // Adjust the top and right values as needed
    right: '10px',
    zIndex: 2, // Ensure the button is above iframe1
    backgroundColor: '#cccccc00',
    borderColor: '#ccc',
    border: "solid",
    margin: '20px',
    marginTop: '10px',
  };

  const toggleIframe2 = () => {
    setIframe2Visible(!iframe2Visible);
  };

  const iframe1Style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: iframe2Visible ? '70%' : '100%', // Adjust width based on iframe2 visibility
    height: '100%',
    border: 'none',
    borderRight: "solid",
    borderWidth: '6px',
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
            style={iframe1Style}
          ></iframe>
        </div>
        {/* Iframe 2 */}
        <div style={{iframeContainerStyle, display: iframe2Visible ? 'block' : 'none' }}>
          <iframe
          src="https://vsirgaming.vercel.app/VSIR"
            title="IFrame 2"
            id="iframe2"
            style={{ position: 'absolute', top: '55px', right: 0, width: '25%', height: '25%', margin: '20px' }}
          ></iframe>
        </div>

                {/* Iframe 3 */}
                <div style={{iframeContainerStyle, display: iframe2Visible ? 'block' : 'none' }}>
          <iframe
          src="https://vsn.whereby.com/joerian65f9e99c-9502-4009-adda-8d60d4c682dd?cameraAccess=off?chat=on"
            title="IFrame 3"
            id="iframe3"
            allow="camera; microphone; fullscreen; speaker"
            style={{ position: 'absolute', top: 220, right: 0, width: '25%', height: '47%', overflow: 'auto', margin: "20px" }}
          ></iframe>
        </div>
      </section>
        {/* Button to toggle iframe2 visibility */}
        <button style={buttonStyle} onClick={toggleIframe2}>Show/Hide VSN</button>
    </main>
  );
}



export default Home;

