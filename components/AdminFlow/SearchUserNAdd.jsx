import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useThrottle } from "use-throttle";
import axios from "axios";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  Box,
  Button,
  Checkbox,
  CheckboxGroup,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import styles from "/styles/searchUserNAdd.module.css";
import AddUserCardUtils from "./AddUserCardUtils";
const Searchusernadd = () => {
  const [query, setquery] = useState("");
  const [data, setData] = useState([]);

  const userData = () => {
    return axios
      .get(`http://34.148.83.101:5000/community/search/${"r"}`)
      .then(function (response) {
        console.log(response.data.users);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  console.log(userData());

  const queryhandler = (val) => {
    setquery(val);
  };
  useEffect(() => {
    if (query == "") {
      setData([]);
    } else {
      let newText = query.trim().toLowerCase();
      const newdata = users
        .filter((el) => {
          return el.country.toLowerCase().indexOf(newText) != -1 ? true : false;
        })
        .map((el) => el.country);

      setData(newdata);
    }
  }, [query]);

  // /handelling query above//////

  const [activeOption, setactiveOption] = useState(0);
  const handleQuery = () => {
    setquery("");
  };

  const scrollDiv = useRef();
  const throttleText = useThrottle(query, 1000);

  const [user, setuser] = useState([]);

  const handlefilter = (e) => {
    let newdata = [...user];
    if (newdata.includes(e.target.value)) {
      let tdx = user.indexOf(e.target.value);
      console.log(tdx);
      newdata.splice(user.indexOf(e.target.value), 1);
    } else {
      newdata.push(e.target.value);
    }
    setuser(newdata);
    console.log(newdata);
  };

  const handleDelete = (val) => {
    let newdata = [...user];
    newdata.splice(user.indexOf(val), 1);
    setuser(newdata);
  };

  const handleParentClick = (e) => {
    if (user.length == 0) {
      setuser(data);

      console.log(user);
    } else {
      setuser([]);
    }
  };

  console.log(user);

  useEffect(() => {
    queryhandler(throttleText);
  }, [throttleText]);
  // console.log(query)
  // console.log(data)
  return (
    <Box>
      <Box
        bgColor={"#040016"}
        width="400px"
        border={"1px solid white"}
        borderRadius={"10px"}
        marginLeft={415}
        mt={50}
      >
        <div
          className={styles.mydiv}
          style={{ overflow: "auto", maxHeight: "300px" }}
        >
          <Box
            bgColor={"#040016"}
            display="flex"
            flexWrap="wrap" // add this line
            justifyContent="center"
            alignItems="center"
            style={{
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            {user.length > 0 &&
              user.map((el, index) => (
                <Flex
                  gap={2}
                  alignItems={"center"}
                  key={index}
                  bgColor={"white"}
                  color={"grey"}
                  style={{
                    margin: "2px 3px",
                    overflow: "hidden",
                    border: "1px solid black",
                    borderRadius: "30px",
                    bgColor: "white",
                    padding: "5px 15px 5px 15px",
                    cursor: "pointer",
                    display: "inline-flex",
                    scrollbarWidth: "none",
                  }}
                >
                  <Text>{el}</Text>{" "}
                  <AiOutlineCloseCircle onClick={() => handleDelete(el)} />
                </Flex>
              ))}
          </Box>
        </div>

        <InputGroup
          borderRight={"15px"}
          border={"1px solid white"}
          borderRadius={13}
          height={"45px"}
          color={"black"}
          bgColor={"transparent"}
        >
          <Tooltip hasArrow label="Search users" color="black" bg="white">
            <Input
              border={"1.5px solid "}
              variant={"unstyled"}
              textAlign={"left"}
              borderRadius={13}
              height={"45px"}
              pl={10}
              color="white"
              value={query}
              onChange={(e) => setquery(e.target.value)}
            />
          </Tooltip>
          <InputRightElement>
            <AiOutlineCloseCircle color={"white"} onClick={handleQuery} />
          </InputRightElement>
        </InputGroup>
        <Flex>
          <Checkbox
            type="checkbox"
            value="Parent"
            style={{ marginRight: "5%" }}
            checked={user == data}
            onChange={handleParentClick}
            borderColor="#453A6C"
            colorScheme="#453A6C"
          />
          <Text color={"white"}>All Users</Text>
        </Flex>
        <Box
          className={styles.mydiv}
          limit={5}
          SuggestionLength={data.length}
          active={activeOption}
          ref={scrollDiv}
        >
          {data.length != 0 &&
            data.map((el, index) => (
              <Flex
                color="white"
                onMouseOver={() => setactiveOption(index + 1)}
                key={index}
              >
                <CheckboxGroup>
                  <Checkbox
                    type="checkbox"
                    value={el}
                    checked={user.includes(el)}
                    onChange={handlefilter}
                    defaultChecked={false}
                    borderColor="#453A6C"
                    colorScheme="#453A6C"
                  />
                </CheckboxGroup>

                <AddUserCardUtils el={el} />
              </Flex>
            ))}
        </Box>
      </Box>
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        alignContent={"center"}
        pt={5}
        ml={7}
      >
        {" "}
        <Button
          bgColor={"#00E276"}
          color={"white"}
          m={"auto"}
          _hover={{ bgColor: "#FF6600" }}
        >
          Add users
        </Button>{" "}
      </Box>
    </Box>
  );
};

export default Searchusernadd;
