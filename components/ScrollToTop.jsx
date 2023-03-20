import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useWindowScroll } from "react-use";

interface numberVariable{}
const useScrollToTop = (scrollThreshold: number): numberVariable   => {
  const { y: pageYOffset } = useWindowScroll();
  const [visible, setVisibility] = useState<boolean>(false);

  useEffect(() => {
    if (pageYOffset > scrollThreshold) {
      setVisibility(true);
    } else {
      setVisibility(false);
    }
  }, [pageYOffset, scrollThreshold]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    visible && (
      <Box
        className="scroll-to-top cursor-pointer text-center"
        onClick={scrollToTop}
      >
        <i className="icon fas fa-chevron-up"></i>
      </Box>
    )
  );
};

export default useScrollToTop;
