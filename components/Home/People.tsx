// import React from 'react';
import { FunctionComponent } from 'react'
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
// import { NextScript } from 'next/document';
const People: FunctionComponent = () => {


  return (
    <Box  mt="40px">

      <Center >

        <Heading size={"xl"} >What people say about PBorbot </Heading>
      </Center>
      <Center mt="20px">
        {" "}
        <Text w={["90%","35%"]} textAlign="center" color="#B4B4B6" m="20px">
          Lorem Ipsum is simply dummy text of the printing and type
          setting industryLorem Ipsum is simply
        </Text>{" "}
      </Center>
      <Box  display={[ "block", "flex", "flex", "flex" ,"flex"]} w="80%" m="auto" gap="25px">


        <Box w={["90%","35%"]} bgColor="#0E343D">
          <Center mt="20px">

            <Image
              boxSize="60px"
              src="/utils/Common/quote.png"
              alt="pb"
            />
          </Center>
          <Center>

            <Text color="#B4B4B6" textAlign={"center"} p="20px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quaerat, debitis, reiciendis sed consequatur sit,
              ullam aut porro qui atque ea iure ipsa modi quasi minus fugiat nobis enim neque!</Text>
          </Center>


          <Box borderTop={'1px solid #5F5F60'} w="90%" m="auto" ></Box>
          <Center mb="80px">
            <Flex alignItems="center" w="80%" m="auto" gap="5">
              <Box mt="5px" w="15%" h="40px" borderRadius="50%" bgColor={"white"}></Box>
              <Box mt="5" w="70%" h="50px"  >
                <Text>Mariella Wingniton</Text>
                <Text color="#B4B4B6">Los Angeles CA</Text>
              </Box>

            </Flex>
          </Center>
        </Box>

        <Box w={["90%","35%","35%","35%","35%"]} bgColor="#0E343D">
          <Center mt="20px">

            <Image
              boxSize="60px"
              src="/utils/Common/quote.png"
              alt="pb"
            />
          </Center>
          <Center>

            <Text color="#B4B4B6" textAlign={"center"} p="20px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quaerat, debitis, reiciendis sed consequatur sit,
              ullam aut porro qui atque ea iure ipsa modi quasi minus fugiat nobis enim neque!</Text>
          </Center>


          <Box borderTop={'1px solid #5F5F60'} w="90%" m="auto" ></Box>
          <Center mb="80px">
            <Flex alignItems="center" w="80%" m="auto" gap="5">
              <Box mt="5" w="15%" h="40px" borderRadius="50%" bgColor={"white"}></Box>
              <Box mt="5" w="70%" h="50px"  >
                <Text>Mariella Wingniton</Text>
                <Text color="#B4B4B6">Los Angeles CA</Text>
              </Box>

            </Flex>
          </Center>
        </Box>

        <Box w={["90%","35%","35%","35%","35%"]} bgColor="#0E343D">
          <Center mt="20px">

            <Image
              boxSize="60px"
              src="/utils/Common/quote.png"
              alt="pb"
            />
          </Center>
          <Center>

            <Text color="#B4B4B6" textAlign={"center"} p="20px">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quaerat, debitis, reiciendis sed consequatur sit,
              ullam aut porro qui atque ea iure ipsa modi quasi minus fugiat nobis enim neque!</Text>
          </Center>


          <Box borderTop={'1px solid #5F5F60'} w="90%" m="auto" ></Box>
          <Center mb="80px">
            <Flex alignItems="center" w="80%" m="auto" gap="5">
              <Box mt="5" w="15%" h="40px" borderRadius="50%" bgColor={"white"}></Box>
              <Box mt="5" w="70%" h="50px"  >
                <Text>Mariella Wingniton</Text>
                <Text color="#B4B4B6">Los Angeles CA</Text>
              </Box>

            </Flex>
          </Center>
        </Box>



      </Box>
    </Box>
  );
};
export default People;
