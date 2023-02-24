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
  import styled from 'styled-components';
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
            pt="4"
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
                mb={2}
                alt="pb"
              />
            </Box>
            <Flex
              alignItems={"center"}
              p="10px"
              w="60%"
              justifyContent={"space-between"}
              display={["none", "none", "none", "flex", "flex"]}
              bg="#050017"
              borderRadius={"6px"}
            >
              <Flex pl="36px" gap="60px">
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
              <Link href="/login">
                <Button className="my-button"
                  colorScheme="whatsapp"
                  w="100%"
                  fontSize={"13px"}
                  h="30px"
                  borderRadius={"20px"}
                >
                  {" "}
                  Login/Signup{" "}
                </Button>
              </Link>
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
                    <MenuItem className="menu-item " color={"red"}>Home</MenuItem>
                  </Link>
                  <Link href="/Features">
                    <MenuItem className="menu-item " color={"red"}>Features</MenuItem>
                  </Link>
                  <Link href="/Pricing">
                    <MenuItem className="menu-item " color={"red"}>Pricing</MenuItem>
                  </Link>
                  <Link href="/Contactus">
                  <MenuItem className="menu-item " color={"red"}>Contact Us</MenuItem>
                </Link>
                <Link href="/login">
                  <MenuItem color={"red"}>
                    <Button
                      colorScheme="whatsapp"
                      w="100%"
                      fontSize={"13px"}
                      h="30px"
                      borderRadius={"20px"}
                    >
                      Login/Signup
                    </Button>
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

