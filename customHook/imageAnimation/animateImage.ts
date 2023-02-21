import { useEffect, useState } from "react";
import gsap from "gsap";

export type Options = {
  target: string;
};

export type Timing = {
  duration: number;
  ease: string;
};

type AnimationFunction = (image: HTMLImageElement, timeline?: gsap.core.Timeline) => void;



export default function useImageAnimation(options: Options, timing: Timing): AnimationFunction {
  const [tl] = useState(gsap.timeline({ paused: true }));


  useEffect(() => {
    tl.to(options.target, {
      duration: timing.duration,
      ease: timing.ease,
      opacity: 1,
      y: 0,
    });
  }, [options, timing, tl]);

  const animateImage: AnimationFunction = (image, timeline = tl) => {
    
    timeline.fromTo(
      image,
      { opacity: 0, y: 50 },
      { duration: timing.duration, ease: timing.ease, opacity: 1, y: 0 }
    );
  };

  return animateImage;
}
