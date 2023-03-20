import { useEffect, useState } from "react";


const ResizableContainer=({ children }) => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const updateWindowSize = () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  };

  useEffect(() => {
    window.addEventListener('resize', updateWindowSize);
    updateWindowSize();
    return () => {
      window.removeEventListener('resize', updateWindowSize);
    };
  }, []);

  useEffect(() => {
    document.body.style.height = `${windowSize.height}px`;
    document.body.style.width = `${windowSize.width}px`;
  }, [windowSize]);

  return <>{children}</>;
};

export default ResizableContainer;
