import { Box, Button,  Heading, Image, SlideFade, Text } from '@chakra-ui/react';
import React from 'react';
import { FunctionComponent } from 'react'
const HomePage: FunctionComponent|any = () => {
return (
        <Box   position="relative" pt={["100px","220px","220px","200px","320px"]} w="50%" ml={["80px","80px","80px","80px","105px"]} mb={["0px","0px","0px","190px","175px"]}>
          {/* shp1 */}
          <Image
            
            position="absolute"
            left={["-95px","-108px","-98px","-63px","-74px"]}
            top={["317px","317px","317px","317px","317px"]}
             w={["4","4%","4%","4%","4%"]}
            src="/utils/Common/shp1.png"
            alt="pborbit"
          />
          
          <Image
            
            position="absolute"
            left={["-95px","-108px","-98px","-117px","-170px"]}
            top={["154px","250px","308px","256px","394"]}
             w={["29%","20%","20%","20%","18%"]}
            src="/utils/Common/top_left.png"
            alt="pborbit"
          />
        <Text color={["green","green","green","green","#22c35e"]} fontSize={["15px","15px","17px","17px","17px"]}>
          We are pborbit
        </Text>
        <Heading style={{fontFamily:"Poppins, sans-serif"}} fontSize={["15px","20px","30px","30px","40px"]} pr={["30px","50px","50px","320px","320px"]}>
          Court reservation platform for private community, parks, and HOAs
        </Heading>
        <Text fontSize={["10px","15px","17px","18px","18px"]} color="hsl(80deg 8% 72%)" pr={["0px","338px"]}  wordBreak={"break-word"} >
          Our Activate suite of business apps gives your Lorem ipsum dolor
          sit amet, consectetur.
        </Text>
        <Button
          mt={["10px", "10px", "10px","10px" ,"40px"]}
          bg="#01df74"
          w={["100%", "53%", "35%", "35%","35%"]}
          fontSize={["15px", "16px", "16px", "16px","16px", "20px"]}
          h={["40px", "30px", "30px", "40px","40px"]}
          borderRadius={["20px", "25px", "25px", "25px","27px"]}
          p="25px"

        >
          Get Sarted →
        </Button>
      </Box>
    );
  };
  export default HomePage;
