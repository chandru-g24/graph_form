import React from 'react';
import './App.css';

const IFrameComponent = ({ customerName = "non" }) => {
  const iframeUrl = `https://form-cab.streamlit.app/?customer_name=${customerName}&embed=true&embed_options=light_theme`;

  return (
    <div className="center-container">
      <div className="form-container">
        <div className="iframe-wrapper visible">
          <iframe 
            src={iframeUrl} 
            width="100%" 
            height="100%" 
            type="text/html"
            allowTransparency="true" 
            style={{
              border: '0',
              boxShadow: '0px 0px 15px gray',
              overflow: 'hidden'
            }}
            title="IFrame Example"
          />
        </div>
      </div>
    </div>
  );
}

export default IFrameComponent;
