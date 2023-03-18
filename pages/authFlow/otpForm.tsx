import { Box, Center, Heading, Text, VStack } from "@chakra-ui/layout";
import { Input, InputGroup, InputLeftAddon } from "@chakra-ui/input";
import { FaKey } from "react-icons/fa";
import ResizableContainer from "@/components/resizablepages";
import { useState } from "react";

const OtpForm = () => {
  const [otp, setOtp] =useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtp(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`OTP entered: ${otp}`);
  };

  return (
    <ResizableContainer>
      <Box
        w="100%"
        maxW="400px"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Center bg="gray.200" p={6}>
          <FaKey size={32} />
          <Heading as="h2" size="lg" ml={2}>
            OTP Verification
          </Heading>
        </Center>
        <Box p={6}>
          <VStack spacing={4}>
            <Text>Please enter the OTP sent to your email:</Text>
            <form onSubmit={handleSubmit}>
              <InputGroup>
                <InputLeftAddon />
                <Input type="text" value={otp} onChange={handleChange} />
              </InputGroup>
              <Box mt={4}>
                <Input type="submit" value="Submit" />
              </Box>
            </form>
          </VStack>
        </Box>
      </Box>
    </ResizableContainer>
  );
};

export default OtpForm;
