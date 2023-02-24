import { Box, Center, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
// import Image from 'next/image';
import React from 'react';
import { FunctionComponent } from 'react'
const Why_choose: FunctionComponent = () => {
    return (
    
        <Box 
        pl={["40px" ,"250px" ,"300px","200px","300px"]}
         pr={[ "50px", "50px","50px", "50px", "50px"]}
          mt="80px"  display={[ "block", "flex", "flex", "flex", "flex" ]} flexDirection={["column","column","row","row","row"]} alignItems="center" >
        <Box>

          <Image src="/utils/Common/why-img.png" alt="pb" />
        </Box>
<Box>
          {" "}
          <Heading  mt="40px" mb="40px">
            Why Choose PBorbit
          </Heading>
          <Text pt="10px" w={[ "90%","60%","60%","60%","63%"]} color="#B4B4B6" mb="20px">
            Lorem Ipsum is simply dummy text of the printing and type
            setting industryLorem Ipsum is simply
          </Text>
         
          <Grid
            templateColumns="repeat(2, 1fr)"
            templateRows="repeat(2, 1fr)"
            w="75%"
            gap={3}
          >
            <GridItem>
              <Box>
                {" "}
                <Heading color="#5A1E70">500+</Heading>
                <Text>Active Player</Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10">
              {" "}
              <Heading color="#BB0DD2">250+</Heading>
              <Text>Current Community</Text>
            </GridItem>
            <GridItem>
              {" "}
              <Box>
                <Heading color="teal">100+</Heading>
                <Text> Download Done</Text>
              </Box>
            </GridItem>
            <GridItem w="100%" h="10">
              <Heading color="#EE8906"> 300+</Heading>
              <Text>5 Start Rating</Text>
            </GridItem>
          </Grid>
        </Box>
      </Box>
      
    );
  };
  export default Why_choose;
  