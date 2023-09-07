import React from 'react';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import "./Backtotop.scss"

const BackToTopButton = () => {
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="back-to-top" onClick={handleBackToTop}>
     <KeyboardDoubleArrowUpIcon/>
    </div>
  );
};

export default BackToTopButton;
