import { useEffect } from "react";

const UseClickAnimation2 = (ref, { size = 200 } = {}) => {
  useEffect(() => {
    const element = ref.current;
    if (element) {
      const start = () => {
        element.animate(
          [
            {
              transform: "scale(1)",
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            },
            {
              transform: `scale(${size / 100})`,
              boxShadow: `0 0 ${size / 10}px rgba(0, 0, 0, 0.3)`,
            },
            {
              transform: "scale(1)",
              boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
            },
          ],
          {
            duration: 300,
            easing: "ease-out",
          }
        );
      };

      element.addEventListener("mousedown", start);

      return () => {
        element.removeEventListener("mousedown", start);
      };
    }
  }, [ref, size]);
};
export default UseClickAnimation2;
