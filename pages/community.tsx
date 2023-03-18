import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";
import CustomText, { variants } from "@/components/Common/CustomText";
import SignupComponent from "../components/Signup/SignupComponent";

interface communityProp {}

const Community: React.FunctionComponent<communityProp> | any = () => {
  return (
    <>
      <Image
        w={["80%", "41%", "41%", "41%", "41%"]}
        position="absolute"
        bottom={["14px", "0px"]}
        src="/utils/Common/bg.png"
        alt="background_Img"
      />
      <Flex flexDirection={"column"} alignItems="center" gap={"20px"}>
        <Image
          w={["30%"]}
          // mb={["20px", "20px", "20px", "20px", "20px"]}
          src="/utils/Common/logo.png"
          alt=""
          border={"2px solid red"}
        />
        {/* horizontally animation module will be below it */}
        {/* <SignupForm /> */}
        <SignupComponent />

        {/*horizontally animation module will be above it */}
        <CustomText
          variant={variants.SMALL_HEADING}
          text={"Already have an account?Signin"}
          link={""}
        />
      </Flex>
    </>
  );
};

export default Community;
