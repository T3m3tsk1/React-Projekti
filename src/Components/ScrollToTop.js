import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    // Tämä skrollaa aina sivun ylös kun reitti muuttuu
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

export default ScrollToTop;
