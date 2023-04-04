import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import ViewAllCommunity from "../components/AdminFlow/viewAllCommunity";
import { Box, Button, Flex, Image, Text, VStack } from "@chakra-ui/react";
import Searchbar from "../components/AdminFlow/Searchbar";
import { useRef } from "react";
import Link from "next/link";
const viewAllCommunityPage = () => {
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
        <Flex>
          <Image
            mt={"5"}
            mb={"2"}
            width={"30%"}
            src="/utils/Common/logo.png"
            alt="pborbit_logo"
          />
        </Flex>
        <Flex justifyContent={"space-between"}>
          <Text color={"white"} fontSize={"25px"}>
            Communities
          </Text>
          <Box pb={"15px"}>
            <Link href={"/add_community_page"}>
              <Button
                color={"white"}
                bgColor={"#00E276"}
                _hover={{ bgColor: "#FF6600" }}
              >
                Create Community
              </Button>
            </Link>
          </Box>
        </Flex>
        <Box
          position={"fixed"}
          border={"1px solid #251A4B"}
          width={"85%"}
          margin={"auto"}
        ></Box>
      </VStack>
      <Flex position={"fixed"} left={"100px"} top={"140px"} zIndex={1}>
        <Searchbar />
      </Flex>

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
};

export default viewAllCommunityPage;
