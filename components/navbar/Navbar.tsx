import React from "react";
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
  Button
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

// const Navbar = () => {
import { FunctionComponent } from "react";

const newLocal_2 = <MenuButton
  as={IconButton}
  aria-label="Options"
  icon={<HamburgerIcon />}
  // variant="outline"
  bg="transparent"
  _hover={{ bg:"transparent" }} 
  />;
const Navbar: FunctionComponent =()=>{
  const newLocal_1 = newLocal_2;
  const newLocal= newLocal_1;

return (
    <Box position="fixed" w="100%" zIndex="40" >
      <Flex
        w={[ "100%", "90%","100%", "90%", "90%"]}
        alignItems={"center"}
        pt="4"
        m="auto"
        color="white"
        justifyContent="space-evenly"
        position="relative"
      >
        
        <Box w={["30%","40%","40%","40%","40%"]} mr={["100px","0px","0px","0px","0px"]} >
          <Image
            src="/utils/Common/logo.png"
            w={[ "100%", "24%", "24%","24%", "24%"  ]}
            mb={2}
            alt="pb"
          />
        </Box>
        <Flex
        alignItems={"center"}
        p="10px"
          w="60%"
          justifyContent={"space-between"}
          display={["none","none","none","flex","flex"]}
          bg="#050017"
          borderRadius={"6px"}
        >
            <Flex pl="36px"  gap="60px">
          <Link href="/">
            <h1>Home</h1>
          </Link>
          <Link href="/Features">
            <h1>Features</h1>
          </Link>
          <Link href="/Pricing">
            <h1>Pricing</h1>
          </Link>
          <Link href="/Contactus">
            <h1>Contact Us</h1>
          </Link>
          </Flex>
          <Link href="/login">
          <Button
          
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

        <Box display={["block", "block","block", "none","none" ]}>
          <Menu>
            {newLocal}
            <MenuList>
              <MenuItem color={"red"}>Home</MenuItem>
              <MenuItem color={"red"}>Features</MenuItem>
              <MenuItem color={"red"}>Pricing</MenuItem>
              <MenuItem color={"red"}>Contact Us</MenuItem>
              <MenuItem color={"red"}><Link href="/login">
          <Button
          
          colorScheme="whatsapp"
          w="100%"
          fontSize={"13px"}
          h="30px"
          borderRadius={"20px"}
          >
          {" "}
          Login/Signup{" "}
          </Button>
          </Link></MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
};
export default Navbar;
