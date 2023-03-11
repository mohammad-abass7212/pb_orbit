import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Input,
  Text,
} from "@chakra-ui/react";
import * as React from "react";
import CustomText, { variants } from "@/components/Common/CustomText";
interface IAppProps {}

const ResetPassword: React.FunctionComponent<IAppProps> | any = () => {
  const [password, setPassword] = React.useState("");
  const [newpassword, setNewPassword] = React.useState("");
  const updatePassword = () => {
    const payload = {
      password,
      newpassword,
    };
  };
  const [hidden, setHidden] = React.useState(true);
  const [hidden2, setHidden2] = React.useState(true);

  return (
    <Box
      bg="#050017"
      pt={["236px", "260px", "450px", "60px", "100px"]}
      pb={["170px", "400px", "400px", "40px", "40px"]}
      position="relative"
    >
      <Image
        w={["80%", "41%", "41%", "41%", "41%"]}
        position="absolute"
        bottom={["14px", "0px"]}
        src="/utils/Common/bg.png"
        alt=""
      />
      <Flex flexDirection={"column"} alignItems="center" gap={"20px"}>
        <Box
          w={["40%", "40%", "40%", "30%", "20%"]}
          mb={["73px", "73px", "73px", "40px", "57px"]}
        >
          {/* <Spin> */}
          <Image
            w={["100%", "100%", "100%", "100%", "100%"]}
            mb={["20px", "20px", "20px", "20px", "20px"]}
            src="/utils/Common/logo.png"
            alt=""
          />
        </Box>
        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w={["60%", "50%", "45%", "22%"]}
          pl="10px"
          pr="10px"
        >
          {" "}
          <Image src="/utils/common/password.svg" alt="pborbit_logo" />
          <Input
            type={hidden ? "password" : ""}
            variant="unstyled"
            p="10px"
            color="white"
            border={"none"}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Image
            onClick={() => setHidden(!hidden)}
            src="/utils/common/hide-2.svg"
            alt="pborbit_logo"
          />
        </Box>

        <Box
          display={"flex"}
          border={"1px solid white"}
          borderRadius="5px"
          w={["60%", "50%", "45%", "22%"]}
          pl="10px"
          pr="10px"
        >
          {" "}
          <Image src="/utils/common/password.svg" alt="pborbit_logo" />
          <Input
            type={hidden2 ? "password" : ""}
            variant="unstyled"
            p="10px"
            color="white"
            border={"none"}
            placeholder="Password"
            onChange={(e) => setNewPassword(e.target.value)}
            value={newpassword}
          />
          <Image
            src="/utils/common/hide-2.svg"
            alt="pborbit_logo"
            onClick={() => setHidden2(!hidden2)}
          />
        </Box>

        <Button
          mt="15px"
          bg="#00E276"
          color="white"
          w={["60%", "50%", "45%", "22%"]}
          onClick={() => updatePassword()}
        >
          Update Password
        </Button>
        <Box mt={30}>
          <CustomText
            variant={variants.SMALL_HEADING}
            text={"Already have an account?Signin"}
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default ResetPassword;
