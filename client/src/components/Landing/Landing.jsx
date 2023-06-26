import React, { useState, useEffect } from 'react';
import "./Landing.scss"
import KeyboardDoubleArrowDownIcon from '@mui/icons-material/KeyboardDoubleArrowDown';

const Landing = () => {
  const [showPopup, setShowPopup] = useState(false);
 

  useEffect(() => {
    
    // Check if the popup has been shown before
    const popupShown = localStorage.getItem('popupShown');
    // const popupShown = false

    if (!popupShown) {
      // If the popup has not been shown before, show it
      setShowPopup(true);
      // Mark the popup as shown to prevent it from showing again
      localStorage.setItem('popupShown',true);
    }
  }, []);

  const handleClose = () => {
    // Close the popup
    setShowPopup(false);
  };

  useEffect(() => {
    const clearSessionData = () => {
      // Clear your session data here
      // For example, if using localStorage:
      localStorage.clear();
    };

    // Listen for the beforeunload and unload events
    window.addEventListener('beforeunload', clearSessionData);
    window.addEventListener('unload', clearSessionData);

    return () => {
      // Cleanup: remove the event listeners
      window.removeEventListener('beforeunload', clearSessionData);
      window.removeEventListener('unload', clearSessionData);
    };
  }, []);

  if (!showPopup) {
    return null; // Don't render anything if the popup is not shown
  }
  

  return (
    <div className="popup-container">
        <img src="/img/Shopping.png" alt="" />
      <div className="popup-content">
        <h1>Welcome to PatelJewellers</h1>
        <p>The Jewellery collection that reflects its classic cuts, uniqueness, and exquisite design, offered with promise of trust and quality.</p>
        <button onClick={handleClose}>Shop Now</button>
        <p>scrolldown</p>
        <KeyboardDoubleArrowDownIcon/>
      </div>
    </div>
  );
};

export default Landing;
