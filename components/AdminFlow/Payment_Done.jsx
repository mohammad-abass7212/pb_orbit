import CustomButton from "@/components/Common/CustomButton";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Payment_Page = () => {
  // const router = useRouter();
  // const handleAddusers = () => {
  //   router.push("/communityFrameFlow");
  // };
  return (
    <Box className="text-center h-screen flex-col justify-center gap-8 m-auto">
      <Image className="m-auto py-10" src="/utils/common/shape.svg" alt="" />
      <Box>
        {" "}
        <Heading color="white" className="font-bold text-4xl">
          $400.00
        </Heading>{" "}
      </Box>
      <Box className="m-auto py-10 font-bold">
        <Text color={"white"}> Your payment has been succesfully complete</Text>
      </Box>
      <Flex gap={7} direction={"column"}>
        <Box display={"flex"} justifyContent={"center"} textAlign={"center"}>
          <Link href={"/communityFrameFlow"}>
            <CustomButton
              // onClick={handleAddusers}
              text={"Add users"}
              btnDisabled={false}
              buttonBgColor={"#00E276"}
              customHeight={["50px"]}
              widthArray={["250px"]}
              btnBorderRadius={"15px"}
              iconVisStatus={false}
              color={"white"}
              //  spinner={}
            />
          </Link>
        </Box>
        <Box display={"flex"} justifyContent={"center"} textAlign={"center"}>
          <Link href={"/communityFrameFlow"}>
            <CustomButton
              text={"Go to Dashboard"}
              btnDisabled={false}
              buttonBgColor={"#00E276"}
              customHeight={["50px"]}
              widthArray={["250px"]}
              btnBorderRadius={"15px"}
              iconVisStatus={false}
              color={"white"}
              //  spinner={}
            />{" "}
          </Link>
        </Box>
      </Flex>
    </Box>
  );
};

export default Payment_Page;
