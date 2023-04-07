import { Box } from "@chakra-ui/react";
import React from "react";
import { countries } from "../components/countries";
import Searchusernadd from "../components/AdminFlow/Searchusernadd";
import { useState } from "react";
import { useEffect } from "react";
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
    <Box bgColor={"#050017"}>
      <Searchusernadd queryhandler={queryhandler} data={data} />
    </Box>
  );
};

export default Searchuseradd;
