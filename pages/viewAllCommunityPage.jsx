import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ViewAllCommunity from "../components/AdminFlow/viewAllCommunity";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Searchbar from "../components/AdminFlow/Searchbar";
import { useRef } from "react";
function viewAllCommunityPage() {
  return (
    <MainLayout>
      <VStack
        position={"fixed"}
        left={"100px"}
        gap={5}
        alignItems={"left"}
        float="left"
        display="block"
        pb={"100px"}
      >
        <Box>
          <Image
            mt={"5"}
            mb={"2"}
            width={"30%"}
            src="/utils/Common/logo.png"
            alt="pborbit_logo"
          />
        </Box>
        <Box>
          <Text color={"white"} fontSize={"25px"}>
            Communities
          </Text>
        </Box>
        <Box
          position={"fixed"}
          border={"1px solid #251A4B"}
          width={"85%"}
          margin={"auto"}
          zIndex={1}
        ></Box>
      </VStack>
      <Box position={"fixed"} left={"100px"} top={"140px"} zIndex={1}>
        <Searchbar />
      </Box>

      <VStack justifyContent={"space-between"}>
        <Box
          marginTop={"160px"}
          height={"calc(100vh )"}
          overflow={"scroll"}
          scrollBehavior={"smooth"}
          css={`
            ::-webkit-scrollbar {
              display: none;
            }

            -ms-overflow-style: none;
            scrollbar-width: none;
          `}
        >
          <ViewAllCommunity />
        </Box>
      </VStack>
    </MainLayout>
  );
}

export default viewAllCommunityPage;
