import gsap, { TimelineMax } from 'gsap';
import styled from 'styled-components';

type AnimationProps = {
  duration: number;
  delay: number;
};

type UseAnimationProps = {
  animationProps: AnimationProps;
};

const useAnimation = ({ animationProps }: UseAnimationProps) => {
  const { duration, delay } = animationProps;

  const timeline: TimelineMax = gsap.timeline({ paused: true });

  const handleScroll = () => {
    const leftItem = document.querySelector('.left-item');
    const rightItem = document.querySelector('.right-item');
    const animatedContainer = document.querySelector('.animated-container');

    if (isInView(leftItem) && isInView(rightItem) && isInView(animatedContainer)) {
      timeline.play();
      window.removeEventListener('scroll', handleScroll);
    }
  };

  useEffect(() => {
    timeline
      .to('.left-item', { opacity: 1, x: 0, duration, ease: 'power2.out' })
      .to('.right-item', { opacity: 1, x: 0, duration, ease: 'power2.out' }, `-=${duration}`)
      .to('.animated-container', { opacity: 1, y: 0, duration, ease: 'power2.out' }, `-=${duration + delay}`);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [duration, delay, timeline]);

  return { LeftItem, RightItem, MainSection, Container, AnimatedContainer };
};

const LeftItem = styled.div`
  opacity: 0;
  transform: translateX(-300px);
`;

const RightItem = styled.div`
  opacity: 0;
  transform: translateX(300px);
`;

const MainSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AnimatedContainer = styled.div`
  opacity: 0;
  transform: translateY(50px);
`;

const isInView = (elem: Element | null): boolean => {
  if (!elem) return false;

  const distance = elem.getBoundingClientRect();
  return (
    distance.top >= 0 &&
    distance.left >= 0 &&
    distance.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    distance.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

export { useAnimation, LeftItem, RightItem, MainSection, Container, AnimatedContainer };
