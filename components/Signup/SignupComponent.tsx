import { Box, Button, Center, Flex, Image, Img, Text } from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";
import CustomButton from "@/components/Common/CustomButton";

interface IAppProps {}

const SignupComponent: React.FunctionComponent<IAppProps> | any = () => {
  return (
    <Flex flexDirection={"column"} alignItems='center' >
      <Link href="/signup" style={{ textDecoration: "none" }}>
        <CustomButton
          imageSrc="/utils/Common/user.svg"
          text=" Signup as Player"
          onClick={() => console.log("Button clicked!")}
          size="lg"
          btnDisabled={false}
          buttonBgColor="#00E276"
          customHeight={["60px"]}
          widthArray={["370px"]}
          btnBorderRadius={["10px"]}
          mt={["10px", "10px", "10px", "10px", "40px"]}
          mb={["30px", "10px", "10px", "40px", "40px"]}
          fontSize={[ "20px"]}
          iconVisStatus={true} // this is hard coded value
          btnHoverColor={"#ff6900"}
          color={"white"}
        />
      </Link>
      <Image src="/utils/Common/OR.svg" alt="or_logo" />
      <Link href="/signup" style={{ textDecoration: "none" }}>
        <CustomButton
          imageSrc="/utils/Common/user2.svg"
          text=" Signup as HOA Admin"
          onClick={() => console.log("Button clicked!")}
          size="lg"
          btnDisabled={true}
          buttonBgColor="#00E276"
          customHeight={["60px"]}
          widthArray={["370px"]}
          btnBorderRadius={["10px"]}
          mt={["10px", "10px", "10px", "10px", "40px"]}
          mb={["30px", "10px", "10px", "40px", "40px"]}
          fontSize={["20px"]}
          iconVisStatus={true} // this is hard coded value
          btnHoverColor={"#ff6900"}
          color={"white"}
        />
      </Link>
      <Image src="/utils/Common/play-player.svg" alt="Player_Img" />
    </Flex>
  );
};

export default SignupComponent;
