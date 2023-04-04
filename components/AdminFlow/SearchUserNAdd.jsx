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
import {
  ADD_USERS_TO_COMMUNITY_API_ENDPOINT,
  BASE_API_URL,
} from "../../pages/api/apiVariables";
import { useRouter } from "next/router";
import setCurrentPage from "../../reduxStore/actions";
import { useDispatch } from "react-redux";
const Searchusernadd = () => {
  const dispatch = useDispatch();

  const router = useRouter();
  const [query, setquery] = useState("");
  const [data, setData] = useState([]);
  // console.log("query:-", query);
  const userData = () => {
    const token = localStorage.getItem("token");

    return axios
      .get(`http://34.148.83.101:5000/community/search/${query}`, token)
      .then(function (response) {
        return response.data.users;
      })
      .catch(function (error) {
        // console.log("Error:-", error);
      });
  };

  const queryhandler = (val) => {
    setquery(val);
  };
  useEffect(() => {
    const usersPromise = userData();
    usersPromise.then(function (users) {
      // Store the retrieved data in a new variable
      const myUsers = users;
      // console.log("users data", myUsers, typeof myUsers);
      if (query == "") {
        setData([]);
      } else {
        // let newText = query.trim().toLowerCase();
        // const newdata = myUsers
        //   .filter((el) => {
        //     return el.first_name.toLowerCase().indexOf(newText) != -1
        //       ? true
        //       : false;
        //   })
        //   .map((el) => el.country);

        setData(myUsers);
      }
    });
  }, [query]);

  const [activeOption, setactiveOption] = useState(0);
  const handleQuery = () => {
    setquery("");
  };

  const scrollDiv = useRef();
  const [user, setuser] = useState([]);

  const handleDelete = (val) => {
    let newdata = [...user];
    newdata.splice(user.indexOf(val), 1);
    setuser(newdata);
  };
  const handlefilter = (e) => {
    console.log(e.target.value);
    const userObj = data.find((user) => user.username === e.target.value);
    let newdata = [...user];
    console.log("newdata", newdata, typeof newdata);
    if (newdata.find((user) => user.username === e.target.value)) {
      newdata = newdata.filter((user) => user.username !== e.target.value);
    } else {
      const { id, username } = userObj;
      newdata.push({ id, username });
    }
    setuser(newdata);
  };
  let community_id;
  const postUserDataUsingApi = async (newUserArray) => {
    try {
      const response = await axios.post(
        `${ADD_USERS_TO_COMMUNITY_API_ENDPOINT}${+"/" + community_id}`,
        {
          users: newUserArray,
        }
      );
      console.log("Add users response:", response);
      // clear the user list after successful API call
      setuser([]);
    } catch (error) {
      console.error("Add users error:", error);
    }
  };

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
            flexWrap="wrap"
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
                  <Text>{el.username}</Text>{" "}
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

        {/* this box displaying the data above the searchbar */}
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
                    value={el.username}
                    checked={user.includes(el)}
                    onChange={(e) => handlefilter(e)}
                    defaultChecked={false}
                    borderColor="#453A6C"
                    colorScheme="#453A6C"
                  />
                </CheckboxGroup>

                <AddUserCardUtils data={el} />
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
          onClick={() => {
            let newUserArray = [];
            for (let i = 0; i < user.length; i++) {
              newUserArray.push(user[i].id);
            }
            postUserDataUsingApi(newUserArray);
            dispatch(setCurrentPage("All Users"));
          }}
        >
          Add users
        </Button>{" "}
      </Box>
    </Box>
  );
};

export default Searchusernadd;
