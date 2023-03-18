import React, { useEffect } from "react";
import { useRef } from "react";
import gsap, { Power3 } from "gsap";
import Link from "next/link";
import {
  Box,
  Flex,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import styled from "styled-components";
import CustomButton from "../Common/CustomButton";
const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  position: relative;
  transition: all 0.25s ease-out;

  &:before {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    width: 0;
    height: 1.7px;
    background-color: #ff6b00;
    transition: all 0.25s ease-out;
  }

  &:hover:before {
    width: 100%;
  }
`;

const Navbar = () => {
  const titleRef = useRef(null);
  const listItemsRef = useRef(null);

  useEffect(() => {
    if (titleRef.current && listItemsRef.current) {
      const tl = gsap.timeline();
      tl.from(
        (titleRef.current as HTMLDivElement).querySelectorAll("span>span"),
        {
          duration: 0.75,
          y: 150,
          autoAlpha: 0,
          ease: Power3.easeOut,
          stagger: 1.5,
        }
      ).from(
        listItemsRef.current,
        {
          duration: 0.75,
          x: 300,
          autoAlpha: 0,
          ease: "elastic.out(1, 1)",
          stagger: {
            each: 0.75,
            amount: 0.5,
          },
        },
        "+=0.25"
      );
    }
  }, [listItemsRef, titleRef]);
  return (
    <>
      <Box position="fixed" w="100%" zIndex="40" className="">
        <Flex
          w={["100%", "90%", "100%", "90%", "90%"]}
          alignItems={"center"}
          p={10}
          m="auto"
          color="white"
          justifyContent="space-evenly"
          position="relative"
        >
          <Box
            w={["30%", "40%", "40%", "40%", "40%"]}
            mr={["100px", "0px", "0px", "0px", "0px"]}
          >
            <Image
              src="/utils/Common/logo.png"
              w={["100%", "24%", "24%", "24%", "24%"]}
              ml={{ md: "-36%", sm: "-45%", lg: "-8%", xl: "-4%" }}
              alt="pb"
            />
          </Box>
          <Flex
            alignItems={"center"}
            p="10px"
            w="58%"
            justifyContent={"space-between"}
            display={["none", "none", "none", "flex", "flex"]}
            bg="#050017"
            borderRadius={"6px"}
          >
            <Flex pl="36px" gap="40px" letterSpacing={1} fontWeight={500}>
              <StyledLink href="/">
                <h1>Home</h1>
              </StyledLink>
              <StyledLink href="/Features">
                <h1>Features</h1>
              </StyledLink>
              <StyledLink href="/Pricing">
                <h1>Pricing</h1>
              </StyledLink>
              <StyledLink href="/Contactus">
                <h1>Contact Us</h1>
              </StyledLink>
            </Flex>
            <Box>
              <Link href="/authFlow/ChooseSignup">
                <CustomButton
                  imageSrc={""}
                  text="Login/Signup"
                  onClick={() => console.log("Button clicked!")}
                  btnDisabled={false}
                  buttonBgColor="#00E276"
                  customHeight={["40px"]}
                  widthArray={["190px"]}
                  btnBorderRadius={["20px"]}
                  mt={["auto"]}
                  mb={["auto"]}
                  fontSize={["18px"]}
                  iconVisStatus={false}
                  btnHoverColor={"#ff6900"}
                />
              </Link>
            </Box>
          </Flex>

          {/* menubar */}

          <Box display={["block", "block", "block", "none", "none"]}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon />}
                bg="transparent"
                _hover={{ bg: "transparent" }}
              />
              <MenuList>
                <Link href="/">
                  <MenuItem className="menu-item " color={"red"}>
                    Home
                  </MenuItem>
                </Link>
                <Link href="/Features">
                  <MenuItem className="menu-item " color={"red"}>
                    Features
                  </MenuItem>
                </Link>
                <Link href="/Pricing">
                  <MenuItem className="menu-item " color={"red"}>
                    Pricing
                  </MenuItem>
                </Link>
                <Link href="/Contactus">
                  <MenuItem className="menu-item " color={"red"}>
                    Contact Us
                  </MenuItem>
                </Link>
                <Link href="/login">
                  <MenuItem color={"red"}>
                    {/* <Button
                      colorScheme="whatsapp"
                      w="100%"
                      fontSize={"13px"}
                      h="30px"
                      borderRadius={"20px"}
                    >
                      Login/Signup
                    </Button> */}
                    <Link href={"/authFlow/ChooseSignup"}>
                      
                    
                    <CustomButton
                      imageSrc="/create_community.svg"
                      text="Login/Signup"
                      onClick={() => console.log("Button clicked!")}
                      size="lg"
                      btnDisabled={false}
                      buttonBgColor="#00E276"
                      customHeight={["40px", "30px", "30px", "40px", "50px"]}
                      widthArray={["70%", "30%", "35%", "70%", "70%"]}
                      btnBorderRadius={["20px", "25px", "25px", "25px", "27px"]}
                      mt={["10px", "10px", "10px", "10px", "40px"]}
                      mb={["30px", "10px", "10px", "40px", "40px"]}
                      fontSize={["13px", "16px", "16px", "16px", "20px"]}
                      iconVisStatus={false} // this is hard coded value
                      btnHoverColor={"#ff6900"}
                    />
                    </Link>
                  </MenuItem>
                </Link>
              </MenuList>
            </Menu>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
