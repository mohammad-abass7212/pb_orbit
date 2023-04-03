import { useRef, useState, useEffect } from "react";
import {
  Input,
  Button,
  Heading,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Box,
  Text,
  Link,
} from "@chakra-ui/react";

const Login = () => {
  const userRef = useRef<HTMLInputElement>(null);
  const [user, setUser] = useState<string>("");
  const [pwd, setPwd] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // perform login logic here
    if (user === "admin" && pwd === "admin") {
      setSuccess(true);
    } else {
      setErrMsg("Invalid username or password!");
    }
  };

  return (
    <>
      {success ? (
        <Box textAlign="center">
          <Heading>You are logged in!</Heading>
          <Text>
            <Link href="#">Go to Home</Link>
          </Text>
        </Box>
      ) : (
        <Box textAlign="center">
          <FormControl as="form" onSubmit={handleSubmit}>
            <Box mb="6">
              <Heading mb="4">Sign In</Heading>
              <FormLabel htmlFor="username">Username:</FormLabel>
              <Input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                isRequired
              />
              <FormLabel htmlFor="password" mt="4">
                Password:
              </FormLabel>
              <Input
                type="password"
                id="password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                isRequired
              />
            </Box>
            <FormErrorMessage>{errMsg}</FormErrorMessage>
            <Button type="submit" colorScheme="blue">
              Sign In
            </Button>
          </FormControl>
          <Box mt="6">
            <Text>
              Need an Account?
              <Link href="#">Sign Up</Link>
            </Text>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Login;
