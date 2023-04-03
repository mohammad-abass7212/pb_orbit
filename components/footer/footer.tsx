/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";

import { PhoneIcon } from "@chakra-ui/icons";

import { MdLocationOn } from "@react-icons/all-files/md/MdLocationOn";

const Footer = () => (
  <Box
    w={["100%", "100%", "100%", "100%", "100%"]}
    as="footer"
    bg="#050017"
    position="relative"
  >
    <Box
      m="auto"
      w={["80%", "80%", "80%", "80%", "80%"]}
      pb={["70px", "70px", "70px", "70px", "70px"]}
      pt={["70px", "70px", "70px", "70px", "70px"]}
    >
      <Image
        src="/utils/Common/logo.png"
        w={["24%", "24%", "16%", "16%", "16%"]}
        mb={2}
      />

      <Grid
        w={["100%", "100%", "100%", "100%", "100%"]}
        templateColumns={{
          lg: "repeat(3, 1fr)",
          sm: "repeat(1, 1fr)",
          md: "repeat(3, 1fr)",
        }}
        gap={1}
      >
        <GridItem w={{ lg: "95%", md: "95%", sm: "95%" }} color={"white"}>
          <Text color="#B4B4B6">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </Text>

          <Text
            fontSize={{ lg: "24px", md: "24px", sm: "24px" }}
            mt={{ lg: "20px", md: "20px", sm: "20px" }}
            mb={{ lg: "20px", md: "20px", sm: "20px" }}
          >
            Payment Accept{" "}
          </Text>
          <Box>
            <Box display={"flex"} alignContent="center" pl="4px">
              <Box
                border={"1px solid #B4B4B6"}
                w={{ lg: "43px", md: "43px", sm: "22px" }}
                h="1px"
                mt={{ lg: "12px", md: "12px", sm: "6px" }}
              ></Box>
              <Image
                src="/utils/Common/paypal.png"
                boxSize={{ lg: "16%", md: "10%", sm: "10%" }}
              />
              <Box
                border={"1px solid #B4B4B6"}
                w={{ lg: "43px", md: "43px", sm: "22px" }}
                h="1px"
                mt={{ lg: "12px", md: "12px", sm: "6px" }}
              ></Box>{" "}
            </Box>
            <Box display={"flex"}>
              <Image
                src="/utils/Common/visa.png"
                boxSize={{ lg: "10%", md: "5%", sm: "5%" }}
              />
              <Image
                src="/utils/Common/master.png"
                boxSize={{ lg: "10%", md: "5%", sm: "5%" }}
              />
              <Image
                src="/utils/Common/discover.png"
                boxSize={{ lg: "10%", md: "5%", sm: "5%" }}
              />
              <Image
                src="/utils/Common/american.png"
                boxSize={{ lg: "10%", md: "5%", sm: "5%" }}
              />
            </Box>
          </Box>
        </GridItem>
        <GridItem
          ml={{ lg: "120px", md: "120px", sm: "0px" }}
          w={{ lg: "120%", md: "120%", sm: "120%" }}
          color={"white"}
          //  border=" 1px solid red"
        >
          <Flex direction={"column"}>
            <Box display={"flex"}>
              <Box>
                <Box display={"flex"}>
                  <PhoneIcon pt="6px" boxSize={4} color="purple" mr="5px" />
                  <Text color="#747174" fontSize="13px" fontWeight={"700"}>
                    Call Us: (210) 123451{" "}
                  </Text>{" "}
                </Box>
                <Text ml="20px" color="#747174" fontSize="13px">
                  (Sat-Thursday)
                </Text>
              </Box>

              <Box ml="25px">
                <Box display={"flex"}>
                  {" "}
                  <MdLocationOn
                    style={{
                      color: "purple",
                      marginTop: "2px",
                      marginRight: "5px",
                    }}
                  />{" "}
                  <Text color="#747174" fontWeight={"700"} fontSize="13px">
                    380 St Kilda Road,{" "}
                  </Text>{" "}
                </Box>
                <Text ml="20px" color="#747174" fontSize="13px">
                  Georgia, U.S
                </Text>
              </Box>
            </Box>
            <Box display={"flex"} mt="10px" mb="10px">
              <Image
                src="/utils/Common/apple-app.png"
                boxSize={["28%","28%","24%","21%","21%"]}
              />

              <Image
                src="/utils/Common/google-app.png"
                boxSize={["28%","28%","24%","21%","21%"]}
                ml="10px"
              />
            </Box>
            {/* CgFacebook */}
            <Box display={"flex"} gap="10px">
              <Box
                bg="white"
                borderRadius="50%"
                boxSize="25px"
                display={"flex"}
                justifyContent="center"
              >
                <a href="https://www.facebook.com/Bigbasketcom/">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/512/3128/3128304.png"
                    alt="insta"
                    w="100%"
                    p="5px"
                    borderRadius="50%"
                  />
                </a>
              </Box>
              <Box
                bg="white"
                borderRadius="50%"
                boxSize="25px"
                display={"flex"}
                justifyContent="center"
              >
                {" "}
                <a href="https://www.instagram.com/bigbasketcom/">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                    alt="insta"
                    w="100%"
                    borderRadius="50%"
                    // h="15px"
                    p="5px"
                  />
                </a>
              </Box>
              <Box
                bg="white"
                borderRadius="50%"
                boxSize="25px"
                display={"flex"}
                justifyContent="center"
              >
                <a href="https://twitter.com/Bigbasket_com">
                  <Image
                    src="https://cdn-icons-png.flaticon.com/128/733/733579.png"
                    alt="insta"
                    w="100%"
                    // h="13px"
                    p="5px"
                  />
                </a>
              </Box>
              <Box
                bg="white"
                borderRadius="50%"
                boxSize="25px"
                display={"flex"}
                justifyContent="center"
              >
                <Image
                  src="https://cdn-icons-png.flaticon.com/128/145/145808.png"
                  alt="insta"
                  // boxSize="10px"
                  // h="13px"
                  w="100%"
                  p="5px"
                />
              </Box>
            </Box>
          </Flex>
        </GridItem>
        <GridItem
          ml={{ lg: "200px", md: "200px", sm: "00px" }}
          // border=" 1px solid red"
          w="45%"
          color="#B4B4B6"
          gap="10px"
        >
          <Text mb={2}>Home</Text>
          <Text mb={2}>About us</Text>
          <Text mb={2}>Terms & Conditions</Text>
          <Text mb={2}>Privacy Polciy</Text>
          <Text mb={2}>Contact Us</Text>
        </GridItem>
      </Grid>
    </Box>

    <Box
      bg="#170d3d"
      height="50px"
      display={"flex"}
      alignItems="center"
      justifyContent={"center"}
    >
      <Text color="#B4B4B6">
        © {new Date().getFullYear()} PBorbit Pvt. Ltd.. All Right Reserved
      </Text>
    </Box>
  </Box>
);
//

export default Footer;
