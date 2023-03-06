import { Box, Heading, Image, Link, Text } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent } from "react";
import CustomButton from "../Common/CustomButton";

const HomePage: FunctionComponent | any = () => {
  return (
    <Box
      position="relative"
      pt={["100px", "220px", "220px", "200px", "320px"]}
      w="50%"
      ml={["80px", "80px", "80px", "80px", "105px"]}
      mb={["0px", "0px", "0px", "190px", "175px"]}
    >
      <Image
        id="animatedImage"
        position="absolute"
        left={["-95px", "-108px", "-98px", "-63px", "-74px"]}
        top={["317px", "317px", "317px", "317px", "317px"]}
        w={["4", "4%", "4%", "4%", "4%"]}
        src="/utils/Common/shp1.png"
        alt="pborbit"
      />

      <Image
        position="absolute"
        left={["-95px", "-108px", "-98px", "-117px", "-170px"]}
        top={["154px", "250px", "308px", "256px", "394"]}
        w={["29%", "20%", "20%", "20%", "18%"]}
        src="/utils/Common/top_left.png"
        alt="pborbit"
      />
      <Text
        className="slide-up"
        color={["green", "green", "green", "green", "#22c35e"]}
        fontSize={["15px", "15px", "17px", "17px", "17px"]}
      >
        We are pborbit
      </Text>
      <Heading
        className="scale-up"
        style={{ fontFamily: "Poppins, sans-serif" }}
        fontSize={["15px", "20px", "30px", "30px", "40px"]}
        pr={["40px", "200px", "80px", "226px", "342px"]}
      >
        Court reservation platform for private community, parks, and HOAs
      </Heading>
      <Text
        className="slide-in-left"
        fontSize={["10px", "15px", "17px", "18px", "18px"]}
        color="hsl(80deg 8% 72%)"
        pr={["0px", "0px","0px", "0px","338px"]}
        wordBreak={"break-word"}
      >
        Our Activate suite of business apps gives your Lorem ipsum dolor sit
        amet, consectetur.
      </Text>

      <Link href="#" style={{ textDecoration: 'none' }}>
        <CustomButton
          imageSrc=""
          text="Get Started →"
          btnDisabled={false}
          buttonBgColor="#00E276"
          customHeight={["25px", "35px", "35px", "50px", "50px"]}
          widthArray={["60%", "53%", "35%", "35%", "30%"]}
          btnBorderRadius={["20px", "25px", "25px", "25px", "27px"]}
          mt={["10px", "10px", "10px", "10px", "40px"]}
          mb={[]}
          fontSize={["12px", "16px", "16px", "16px", "16px", "20px"]}
          iconVisStatus={false}
          btnHoverColor={"#ff6900"}
        />
      </Link>
    </Box>
  );
};
export default HomePage;
