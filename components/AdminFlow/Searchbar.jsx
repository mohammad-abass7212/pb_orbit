import { SEARCH_USERS_API_ENDPOINT } from "@/pages/api/apiVariables";
import { SearchIcon, SmallCloseIcon } from "@chakra-ui/icons";
import {
  Input,
  Tooltip,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRef } from "react";

function Searchbar({
  TooltipLabel = "Search Users",
  SearchbarPlaceholder = "Search",
}) {
  const searchRef = useRef(null);
  const [searchInput, setSearchInput] = useState("");
  const handleSearchInput = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  // useEffect(() => {
  //   axios
  //     .post(SEARCH_USERS_API_ENDPOINT, {
  //       searchInput,
  //     })
  //     .then((response) => {
  //       console.log(response);
  //     });
  // }, [searchInput]);

  console.log(searchInput);
  return (
    <>
      <InputGroup
        w={["350px"]}
        borderRadius={13}
        height={"45px"}
        color={"white"}
      >
        <InputLeftElement pointerEvents="none" m={"auto"} pt={1}>
          <SearchIcon color="gray.300" />
        </InputLeftElement>
        <Tooltip hasArrow label={TooltipLabel} bg="#ffab00" color="white">
          <Input
            border={"1.5px solid "}
            variant={"unstyled"}
            textAlign={"left"}
            placeholder={SearchbarPlaceholder}
            borderRadius={13}
            height={"45px"}
            value={searchInput}
            onChange={(e) => handleSearchInput(e)}
            pl={10}
          />
        </Tooltip>
        <InputRightElement>
          <SmallCloseIcon />
        </InputRightElement>
      </InputGroup>
    </>
  );
}

export default Searchbar;
