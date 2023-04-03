import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CustomButton from "../Common/CustomButton";

const Pricing = () => {
  const [ref, inView] = useInView();

  const newLocal = {
    w: "77%",
    position: "absolute",
    bottom: "57px",
    right: "2px",

    zIndex: "-1",
  };

  const NewType = "relative";

  return (
    <Box position={["relative", "relative", "relative"]} zIndex="0" mb="40px">
      <Center mt="40px">
        <Heading>Our Best Pricing</Heading>
      </Center>
      <Center mt="20px">
        <Text
          w={["60%", "65%", "60%", "35%", "35%"]}
          textAlign="center"
          color="#B4B4B6"
        >
          Lorem Ipsum is simply dummy text of the printing and type setting
          industryLorem Ipsum is simply
        </Text>
        {/* <CustomText
          variant={variants.SMALL_HEADING}
          text="Start with signing up or sign in"
        /> */}
      </Center>
      <Center>
        <Flex
          // mt="40px"
          gap="40px"
          //  ml={["50px", "20px", "20px", "80px", "200px"]}
          w={["80%", "90%", "80%", "85%", "60%"]}
          alignItems="center"
          display={["block", "block", "block", "flex", "flex"]}
        >
          <Box w={["100%", "60%", "60%", "80%", "90%"]} m="auto">
            <motion.div
              ref={ref} // attach the ref returned by useInView
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // use the inView boolean to trigger the animation
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <Box
                mb="40px"
                bg="#10023B"
                pb="50px"
                w={["100%", "100%", "100%", "90%", "90%"]}
                mt="40px"
                borderRadius={"10px"}
                position={"relative"}
              >
                <Image
                  position={"absolute"}
                  src="/utils/Common/price-player.png"
                  alt="pb"
                  w="13%"
                  top={["36px", "45px", "35px", "27px", "16px"]}
                  left={["40px", "60px", "80px", "100px", "63px"]}
                />
                <Center
                  bg="#4B3294"
                  borderTopEndRadius={"10px"}
                  borderTopStartRadius={"10px"}
                  mb="10px"
                >
                  <Heading fontSize="40px" p="20px">
                    Player
                  </Heading>
                </Center>

                <Center>
                  <Flex mt="40px">
                    {" "}
                    <Heading fontSize="40px">$12</Heading>{" "}
                    <Text> per annul</Text>{" "}
                  </Flex>
                </Center>
                <Center
                  mb="20px"
                  // mr="60px"
                >
                  <Text color="#B4B4B6" fontSize="10px">
                    of single{" "}
                  </Text>
                </Center>
                <Flex flexDirection="column" gap="20px" alignItems={"center"}>
                  <Box display={"flex"} flexDirection="column" gap="20px">
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      />{" "}
                      <Text fontSize="20px"> Court reservations</Text>
                    </Box>
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      />
                      <Text fontSize="20px"> Community Manage</Text>
                    </Box>
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      />
                      <Text fontSize="20px"> Manage Your Court Easily</Text>
                    </Box>
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      {/* <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      /> */}
                      <AiOutlineCloseCircle color="red" size={22} />
                      <Text fontSize="20px"> Court reservations</Text>
                    </Box>
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      {/* <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      /> */}
                      <AiOutlineCloseCircle color="red" size={22} />
                      <Text fontSize="20px"> Install app and get Rewards</Text>
                    </Box>

                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      {/* <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      /> */}
                      <AiOutlineCloseCircle color="red" size={22} />
                      <Text fontSize="20px"> Community Manage</Text>
                    </Box>
                  </Box>
                  <Link href="#" style={{ textDecoration: "none" }}>
                    <CustomButton
                      p="27px"
                      imageSrc=""
                      text="Get Started →"
                      btnDisabled={false}
                      buttonBgColor="#00E276"
                      customHeight={["50px", "40px", "40px", "40px", "50px"]}
                      widthArray={["170px", "165px", "170px", "200px", "250px"]}
                      btnBorderRadius={["25px", "25px", "25px", "25px", "27px"]}
                      mt={["0px", "-10px", "10px", "-10px", "40px"]}
                      mb={[]}
                      fontSize={[
                        "15px",
                        "16px",
                        "16px",
                        "16px",
                        "16px",
                        "20px",
                      ]}
                      iconVisStatus={false}
                      btnHoverColor={"#ff6900"}
                    />
                  </Link>
                </Flex>
              </Box>
            </motion.div>
          </Box>
          <Box w={["100%", "60%", "60%", "80%", "90%"]} m="auto">
            <motion.div
              ref={ref} // attach the ref returned by useInView
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }} // use the inView boolean to trigger the animation
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 1 }}
            >
              <Box
                bg="#10023B"
                pb="50px"
                w={["100%", "100%", "100%", "90%", "90%"]}
                borderRadius={"10px"}
                position={"relative"}
              >
                <Image
                  position={"absolute"}
                  w="13%"
                  src="/utils/Common/price-player.png"
                  alt="pb"
                  // w="9%"
                  top={["36px", "45px", "35px", "27px", "16px"]}
                  left={["40px", "60px", "80px", "100px", "63px"]}
                />
                <Center
                  bg="#4B3294"
                  borderTopEndRadius={"10px"}
                  borderTopStartRadius={"10px"}
                  mb="10px"
                >
                  <Heading fontSize="40px" p="20px">
                    Player
                  </Heading>
                </Center>

                <Center>
                  <Flex mt="40px">
                    {" "}
                    <Heading fontSize="40px">$12</Heading>{" "}
                    <Text> per annul</Text>{" "}
                  </Flex>
                </Center>
                <Center
                  mb="20px"
                  // mr="60px"
                >
                  <Text color="#B4B4B6" fontSize="10px">
                    of single{" "}
                  </Text>
                </Center>
                <Flex flexDirection="column" gap="20px" alignItems={"center"}>
                  <Box display={"flex"} flexDirection="column" gap="20px">
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      />{" "}
                      <Text fontSize="20px"> Court reservations</Text>
                    </Box>
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      />
                      <Text fontSize="20px"> Community Manage</Text>
                    </Box>
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      />
                      <Text fontSize="20px"> Manage Your Court Easily</Text>
                    </Box>
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      />
                      <Text fontSize="20px"> Court reservations</Text>
                    </Box>
                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      />
                      <Text fontSize="20px"> Install app and get Rewards</Text>
                    </Box>

                    <Box display="flex" alignItems="center" gap={"10px"}>
                      {" "}
                      <Image
                        boxSize="20px"
                        src="/utils/Common/checklist.png"
                        alt="pb"
                      />
                      <Text fontSize="20px"> Community Manage</Text>
                    </Box>
                  </Box>

                  <Link href="#" style={{ textDecoration: "none" }}>
                    <CustomButton
                      p="27px"
                      imageSrc=""
                      text="Get Started →"
                      btnDisabled={false}
                      buttonBgColor="#00E276"
                      customHeight={["50px", "40px", "40px", "40px", "50px"]}
                      widthArray={["170px", "165px", "170px", "200px", "250px"]}
                      btnBorderRadius={["25px", "25px", "25px", "25px", "27px"]}
                      mt={["0px", "-10px", "10px", "-10px", "40px"]}
                      mb={[]}
                      fontSize={[
                        "15px",
                        "16px",
                        "16px",
                        "16px",
                        "16px",
                        "20px",
                      ]}
                      iconVisStatus={false}
                      btnHoverColor={"#ff6900"}
                    />
                  </Link>
                </Flex>
              </Box>
            </motion.div>
          </Box>
        </Flex>
      </Center>

      <Image style={newLocal} src="/utils/Common/price-bg.png" alt="pborbit" />
    </Box>
  );
};
export default Pricing;
