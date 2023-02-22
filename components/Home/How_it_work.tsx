import {
  useAnimation,
  LeftItem,
  RightItem,
  MainSection,
  Container,
  AnimatedContainer,
} from "@/customHook/animationhook";
import { Box, Button, Center, Heading, Image, Text } from "@chakra-ui/react";
import gsap from "gsap";
import React, { useEffect, useState } from "react";
import { FunctionComponent } from "react";
import styled from "styled-components";

const Section = styled(Box)`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Animation = styled(Box)`
  opacity: 0;
  transform: translateY(70px);
`;
const How_it_work: FunctionComponent = () => {
  const [isAnimationPlayed, setIsAnimationPlayed] = useState(false);

  useEffect(() => {
    const animation = document.querySelector(".animation");
    const timeline = gsap.timeline({ paused: true });

    timeline
      .to(animation, { opacity: 1, duration: 2, ease: "power2.out" })
      .to(animation, { y: 0, duration: 1, ease: "power2.out" }, "-=0.5");

    const handleScroll = () => {
      if (!isAnimationPlayed && isInView(animation)) {
        setIsAnimationPlayed(true);
        timeline.play();
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isAnimationPlayed]);

  const isInView = (elem: any) => {
    const distance = elem.getBoundingClientRect();
    return (
      distance.top >= 0 &&
      distance.left >= 0 &&
      distance.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      distance.right <=
        (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  const animationProps = {
    duration: 1,
    delay: 0.5,
  };
  const { LeftItem, RightItem, MainSection, Container, AnimatedContainer } =
    useAnimation({ animationProps });
  return (
    <Section
      display={"flex"}
      flexDirection="column"
      position="relative"
      alignItems="center"
      gap={"20px"}
    >
      <Image
        style={{ position: "absolute", left: "-140px", bottom: "00px" }}
        src="/utils/Common/dot-bg.png"
        alt="pborbit"
      />
      <Animation className="animation">
        {" "}
        <Center> </Center>
        <Center mt={["0px", "20px"]}>
          {" "}
          <Text
            w={["80%", "95%", "35%", "64%", "71%"]}
            textAlign="center"
            color="#B4B4B6"
          >
            Lorem Ipsum is simply dummy text of the printing and type setting
            industryLorem Ipsum is simply
          </Text>{" "}
        </Center>
        <Center mt="20px">
          <Box
            display={"flext"}
            gap="5px"
            bg="white"
            w={["60%", "80%", "80%", "70%", "75%"]}
            borderRadius={"50px"}
            boxShadow="dark-lg"
          >
            <Button
              bg="#243b5d"
              w={["48%", "52%", "52%", "51%", "52%"]}
              fontSize={["9.5px", "25px"]}
              h={["30px", "60px"]}
              borderRadius={"50px"}
              style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
            >
              {" "}
              Player{" "}
            </Button>
            <Button
              ml="10px"
              bg="white"
              color="black"
              w={["46%", "46%", "46%", "46%", "46%"]}
              fontSize={["9.5px", "25px"]}
              h={["30px", "60px"]}
              borderRadius={"50px"}
            >
              {" "}
              Community{" "}
            </Button>
          </Box>
        </Center>{" "}
      </Animation>

      

      <MainSection>
        <Box
          display="flex"
          // pl={["50px", " 30px", "0px", "0px", "300px"]}
          // pr={["40px", "250px"]}
        >
          <LeftItem className="left-item" >
            {" "}
            <Box w={["30%", "30%", "30%", "30%", "30%"]} mr={["0px", "50px"]}>
              <Image
                src="/utils/Common/how-player.png"
                alt="pb"
                w={["100%", "100%", "100%", "100%", "100%"]}
                ml={"0px"}
              />
            </Box>
          </LeftItem>
          <RightItem className="right-item">
            <Box
              w={["70%", "100%", "100%", "50%", "100%"]}
              mt="25px"
              //  p={["10px", " 300px", "0px", "0px", "120px"]}
            >
              <Box display="flex" alignItems="center" gap={"25px"}>
                <Center
                  w={["40px", "70px", "80px", "90px", "90px"]}
                  h={["40px", "60px", "80px", "85px", "90px"]}
                  alignItems="center"
                  border={["dashed 2px", "dashed 3px"]}
                  borderRadius="50%"
                  color="teal"
                >
                  <Center
                    boxSize={["30px", "50px", "60px", "65px", "70px"]}
                    bg="white"
                    borderRadius="50%"
                    fontSize={["10px", "20px"]}
                    fontWeight={"800"}
                    color="black"
                  >
                    01
                  </Center>{" "}
                </Center>
                <Text fontSize={["10px", "20px"]}>
                  {" "}
                  Create free account on PBorbit
                </Text>
              </Box>
              <Box
                ml={["20px", "30px", "40px", "43px", "43px"]}
                borderLeft={[
                  "dashed 2px",
                  "dashed 2px",
                  "dashed 2px",
                  "dashed 3px",
                  "dashed 3px",
                ]}
                // borderColor={"#3333ff"}
                h={["21px", "22px", "21px", "22px", "22px"]}
                color="teal"
                w="0px"
              ></Box>
              <Box display="flex" alignItems="center" gap={"25px"}>
                <Center
                  w={["40px", "70px", "80px", "90px", "90px"]}
                  h={["40px", "60px", "80px", "85px", "90px"]}
                  display="flex"
                  // textAlign={"center"}
                  alignItems="center"
                  // bg="red"
                  border={["dashed 2px", "dashed 3px"]}
                  borderColor={"#3333ff"}
                  // boxDecorationBreak={2}
                  // style={{ borderCollapse: "collapse"}}
                  borderRadius="50%"
                  color="teal"
                >
                  <Center
                    boxSize={["30px", "50px", "60px", "65px", "70px"]}
                    // m="20px"
                    // textAlign={"center"}
                    // alignItems="center"
                    bg="white"
                    borderRadius="50%"
                    fontSize={["10px", "20px"]}
                    fontWeight={"800"}
                    color="black"
                  >
                    02
                  </Center>{" "}
                </Center>
                <Text fontSize={["10px", "20px"]}>
                  {" "}
                  Create free account on PBorbit
                </Text>
              </Box>
              <Box
                ml={["20px", "30px", "40px", "43px", "43px"]}
                borderLeft={[
                  "dashed 2px",
                  "dashed 2px",
                  "dashed 2px",
                  "dashed 3px",
                  "dashed 3px",
                ]}
                color="teal"
                h={["21px", "22px", "21px", "22px", "22px"]}
                w="0px"
              ></Box>
              <Box display="flex" alignItems="center" gap={["25px", "25px"]}>
                <Center
                  w={["40px", "70px", "80px", "90px", "90px"]}
                  h={["40px", "60px", "80px", "85px", "90px"]}
                  display="flex"
                  // textAlign={"center"}
                  alignItems="center"
                  // bg="red"
                  border={["dashed 2px", "dashed 3px"]}
                  borderColor={"#3333ff"}
                  // boxDecorationBreak={2}
                  // style={{ borderCollapse: "collapse"}}
                  borderRadius="50%"
                  color="teal"
                >
                  <Center
                    boxSize={["30px", "50px", "60px", "65px", "70px"]}
                    // m="20px"
                    // textAlign={"center"}
                    // alignItems="center"
                    bg="white"
                    borderRadius="50%"
                    fontSize={["10px", "10px", "10px", "20px", "20px", "20px"]}
                    fontWeight={"800"}
                    color="black"
                  >
                    03
                  </Center>{" "}
                </Center>
                <Text fontSize={["10px", "20px"]}>
                  {" "}
                  Create free account on PBorbit
                </Text>
              </Box>
            </Box>
          </RightItem>
        </Box>
      </MainSection>
      <AnimatedContainer className="animated-container">
        {" "}
        <Center>
          <Button
            mt={["0px", "-10px", "10px", "-10px", "40px"]}
            bg="#01df74"
            w={["300px", "300px", "300px", "300px", "300px"]}
            fontSize={["15px", "16px", "16px", "16px", "16px", "20px"]}
            h={["35px", "30px", "30px", "40px", "40px"]}
            borderRadius={["25px", "25px", "25px", "25px", "27px"]}
            p="27px"
          >
            Get Sarted →
          </Button>
        </Center>
      </AnimatedContainer>
    </Section>
  );
};
export default How_it_work;
