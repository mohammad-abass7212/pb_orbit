import { Box, Button, Center, Flex, Image, Text } from "@chakra-ui/react";
import * as React from "react";
import Link from "next/link";


interface IAppProps {}

const Login: React.FunctionComponent<IAppProps> | any = () => {
  return (
    <Box bg="#050017" pt={["236px","260px","450px","60px","100px" ]}pb={["170px","400px","400px","40px","40px"]} position="relative" >
        <Image w={["80%","41%","41%","41%","41%" ]}position="absolute" bottom={["14px","0px" ]} src="/utils/Common/bg.png" alt="" />
      <Flex flexDirection={"column"} alignItems="center" gap={"20px"}>
        <Box w={["40%","40%","40%","30%","20%" ]} mb={["73px","73px","73px","40px","54px"]} >
      {/* <Spin> */}

        <Image w={["100%","100%","100%","100%","100%" ]} mb={["20px","20px","20px","20px" ,"20px"]} src="/utils/Common/logo.png" alt="" />
        {/* </Spin> */}
        </Box>
        <Flex
        w={["266px","366px","366px","366px","366px" ]}
        alignItems="center"
        bg=" #1ED760"
        gap={[ "10px", "10px", "10px", "10px", "10px"]}
        h={[ "50px","60px","60px","60px", "60px"]}
        color={"white"}
        borderRadius={"10px"}
        >
          <Box w={["29.5px","27.5px","27.5px","27.5px"]} ml={["51px","51px","51px","61px","61px"]} >
            <Image  w={["100%","100%","100%","100%","100%" ]}  src="/utils/Common/user.svg" alt="" />{" "}
          </Box>
       {" "}
          <Text
           
           fontSize={["15px", "20px","20px", "20px", "20px"]}
            
           w={["236.51px",'236.51px',"236.51px",'236.51px',"236.51px"]}
          >
        <Link href="/signup">
            Signup as Player
        </Link>
          </Text>{" "}
        </Flex>
        <Box color={"white"}>OR</Box>
        <Flex
           w={["266px","366px","366px","366px","366px" ]}
           alignItems="center"
           bg=" #1ED760"
           gap={[ "10px", "10px", "10px", "10px", "10px"]}
           h={[ "50px","60px","60px","60px", "60px"]}
           color={"white"}
           borderRadius={"10px"}
        >  
          <Box w={["29.5px","27.5px","27.5px","35.5px"]} ml={["51px","51px","51px","61px","61px"]}>
            {" "}
            <Image w={["100%","100%","100%","100%","100%" ]}  src="/utils/Common/user2.svg" alt="" />
          </Box>{" "}
          <Text
            fontSize={["15px", "20px","20px", "20px", "20px"]}
            
            w={["236.51px",'236.51px',"236.51px",'236.51px',"236.51px"]}
          >
          <Link href="/signup">
            Signup as HOA Admin
          </Link> 
          </Text>
        </Flex>
       
         

        <Image   src="/utils/Common/play-player.png" alt="" />
       
      
        <Link href="/signin">

        <Text color="white">Already have an account? Signin</Text>
        </Link>
      </Flex>
    </Box>
  );
};

export default Login;
