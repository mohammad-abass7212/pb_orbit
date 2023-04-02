import React, { useRef } from "react";
import { useState, useEffect } from "react";
import { useThrottle } from "use-throttle";
import styled from "styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import {
  Box,
  Flex,
  Icon,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Text,
  Tooltip,
} from "@chakra-ui/react";
import styles from "/styles/searchUserNAdd.module.css";
import Searchbar from "./Searchbar";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
const Searchusernadd = ({ queryhandler, data }) => {
  const [activeOption, setactiveOption] = useState(0);
  const [query, setquery] = useState("");
  const scrollDiv = useRef();
  const throttleText = useThrottle(query, 1000);

  const [user, setuser] = useState([]);

  const handlefilter = (e) => {
    let newdata = [...user];
    if (newdata.includes(e.target.value)) {
      let tdx = user.indexOf(e.target.value);
      console.log(tdx);
      newdata.splice(user.indexOf(e.target.value), 1);
      // handleDelete(e.target.value)
    } else {
      newdata.push(e.target.value);
    }
    setuser(newdata);
    console.log(newdata);
  };

  const handleDelete = (val) => {
    let newdata = [...user];
    newdata.splice(user.indexOf(val), 1);
    // if(newdata.includes(val)){
    //   }else{
    //     newdata.push(val)
    //   }
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
    <Box bgColor={"#040016"} width="400px">
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
      >
        <InputLeftElement
          pointerEvents="none"
          m={"auto"}
          pt={1}
        ></InputLeftElement>
        <Tooltip hasArrow label="Search users" bg="#ffab00" color="white">
          <Input
            border={"1.5px solid "}
            variant={"unstyled"}
            textAlign={"left"}
            borderRadius={13}
            height={"45px"}
            pl={10}
            color="black"
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />
        </Tooltip>
        <InputRightElement>
          <AiOutlineCloseCircle />
        </InputRightElement>
      </InputGroup>
      <Flex>
        <input
          type="checkbox"
          value="Parent"
          style={{ marginRight: "5%" }}
          checked={user == data}
          onChange={handleParentClick}
        />
        <Text color={"white"}>All Users</Text>
      </Flex>
      <SuggestionWrapper
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
              <input
                type="checkbox"
                value={el}
                checked={user.includes(el)}
                onChange={handlefilter}
              />
              <Text color={"white"} htmlFor="">
                {el}
              </Text>
            </Flex>
          ))}
      </SuggestionWrapper>
    </Box>
  );
};

const Input = styled.input`
  flex: 1;
  font-size: 20px;
  border: none;
  outline: none;
`;
const SuggestionWrapper = styled.div`
  // border:1px solid black;
  max-height: ${({ limit }) => `${limit * 45}px`};
  border-right-color: ${({ SuggestionLength }) =>
    SuggestionLength ? "black" : "transparent"};
  border-left-color: ${({ SuggestionLength }) =>
    SuggestionLength ? "black" : "transparent"};
  border-top-color: ${({ SuggestionLength }) =>
    SuggestionLength ? "black" : "transparent"};
  border-bottom-color: ${({ SuggestionLength }) =>
    SuggestionLength ? "black" : "transparent"};
  overflow: auto;
  * {
    padding: 10px;
    text-align: left;
    padding-left: 20px;
  }
  div:nth-child(${({ active }) => active}) {
    background-color: rgba(0, 0, 0, 0.09);
    cursor: pointer;
  }
`;

export default Searchusernadd;
