import { Box } from "@chakra-ui/react";
import React from "react";
import { countries } from "../components/countries";
import Searchusernadd from "../components/AdminFlow/SearchUserNAdd";
import { useState } from "react";
import { useEffect } from "react";
import AddUserCardUtils from "../components/AdminFlow/AddUserCardUtils";

const Searchuseradd = () => {
  const [query, setquery] = useState("");
  const [data, setData] = useState([]);
  const queryhandler = (val) => {
    // console.log(val)
    setquery(val);
  };
  useEffect(() => {
    if (query == "") {
      setData([]);
    } else {
      let newText = query.trim().toLowerCase();
      const newdata = countries
        .filter((el) => {
          return el.country.toLowerCase().indexOf(newText) != -1 ? true : false;
          // return item.country.toLowerCase().indexOf(newText)!=-1?true:false;
        })
        .map((el) => el.country);

      // console.log(newdata)
      setData(newdata);
    }
  }, [query]);

  return (
    <Box>
      <Searchusernadd queryhandler={queryhandler} data={data} />
      <AddUserCardUtils />
    </Box>
  );
};

export default Searchuseradd;
