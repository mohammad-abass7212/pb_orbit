import { useEffect, useState } from "react";

const useWindowDimensions = () => {
  const [windowDimensions, setWindowDimensions] =
    useState <
    WindowDimentions >
    {
      width: undefined,
      height: undefined,
    };
  useEffect(() => {
    function handleResize() {
      setWindowDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [setWindowDimensions]); // Empty array ensures that effect is only run on mount

  return windowDimensions;
};

export default useWindowDimensions;
