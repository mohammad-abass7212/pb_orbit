import React from "react";
import {
  Flex,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import CardDetail from "../AdminFlow/CardDetail";
import CardRequest from "../AdminFlow/CardRequest";
import Searchbar from "./Searchbar";
const Tabview = ({ firstTab, secondTab }) => {
  const userCardData = [
    {
      id: 1,
      name: "John Doe",
      phone: "555-1234",
      email: "john.doe@example.com",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "555-5678",
      email: "jane.smith@example.com",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phone: "555-9012",
      email: "bob.johnson@example.com",
    },
    {
      id: 4,
      name: "John Doe",
      phone: "555-1234",
      email: "john.doe@example.com",
    },
    {
      id: 5,
      name: "Jane Smith",
      phone: "555-5678",
      email: "jane.smith@example.com",
    },
    {
      id: 6,
      name: "Bob Johnson",
      phone: "555-9012",
      email: "bob.johnson@example.com",
    },
  ];

  const { colorMode } = useColorMode();
  const activeTabTextColor = colorMode != "dark" ? "white" : "#6C6290";

  return (
    <div>
      <Tabs isFitted variant="line" size={"md"}>
        <TabList>
          <Tab color={activeTabTextColor}>{firstTab}</Tab>
          <Tab color={activeTabTextColor}>{secondTab}</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
          <Flex justifyContent={"space-between"}>
          <Text fontSize={"18px"} color={"white"}>
            All Members
          </Text>
          <Searchbar TooltipLabel="Search User" />
        </Flex>
            <CardDetail userCardData={userCardData} />
          </TabPanel>
          <TabPanel>
            <CardRequest userCardData={userCardData} />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Tabview;
