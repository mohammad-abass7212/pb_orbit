import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
import * as React from "react";
import { useState } from "react";

interface ISigninProps {}

const Signin: React.FunctionComponent<ISigninProps> | any = () => {
  const [email,setEmail]= useState("")
  const [password,setPassword]= useState("")
  const handleSubmit=()=>{
    
    const payload={
      email,
      password
    }
    console.log(payload)
  }
  return (
    <Flex
      bg="#050017"
      pt={["166px", "200px", "200px", "200px", "100px"]}
      pb={["110px", "400px", "400px", "40px", "140px"]}
      position="relative"
      flexDirection={"column"}
      alignItems={"center"}
      gap="10px"
    >
      <Image
        w={["80%", "41%", "41%", "41%", "41%"]}
        position="absolute"
        left={"0px"}
        bottom={["14px", "0px"]}
        src="/utils/Common/bg.png"
        alt=""
      />
      {/* <Flex border={'1px solid red'} flexDirection={'column'} alignItems={'center'} gap="10px"> */}
      <Image width="150px" src="/utils/common/logo.png" alt="pborbit_logo" />
      <Heading color={"white"}>Welcome Back</Heading>
      <Text color={"white"}>Start with signing up or sign in</Text>

      <Box
        display={"flex"}
        border={"1px solid white"}
        borderRadius="5px"
        w={["60%", "50%", "45%", "22%"]}
        pl="10px"
      >
        {" "}
        <Image src="/utils/common/attherate.svg" alt="pborbit_logo" />
        <Input variant='unstyled' p="10px" color="white" border={"none"} autoComplete="email" required  placeholder="Enter Address" 
        onChange={(e)=>setEmail(e.target.value)} value={email} />
      </Box>

      <Box
        display={"flex"}
        border={"1px solid white"}
        borderRadius="5px"
        w={["60%", "50%", "45%", "22%"]}
        pl="10px"
      >
        {" "}
        <Image src="/utils/common/password.svg" alt="pborbit_logo" />
        <Input 
        variant='unstyled' p="10px" color="white" border={"none"}  type="password" autoComplete="new-password" required placeholder="password"
         onChange={(e)=>setPassword(e.target.value)} value={password} />
      </Box>
      <Box
        w={["60%", "50%", "45%", "22%"]}
        fontSize={["8px", "10px", "10px", "10px"]}
       
        display="flex"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Checkbox color="white" size="sm">
          Remember me
        </Checkbox>
        <Text color="white" fontSize={["8px", "12px", "12px", "12px"]}>
          Forgot Password ?
        </Text>
      </Box>

      <Button
        mt="15px"
        bg="#00E276"
        color="white"
        w={["60%", "50%", "45%", "22%"]}
        onClick={()=>handleSubmit()}
      >
        Login
      </Button>
      <Text mt="119px" color="white">
      <Link href="/signup">
        Don’t have an account? SignUp
      </Link>
      </Text>
    </Flex>
  );
};

export default Signin;
