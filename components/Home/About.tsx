import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent, useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomButton from "../Common/CustomButton";

const About: FunctionComponent = () => {
  const [ref, inView] = useInView({
    threshold: 0.5, // set the threshold to 50% visibility
    triggerOnce: true, // trigger animation only once
  });

  const animation = {
    opacity: inView ? 1 : 0,
    x: inView ? 0 : -100,
    transition: { duration: 1 },
  };
  const variants = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 1,
        ease: "easeInOut",
        delay: 0.2,
      },
    },
    hidden: {
      opacity: 0,
      x: -50,
    },
  };
  return (
    <Flex
      justifyContent="space-between"
      mt="40px"
      p={["40px", "20px", "50px", "100px", "120px"]}
      flexDirection={["column", "column", "column", "row", "row"]}
    >
      <Box mb={["40px", "40px", "40px", "0", "0"]} flexShrink={0} ref={ref}>
        <motion.div animate={animation}>
          <motion.img src="/utils/Common/about-img.png" alt="pborbit" />
        </motion.div>
      </Box>

      <Box
        display="flex"
        flexDirection={["column", "column", "row", "row", "row"]}
        alignItems="center"
        justifyContent="center"
        maxWidth="100%"
      >
        <Box
          pl={["0px", "0px", "60px", "90px", "190px"]}
          mt={["40px", "40px", "40px", "80px", "80px"]}
          flexGrow={1}
          maxWidth={["100%", "100%", "100%"]}
          textAlign={["left", "left", "left", "left", "left"]}
        >
          <motion.div
            variants={variants}
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <Heading>About PBorbit</Heading>
            <Text
              mt="10px"
              fontSize={["10px", "15px", "17px", "18px", "18px"]}
              color="hsl(80deg 8% 72%)"
              textAlign="left"
              mx="auto"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              felis augue, tincidunt sed nulla non, suscipit ullamcorper purus.
              Fusce commodo urna eu lorem hendrerit rhoncus. Aenean mattis
              dictum justo at pharetra. Fusce eu pellentesque velit. Duis non
              tristique erat. Nunc sit amet dolor quis urna vulputate lacinia.
            </Text>
            <Flex
              flexDirection="column"
              gap="10px"
              mt="20px"
              justifyContent="flex-start"
            >
              <Box display="flex" alignItems="center" gap="10px">
                <Image
                  boxSize={["20px", "20px", "20px", "20px", "20px"]}
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text className="typewriter">Court reservations</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Image
                  boxSize={["20px"]}
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text className="typewriter">Community Manage</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Image
                  boxSize={["20px"]}
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text className="typewriter">Manage Your Court Easily</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Image
                  boxSize={["20px"]}
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text className="typewriter">Court reservations</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Image
                  boxSize={["20px"]}
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text className="typewriter">Install app and get Rewards</Text>
              </Box>
              <Box display="flex" alignItems="center" gap="10px">
                <Image
                  boxSize={["20px"]}
                  src="/utils/Common/checklist.png"
                  alt="pb"
                />
                <Text className="typewriter">Community Manage</Text>
              </Box>
              <Link href="/community" style={{ textDecoration: 'none' }}>
                <CustomButton
                  imageSrc="/create_community.svg"
                  text="Get Started →"
                  onClick={() => console.log("Button clicked!")}
                  size="lg"
                  btnDisabled={false}
                  buttonBgColor="#00E276"
                  customHeight={["40px", "30px", "30px", "40px", "50px"]}
                  widthArray={["70%", "30%", "35%", "70%", "70%"]}
                  btnBorderRadius={["20px", "25px", "25px", "25px", "27px"]}
                  mt={["10px", "10px", "10px", "10px", "40px"]}
                  mb={["30px", "10px", "10px", "40px", "40px"]}
                  fontSize={["13px", "16px", "16px", "16px", "20px"]}
                  iconVisStatus={false} // this is hard coded value
                  btnHoverColor={"#ff6900"}
                />
              </Link>
            </Flex>
          </motion.div>
        </Box>
      </Box>
    </Flex>
  );
};
export default About;
