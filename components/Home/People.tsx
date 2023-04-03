// import React from 'react';
import { FunctionComponent } from 'react'
import { Box, Center, Flex, Heading, Image, Text } from '@chakra-ui/react';
// import { NextScript } from 'next/document';
const People: FunctionComponent = () => {


  return (
    <Box  mt="40px"  position="relative" zIndex="2" >
 <Image
 position ="absolute"
 top={["202px","102px","50px","10px","-100px"]}
 zIndex="-1" 
 left={["-11px","0px","0px","-27px","-0px"]}
              w="16%"
              src="/utils/Common/bsi1.png"
              alt="pb"
            />
      <Center >

        <Heading  w={["100%","50%","50%","54%","54%"]} textAlign="center" size={"xl"} >What people say about PBorbot </Heading>
      </Center>
      <Center mt="20px">
        {" "}
        <Text  w={["100%","27%","27%","37%","27%"]} textAlign="center" color="#B4B4B6" m="20px">
          Lorem Ipsum is simply dummy text of the printing and type
          setting industryLorem Ipsum is simply
        </Text>{" "}
      </Center>
      <Box  display={[ "block", "block", "block", "flex" ,"flex"]} w="75%" m="auto" gap="25px">
      <Box w={["100%","60%","60%","35%","35%"]} m="auto" >

        <Box w="100%" pt="40px" pb="40px" mb="100px" 
        //  _hover={{ bg: '#10023b',color:"black",transform:"scale(1.1)"  }}  
         bgColor="#0E343D">
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
          <Center w="80%" m="auto" >
            <Flex alignItems="center" w="80%" m="auto" gap="5">
              <Box mt="5px" w="40px" h="40px" borderRadius="50%" bgColor={"white"}>
                 <Image borderRadius="50%" w="100%" 
                 src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt='av' /> </Box>
              <Box mt="5" w="70%" h="50px"  >
                <Text fontSize={["10px","15px","15px","15px","15px"]} >Mariella Wingniton</Text>
                <Text color="#B4B4B6">Los Angeles CA</Text>
              </Box>

            </Flex>
          </Center>
          </Box>
        </Box>
        <Box w={["100%","60%","60%","35%","35%"]} m="auto" >
        <Box w="100%"  pt="40px" pb="40px" mb="100px"     bgColor="#0E343D">
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
          <Center w="80%" m="auto" >
            <Flex alignItems="center" w="80%" m="auto" gap="5">
              <Box mt="5" w="40px" h="40px" borderRadius="50%" bgColor={"white"}> <Image borderRadius="50%" w="100%" 
                 src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt='av' /></Box>
              <Box mt="5" w="70%" h="50px"  >
                <Text fontSize={["10px","15px","15px","15px","15px"]} >Mariella Wingniton</Text>
                <Text color="#B4B4B6">Los Angeles CA</Text>
              </Box>

            </Flex>
          </Center>
          </Box>
        </Box>
<Box w={["100%","60%","60%","35%","35%"]} m="auto" >
        <Box w="100%" pt="40px" pb="40px" mb="100px"   bgColor="#0E343D">
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
          <Center  w="80%" m="auto">
            <Flex alignItems="center" w="80%" m="auto" gap="5">
              <Box mt="5" w="40px" h="40px" borderRadius="50%" bgColor={"white"}> <Image borderRadius="50%" w="100%" 
                 src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-users-icon-png-image_856952.jpg" alt='av' /></Box>
              <Box mt="5" w="70%" h="50px"  >
                <Text  fontSize={["10px","15px","15px","15px","15px"]} >Mariella Wingniton</Text>
                <Text color="#B4B4B6">Los Angeles CA</Text>
              </Box>
            </Flex>
          </Center>
        </Box>

        </Box>

      </Box>
    </Box>
  );
};
export default People;
