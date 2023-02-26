import * as React from "react";
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
import axios from "axios";
interface ISignupProps {}

const Signup: React.FunctionComponent<ISignupProps> | any = () => {
  const [email,setEmail]= React.useState("")
  const [username,setUsername]= React.useState("")

  const [password,setPassword]= React.useState("")
  const [mobile,setMobile]= React.useState("")
  const [countryCode,setCountryCode]= React.useState("")


  const [confirmPassword,setConfirmPassword]= React.useState("")
  const [passwordType, setPasswordType] = React.useState("password");
  const [confirmPasswordType, setConfirmPasswordType] = React.useState("password");
  const handleSubmit = async (event:any) => {
    event.preventDefault(); 
    try {

      const response = await axios.post("http://34.148.83.101:5000/player/signup",{
        username: "surendra1231",
        email: "surendr2ay@gmail.com",
        password: "surendra1231",
        country_code: "+91",
        mobile_number: "857427788",
        social_login: false
      });
      console.log(response.data);
      // show success message to the user
    } catch (error) {
      console.error(error);
      // show error message to the user
    }
  };

  const togglePassword = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const toggleConfirmPassword = () => {
    setConfirmPasswordType(confirmPasswordType === "password" ? "text" : "password");
  };
  return (
    <Box
      bg="#050017"
      pt={["166px", "200px", "200px", "200px", "100px"]}
      pb={["110px", "400px", "400px", "40px", "120px"]}
      position="relative"
    >
      <Image
        w={["80%", "41%", "41%", "41%", "41%"]}
        position="absolute"
        bottom={["14px", "0px"]}
        src="/utils/Common/bg.png"
        alt=""
      />
      <Flex flexDirection={"column"} alignItems={"center"} gap="20px">
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
          <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
          <Input variant='unstyled' p="10px" color="white" border={"none"} placeholder="Enter Address" onChange={(e) => setEmail(e.target.value)} value={email} />
        </Box>

        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w={["60%", "50%", "45%", "22%"]}
          pl="10px"
        >
          {" "}
          <Image src="/utils/common/attherate.svg" alt="pborbit_logo" />
          <Input variant='unstyled' p="10px" color="white" border={"none"} placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={username} />
        </Box>


        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w={["60%", "50%", "45%", "22%"]}
          pl="10px"
          pr="10px"
        >
          {" "}
          <Image src="/utils/common/password.svg" alt="pborbit_logo" />
          <Input type={passwordType}  variant='unstyled' p="10px" color="white" border={"none"} placeholder="Password"  onChange={(e)=>setPassword(e.target.value)} value={password} />
          <Image src="/utils/common/hide-2.svg" alt="pborbit_logo" onClick={togglePassword}/>
        </Box>
        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w={["60%", "50%", "45%", "22%"]}
          pl="10px"
          pr="10px"
        >
          {" "}
          <Image src="/utils/common/password.svg" alt="pborbit_logo" />
          <Input variant='unstyled' p="10px" color="white" border={"none"} placeholder="Confirm Password"  onChange={(e)=>setConfirmPassword(e.target.value)} value={confirmPassword} type={confirmPasswordType}  />
          <Image src="/utils/common/hide-2.svg" alt="pborbit_logo" onClick={toggleConfirmPassword} />
        </Box>

        <Button
          mt="15px"
          bg="#00E276"
          color="white"
          w={["60%", "50%", "45%", "22%"]}
          onClick={()=>handleSubmit(event)}
        >
          Sign Up
        </Button>
<Link href="/signin">
        <Text mt="45px" color="white">
          Already have an account? Signin
        </Text>
</Link>

        {/* second page */}
      </Flex>
    </Box>
  );
};

export default Signup;
