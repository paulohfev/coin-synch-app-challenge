import { useState, useEffect } from 'react';

type state = {
  width: number,
  height: number,
}

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] = useState<state>({
    width: 1025,
    height: 0,
  });

  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

export default useWindowDimensions;