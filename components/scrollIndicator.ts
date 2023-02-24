import { useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';
import styled from 'styled-components';

const ScrollIndicator = () => {
  const [scrollPercent, setScrollPercent] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.body.scrollHeight;
    const percent = (scrollTop / (fullHeight - windowHeight)) * 100;
    setScrollPercent(percent);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Box
      pos="fixed"
      bottom="0"
      left="0"
      w={`${scrollPercent}%`}
      h="5px"
      bg="brand.500"
      transition=".3s ease-out all"
      zIndex={9999}
    />
  );
};

export default ScrollIndicator;
