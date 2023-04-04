import CustomButton from "@/components/Common/CustomButton";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Payment_Done = () => {
  const router = useRouter();
  const handleAddusers = () => {
    router.push("/communityFrameFlow");
  };
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
      <Box display={"flex"} justifyContent={"center"} textAlign={"center"}>
        <Button
          onClick={handleAddusers}
          bgColor="#00E276"
          height="45px"
          width={["250px"]}
          btnBorderRadius={["15px"]}
          fontSize="20px"
          iconVisStatus="false"
          color="white"
          _hover={{ bgColor: "#fe6601" }}
        >
          Add users
        </Button>
      </Box>
      <footer>
        <Box className="m-auto text-center py-10">
          <Link href={"/communityFrameFlow"}>
            {" "}
            <Text color={"white"}> Go to Dashboard</Text>
          </Link>
        </Box>
      </footer>
    </Box>
  );
};

export default Payment_Done;
