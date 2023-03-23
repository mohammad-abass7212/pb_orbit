import { Image, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Loader = () => {
  return (
    <Stack position={"fixed"} marginBottom={50} width="full" height="100vh">
      <VStack spacing={5} padding={5} margin="auto" alignItems="center">
        <Image
          width="150px"
          src="https://freshcook.in/wp-content/uploads/2020/12/site-loader.gif"
          alt="loading..."
        />
        <Text style={{ fontSize: "100px" }}>loading...</Text>
      </VStack>
    </Stack>
  );
};

export default Loader;
