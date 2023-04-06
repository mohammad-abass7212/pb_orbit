import CustomButton from "@/components/CustomButton";
import React from "react";
import { useDispatch } from "react-redux";
import setCurrentPage from "../../reduxStore/actions";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import Link from "next/link";

const No_user_Screen = () => {
  const dispatch = useDispatch();

  const handleAddUser = () => {
    dispatch(setCurrentPage("Add Users"));
  };

  return (
    <Box className="py-10 flex-col justify-center gap-8 m-auto text-center">
      <Image
        className="m-auto py-10"
        src="/utils/common/nouserIcon.svg"
        alt=""
      />
      <Box>
        {" "}
        <Heading color={"white"} className="font-bold text-4xl">
          Oops !
        </Heading>{" "}
      </Box>
      <Box className="m-auto  font-bold text-[#6C6290] py-4 ">
        <Text color="#6C6290">You don’t have user in community, Lets Add</Text>
      </Box>

      <Box className="m-auto text-center py-4">
        <Link href={""}>
          {" "}
          <Text color="white">Go to Dashboard</Text>
        </Link>
      </Box>

      <Box className="m-auto py-4 ">
        <Button
          bgColor={"#00E276"}
          color={"white"}
          className="bg-[#00E276] p-3 rounded-lg px-28"
          onClick={() => handleAddUser()}
        >
          Add Users
        </Button>
      </Box>
      <Text color={"white"}>Pborbit © 2023 All rights reserved</Text>
    </Box>
  );
};

export default No_user_Screen;
