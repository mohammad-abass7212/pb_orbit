import {
  Box,
  Flex,
  Heading,
  Image,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import CustomButton from "../../components/CustomButton";

const PaymentPageComponent = () => {
  const router = useRouter();
  const toast = useToast();
  const handlePayment = () => {
    router.push("/freshUserFlow/paymentSuccess");
    toast({
      description: "Payment Sucess!",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };
  return (
    <Box>
      <Box
        className="flex flex-col justify-center py-10"
        style={{ width: "700px", margin: "auto" }}
        mt={-10}
        gap={5}
      >
        <Box>
          <Heading color={"white"} className="font-bold text-4xl text-center">
            $400.00
          </Heading>
        </Box>
        <Box
          borderRadius={"15px"}
          width={"60%"}
          bgColor={"#1f192f"}
          className="m-auto"
        >
          <Flex>
            <Image
              pl={10}
              src="/utils/Common/notifyIcon.svg"
              alt="notifiIcon"
            />
            <Text
              color={"white"}
              className="text-center bg-[#58526d] text-sm rounded-lg p-3"
            >
              Your 200 Members Fess and $10 per court
            </Text>
          </Flex>
        </Box>
        <Box mt={"15px"} className="sm:px-60 w-[100%] ">
          <Heading fontSize={"15px"} color={"white"} className="font-bold ">
            Select Your Method
          </Heading>
          <Box className="flex gap-10 justify-between">
            <Box
              className="hover:bg-[#FF6600] p-5 rounded-lg m-auto w-1/3 "
              _hover={{ bgColor: "#fe6601" }}
              width="170px"
            >
              <Image
                _hover={{ bgColor: "#fe6601" }}
                margin={"auto"}
                zIndex={1}
                width={"80px"}
                h={"80px"}
                className="m-auto"
                src="/utils/common/Group 17932.svg"
                alt="image"
              />
            </Box>
            <Box
              width="170px"
              _hover={{ bgColor: "#fe6601" }}
              className="hover:bg-[#FF6600] p-5 rounded-lg bg-white m-auto w-1/3 "
            >
              {" "}
              <Image
                _hover={{ bgColor: "#fe6601" }}
                zIndex={1}
                width={"150px"}
                h={"55px"}
                className="m-auto"
                src="/utils/common/Group 833.svg"
                alt="imageIcon"
              />{" "}
            </Box>
            <Box
              _hover={{ bgColor: "#fe6601" }}
              className="hover:bg-[#FF6600] p-5 rounded-lg bg-white m-auto w-1/3"
            >
              <Image
                _hover={{ bgColor: "#fe6601" }}
                zIndex={1}
                width={"120px"}
                h={"55px"}
                className="m-auto"
                src="/utils/common/Vector.svg"
                alt=""
              />{" "}
            </Box>
          </Box>

          <Box
            color={"white"}
            className="bg-white text-black px-4 py-10 flex flex-col gap-4"
          >
            <Heading>Enter your payment details</Heading>

            <Box className="border-#DFDFDF border-2 px-10 py-2 rounded-lg">
              <lebel htmlFor="">Card Holder Name</lebel>
              <br />
              <Input
                type="text"
                placeholder="Card Holder Name"
                className="outline-none  "
              />
            </Box>
            <Box className="border-#DFDFDF border-2 px-10 rounded-lg py-2">
              <label htmlFor="">Card Number</label>
              <br />
              <Input
                type="text"
                placeholder="xxxx -  xxxx -  xxxx - xxxx"
                className="outline-none  "
              />
            </Box>
            <Box className="border-#DFDFDF border-2 flex px-10 py-2 rounded-lg">
              <Box className="w-1/2">
                <label htmlFor="">Expiry Date</label>
                <br />
                <Input
                  type="text"
                  placeholder="MM/YY"
                  className="outline-none  "
                />
              </Box>
              <Box className="w-1/2">
                <label htmlFor="">Cvv</label>
                <br />
                <Input
                  type="tel"
                  placeholder="xxx"
                  className="outline-none w-full"
                />
              </Box>
            </Box>
            <Box className="border-#DFDFDF border-2 flex gap-4 p-3 text-white rounded-lg">
              <Box className="w-1/2 m-auto text-black">
                {" "}
                <Heading
                  color={"white"}
                  className="font-bold sm:text-4xl text-center"
                >
                  $400.00
                </Heading>{" "}
              </Box>{" "}
              <Box className="w-1/2 m-auto">
                {" "}
                <CustomButton
                  onClick={handlePayment}
                  text={"Pay Now"}
                  btnDisabled={false}
                  buttonBgColor={"#00E276"}
                  customHeight={["50px"]}
                  widthArray={["250px"]}
                  btnBorderRadius={"15px"}
                  iconVisStatus={false}
                  color={"white"}
                  //  spinner={}
                  className="bg-[#00E276] p-3 rounded-lg sm:px-28"
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PaymentPageComponent;
