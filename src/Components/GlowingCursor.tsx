import React, { useState, useEffect } from 'react';

const GlowingCursor = () => {
  const [sunSize, setSunSize] = useState('50%');
  const [sunPosition, setSunPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateSunPosition = (event:MouseEvent) => {
      const distance = Math.sqrt(
        Math.pow(event.pageX - window.innerWidth / 2, 2) +
        Math.pow(event.pageY - window.innerHeight / 2, 2)
      );
      setSunSize(`${50 + distance / 10}%`); // Adjust the size based on distance
      setSunPosition({ x: event.pageX - 300, y: event.pageY - 300 });
    };

    document.addEventListener('mousemove', updateSunPosition);

    return () => {
      document.removeEventListener('mousemove', updateSunPosition);
    };
  }, []);

  return (
    <div className="sun" style={{ left: sunPosition.x, top: sunPosition.y, backgroundSize: sunSize }}></div>
  );
};

export default GlowingCursor;
