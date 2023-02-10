import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react';
// import Image from 'next/image';
import React from 'react';
import { FunctionComponent } from 'react'
const App_install: FunctionComponent = () => {
    return (
        <Flex w="90%" m='auto' color='white' mt="40px"  display={{ lg: "flex", md: "flex", sm: "block" }}>
        <Box lineHeight={'7'} w={["90%" ,"40%" ,"40%" , "40%"]} m='auto' color='white' >
          <Heading style={{  fontWeight: 'bold', margin: "10px" }}
          fontSize={["25px", "20px","20px","20px"]}
          >This App is available on your smart phone</Heading>
          <Text style={{ margin: 10 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium aliquam excepturi eligendi 
          dolorum illum voluptate obcaecati tenetur officiis alias a!</Text>
          <Flex m={["0px","10px"]} gap="25px" lineHeight={'10'}>
            <Image w={["50%","100%","100%","100%"]}  src="/utils/common/apple-app.png"  alt="pb"/>
            <Image w={["50%","100%","100%","100%"]} src="/utils/common/google-app.png" alt="pb" />
          </Flex>

          <Flex mt="20px" >
            <Box w="90%" height={'35px'} borderBottomStartRadius="50px" borderTopStartRadius="50px" bgColor={'white'} color="black" pl="10px"> Enter Your Name</Box>
            <Box w="10%" height="35px" borderBottomEndRadius="50%" borderTopEndRadius={'50%'} bgColor={'green.600'} ></Box>
          </Flex>
        </Box>
        <Box w="55%" m='auto' color='white' >
          <Image w="100%" mb="40px" mt="40px" src="/utils/common/app-install.png" alt="pb" />
        </Box>
      </Flex>
    );
  };
  export default App_install;
  