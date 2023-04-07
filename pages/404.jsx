import { Box, Heading, Text } from "@chakra-ui/react";

const Not404 = () => {
  return (
    <Box className="py-10 flex-col justify-center gap-8 m-auto text-center h-screen ">
      <Box>
        {" "}
        <Heading className="font-bold text-7xl text-[#00E276]">
          404{" "}
        </Heading>{" "}
      </Box>
      <Box className="m-auto text-center text-4xl py-4">
        <Text> PAGE NOT FOUND</Text>
      </Box>
      <Box className="m-auto sm:w-96 text-center font-bold text-[#6C6290] py-4 ">
        <Text>
          Lorem Ipsum is simply dummy text of the printing and type Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. setting
          industry.
        </Text>
      </Box>

      <Box className="m-auto py-4 mb-20 ">
        <button className="bg-[#00E276] p-3 rounded-lg px-10 sm:px-28">
          Back to Dashboard
        </button>
      </Box>
      <p>Pborbit © 2023 All rights reserved</p>
    </Box>
  );
};

export default Not404;
