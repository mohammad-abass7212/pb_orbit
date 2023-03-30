import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CustomButton from "@/components/CustomButton";
import CustomText, { variants } from "@/components/Common/CustomText";

const Community = () => {
  const router = useRouter();

  React.useEffect(() => {
    localStorage.removeItem("forget-password");
  }, []);

  const handleviewCommunity = () => {
    router.push("/communityFrameFlow");
  };
  const handleCreateCommunity = () => {
    router.push("/communityFrameFlow");
  };
  return (
    <Box
      height={"800px"}
      bg="#050017"
      pt={["236px", "260px", "450px", "60px", "100px"]}
      pb={["170px", "400px", "400px", "40px", "40px"]}
      position="relative"
    >
      <Image
        w={["80%", "41%", "41%", "41%", "41%"]}
        position="absolute"
        bottom={["14px", "0px"]}
        src="/utils/Common/bg.png"
        alt=""
      />
      <Flex flexDirection={"column"} alignItems="center" gap={"20px"}>
        <Box
          w={["40%", "40%", "40%", "30%", "20%"]}
          mb={["73px", "73px", "73px", "40px", "54px"]}
        >
          <Image
            w={["100%", "100%", "100%", "100%", "100%"]}
            mb={["20px", "20px", "20px", "20px", "20px"]}
            src="/utils/Common/logo.png"
            alt=""
          />
        </Box>
        <CustomButton
          onClick={handleCreateCommunity}
          imageSrc={"/utils/Common/agency1.svg"}
          text={"Create Community"}
          btnDisabled={"false"}
          buttonBgColor={"#1ed661"}
          customHeight={["50px", "60px", "60px", "60px", "60px"]}
          widthArray={["266px", "366px", "366px", "366px", "366px"]}
          btnBorderRadius={["10px"]}
          mt={[]}
          mb={[]}
          fontSize
          iconVisStatus={"false"}
          btnHoverColor="#fe6601"
        />
        <Box color={"white"}>OR</Box>

        <CustomButton
          onClick={handleviewCommunity}
          imageSrc={"/utils/Common/agency2.svg"}
          text={"View Community"}
          btnDisabled={"false"}
          buttonBgColor={"#1ed661"}
          customHeight={["50px", "60px", "60px", "60px", "60px"]}
          widthArray={["266px", "366px", "366px", "366px", "366px"]}
          btnBorderRadius={["10px"]}
          mt={[]}
          mb={[]}
          fontSize
          iconVisStatus={"false"}
          btnHoverColor="#fe6601"
        />
        <Image src="/utils/Common/play-player.png" alt="" />
        <Link href="/signin">
          <Text color="white">Already have an account? Signin</Text>
        </Link>
        <Box mt={100}>
          <CustomText
            variant={variants.SMALL_HEADING}
            text={"Pborbit © 2023 All rights reserved"}
            link="/authFlow/userSignin"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Community;
