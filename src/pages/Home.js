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
    top: '10px', // Adjust the top and right values as needed
    right: '10px',
    zIndex: 2, // Ensure the button is above iframe1
    backgroundColor: '#cccccc00',
    borderColor: '#ccc',
    border: "solid",
  };

  const toggleIframe2 = () => {
    setIframe2Visible(!iframe2Visible);
  };

  const iframe1Style = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: iframe2Visible ? '60%' : '100%', // Adjust width based on iframe2 visibility
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
            style={{ position: 'absolute', top: "70px", right: '30px', width: '35%', height: '35%' }}
          ></iframe>
        </div>

                {/* Iframe 3 */}
                <div style={{iframeContainerStyle, display: iframe2Visible ? 'block' : 'none' }}>
          <iframe
          src="https://widget.mibbit.com/?settings=b7d60454a33e30fe1ce470368ee12bc4&server=irc.mibbit.net%3A%2B6697&channel=%23bap0006_test"
            title="IFrame 3"
            id="iframe3"
            style={{ position: 'absolute', top: "350px", right: '30px', width: '35%', height: '52%' }}
          ></iframe>
        </div>
      </section>
        {/* Button to toggle iframe2 visibility */}
        <button style={buttonStyle} onClick={toggleIframe2}>Show/Hide VSN</button>
    </main>
  );
}



export default Home;

