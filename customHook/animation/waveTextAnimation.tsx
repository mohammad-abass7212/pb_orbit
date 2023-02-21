import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export type TextAnimationOptions = {
  text: string;
  timing: number;
};

const useTextAnimation = ({ text, timing }: TextAnimationOptions) => {
  const textRef = useRef<HTMLDivElement>(null);
  const { ref, inView } = useInView({ threshold: 0.5 });

  useEffect(() => {
    let intervalId: NodeJS.Timeout;

    if (inView && textRef.current) {
      const textArray = text.split('');
      intervalId = setInterval(() => {
        if (textArray.length) {
          textRef.current.innerHTML += textArray.shift();
        } else {
          clearInterval(intervalId);
        }
      }, timing);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [inView, text, timing]);

  return { ref: textRef, wrapperRef: ref };
};

export default useTextAnimation;
