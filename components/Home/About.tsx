// import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
// import React from "react";
// import { FunctionComponent, useEffect, useRef } from "react";
// import { Flex } from "@chakra-ui/react";
// const About: FunctionComponent = () => {

//   return (
//     <Box
//       justifyContent="space-between"
//       mt="40px"
//       p={["40px", "20px", "50px", "100px", "120px"]}
//       display={["block", "flex", "flex", "flex", "flex"]}
//     >
//       <Box>

//         <Image  src="/utils/Common/about-img.png" alt="pborbit" />
//       </Box>
//       <Box
//         pl={["0px", "0px", "60px", "90px", "190px"]}
//         w={["90%", "50%", "50%", "50%", "50%"]}
//         mt="80px"
//       >
//         <Heading>About PBorbit</Heading>

//         <Heading mt="10px" mb="10px"  fontSize={["10px","15px","17px","18px","18px"]} color="hsl(80deg 8% 72%)"  >
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis augue, tincidunt sed nulla non, suscipit ullamcorper purus. Fusce commodo urna eu lorem hendrerit rhoncus. Aenean mattis dictum justo at pharetra. Fusce eu pellentesque velit. Duis non tristique erat. Nunc sit amet dolor quis urna vulputate lacinia.
//         </Heading>
//         <Flex flexDirection={"column"} gap="10px">
//           <Box display="flex" alignItems="center" gap={"10px"}>
//             {" "}
//             <Image
//               boxSize={["20px", "20px", "20px", "20px", "20px"]}
//               src="/utils/Common/checklist.png"
//               alt="pb"
//             />{" "}
//             <Text className="typewriter" > Court reservations</Text>
//           </Box>
//           <Box display="flex" alignItems="center" gap={"10px"}>
//             {" "}
//             <Image
//               boxSize={["20px"]}
//               src="/utils/Common/checklist.png"
//               alt="pb"
//             />
//             <Text className="typewriter" > Community Manage</Text>
//           </Box>
//           <Box display="flex" alignItems="center" gap={"10px"}>
//             {" "}
//             <Image
//               boxSize={["20px"]}
//               src="/utils/Common/checklist.png"
//               alt="pb"
//             />
//             <Text className="typewriter" > Manage Your Court Easily</Text>
//           </Box>
//           <Box display="flex" alignItems="center" gap={"10px"}>
//             {" "}
//             <Image
//               boxSize={["20px"]}
//               src="/utils/Common/checklist.png"
//               alt="pb"
//             />
//             <Text className="typewriter" > Court reservations</Text>
//           </Box>
//           <Box display="flex" alignItems="center" gap={"10px"}>
//             {" "}
//             <Image
//               boxSize={["20px"]}
//               src="/utils/Common/checklist.png"
//               alt="pb"
//             />
//             <Text className="typewriter" > Install app and get Rewards</Text>
//           </Box>

//           <Box display="flex" alignItems="center" gap={"10px"}>
//             {" "}
//             <Image
//               boxSize={["20px"]}
//               src="/utils/Common/checklist.png"
//               alt="pb"
//             />
//             <Text className="typewriter" > Community Manage</Text>
//           </Box>

//           <Button
//             mt={["10px", "10px", "10px", "10px", "40px"]}
//             bg="#01df74"
//             w={["60%", "55%", "60%", "80%", "60%"]}
//             fontSize={["13px", "16px", "16px", "16px", "16px", "20px"]}
//             h={["40px", "30px", "30px", "40px", "40px"]}
//             borderRadius={["20px", "25px", "25px", "25px", "27px"]}
//             p="25px"
//           >
//             Get Started →
//           </Button>
//         </Flex>
//       </Box>
//     </Box>
//   );
// };
// export default About;
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { FunctionComponent, useEffect, useRef } from "react";
import { Flex } from "@chakra-ui/react";



const About: FunctionComponent = () => {
  return (
    <Flex
      justifyContent="space-between"
      mt="40px"
      p={["40px", "20px", "50px", "100px", "120px"]}
      flexDirection={["column", "column", "column", "row", "row"]}
    >
      <Box mb={["40px", "40px", "40px", "0", "0"]} flexShrink={0}>
        <Image src="/utils/Common/about-img.png" alt="pborbit" />
      </Box>
      <Box
  display="flex"
  flexDirection={["column", "column", "row", "row", "row"]}
  alignItems="center"
  justifyContent="center"
  maxWidth="100%"
>
  <Box
    pl={["0px", "0px", "60px", "90px", "190px"]}
    mt={["40px", "40px", "40px", "80px", "80px"]}
    flexGrow={1}
    maxWidth={["100%", "100%", "100%"]}
    textAlign={["left", "left", "left", "left", "left"]}
  >
    <Heading>About PBorbit</Heading>
    <Text
  mt="10px"
  fontSize={["10px", "15px", "17px", "18px", "18px"]}
  color="hsl(80deg 8% 72%)"
  textAlign="left"
  mx="auto"
>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin felis
      augue, tincidunt sed nulla non, suscipit ullamcorper purus. Fusce
      commodo urna eu lorem hendrerit rhoncus. Aenean mattis dictum justo at
      pharetra. Fusce eu pellentesque velit. Duis non tristique erat. Nunc
      sit amet dolor quis urna vulputate lacinia.
    </Text>
    <Flex flexDirection="column" gap="10px" mt="20px"  justifyContent="flex-start">
      <Box display="flex" alignItems="center" gap="10px">
        <Image
          boxSize={["20px", "20px", "20px", "20px", "20px"]}
          src="/utils/Common/checklist.png"
          alt="pb"
        />
        <Text className="typewriter">Court reservations</Text>
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <Image
          boxSize={["20px"]}
          src="/utils/Common/checklist.png"
          alt="pb"
        />
        <Text className="typewriter">Community Manage</Text>
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <Image
          boxSize={["20px"]}
          src="/utils/Common/checklist.png"
          alt="pb"
        />
        <Text className="typewriter">Manage Your Court Easily</Text>
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <Image
          boxSize={["20px"]}
          src="/utils/Common/checklist.png"
          alt="pb"
        />
        <Text className="typewriter">Court reservations</Text>
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <Image
          boxSize={["20px"]}
          src="/utils/Common/checklist.png"
          alt="pb"
        />
        <Text className="typewriter">Install app and get Rewards</Text>
      </Box>
      <Box display="flex" alignItems="center" gap="10px">
        <Image
          boxSize={["20px"]}
          src="/utils/Common/checklist.png"
          alt="pb"
        />
        <Text className="typewriter">Community Manage</Text>
      </Box>
      <Button
        mt={["10px", "10px", "10px", "10px", "40px"]}
        w={["50%", "53%", "35%", "42%","42%"]} 
        bg="#01df74"
        // maxWidth={["100%", "55%", "60%", "80%","60%"]}
        fontSize={["13px", "16px", "16px", "16px", "20px"]}
        h={["40px", "30px", "30px", "40px", "50px"]}
        borderRadius={["20px", "25px", "25px", "25px", "27px"]}
        alignSelf="center"
        >
        Get Started →
        </Button>
        </Flex>
       </Box>
    </Box>
    </Flex>
   )}
   export default About;