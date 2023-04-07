import CustomButton from "@/components/CustomButton";
import {
  Box,
  Button,
  Flex,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { getDashboardLayout } from "../../../components/layouts/admin";
// import { Line } from "react-chartjs-2";
// import Tabview from "../components/AdminFlow/Tabview";

const EditProfile = () => {
  const [view, setView] = useState(true);
  const { colorMode } = useColorMode();
  const activeTabTextColor = colorMode != "dark" ? "white" : "#6C6290";

  return (
    <Box>
      <Box className="flex w-full gap-10 m-auto justify-around">
        {/* <Button
          className={`view?${"text-white"}:${"text-[#6C6290]"}`}
          onClick={() => setView(!false)}
        >
          Personal Details
        </Button>
        <Button
          className={` view&& text-[#6C6290] `}
          onClick={() => setView(!true)}
        >
          Community Details
        </Button> */}
        <Tabs isFitted variant="line" size={"md"} width={"200vh"}>
          <TabList>
            <Tab onClick={() => setView(!false)} color={activeTabTextColor}>
              {"Personal Details"}
            </Tab>
            <Tab onClick={() => setView(!true)} color={activeTabTextColor}>
              {"Community Details"}
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Flex justifyContent={"space-between"}>
                {/* /<Searchbar TooltipLabel="Search User" /> */}
              </Flex>
              {/* <CardDetail userCardData={userCardData} /> */}
            </TabPanel>
            <TabPanel>
              {/* <CardRequest userCardData={userCardData} /> */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      {view ? (
        <Box className="flex flex-col gap-8 w-80 m-auto justify-center py-10">
          {/* <Line data={this.state.chartData} /> */}

          <Box className="flex m-auto">
            <Box className="m-auto">
              <Image className="auto" src="/utils/common/Avatar.png" alt="" />
            </Box>
            <Button className=" bg-[#5B4F82] sm:px-10 sm:py-4 px-5 py-2 text-center m-auto mx-4 my-4 sm:my-5 sm:text-xl rounded-lg">
              {" "}
              Upload Photo
            </Button>
          </Box>
          <Box className="flex bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
            {" "}
            <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
            <input
              _placeholder={{ color: "#656565" }}
              type={"tel"}
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}

              placeholder="Community Name"
              required
              // ref={emailRef}
              autoComplete={"off"}
              className="outline-none bg-[#050017] "
            />
          </Box>
          <Box className="flex bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
            {" "}
            <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
            <input
              _placeholder={{ color: "#656565" }}
              type={"tel"}
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}

              placeholder="Number of Courts"
              required
              // ref={emailRef}
              autoComplete={"off"}
              className="outline-none bg-[#050017] "
            />
          </Box>

          <Box className="flex   bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
            {" "}
            <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
            <input
              _placeholder={{ color: "#656565" }}
              type={"tel"}
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}

              placeholder="Location"
              required
              // ref={emailRef}
              autoComplete={"off"}
              className="outline-none bg-[#050017] "
            />
          </Box>
          <Box className="   py-10 flex gap-8">
            {" "}
            <Text color={"white"}>Schedules</Text>{" "}
            <Box className="">
              <input type="checkbox" class="default:ring-2 ..." />{" "}
              <Text color="white">Use Defualt Schedule for Now</Text>
            </Box>{" "}
          </Box>

          <Box className="flex flex-col gap-4  ">
            <Box className="m-auto flex gap-5">
              <Text color={"white"} className="">
                Monday:
              </Text>
              <Box className=" flex gap-2">
                <input className="text-black" type="time" />
                <input className="text-black" type="time" />
              </Box>
            </Box>
            <Box className="m-auto flex gap-5">
              <Text color={"white"} className="">
                Tuesday:
              </Text>
              <Box className=" flex gap-2">
                <input className="text-black" type="time" />
                <input className="text-black" type="time" />
              </Box>
            </Box>
            <Box className="m-auto flex gap-5">
              <Text color={"white"} className="">
                Wednesday:
              </Text>
              <Box className=" flex gap-2">
                <input className="text-black" type="time" />
                <input className="text-black" type="time" />
              </Box>
            </Box>
            <Box className="m-auto flex gap-5">
              <Text color={"white"} className="">
                Thrusday:
              </Text>
              <Box className=" flex gap-2">
                <input className="text-black" type="time" />
                <input className="text-black" type="time" />
              </Box>
            </Box>
            <Box className="m-auto flex gap-5">
              <Text color={"white"} className="">
                Friday:
              </Text>
              <Box className=" flex gap-2">
                <input className="text-black" type="time" />
                <input className="text-black" type="time" />
              </Box>
            </Box>
            <Box className="m-auto flex gap-5">
              <Text color={"white"} className="">
                Saturday:
              </Text>
              <Box className=" flex gap-2">
                <input className="text-black" type="time" />
                <input className="text-black" type="time" />
              </Box>
            </Box>
            <Box className="m-auto flex gap-5">
              <Text color={"white"} className="">
                Sunday:
              </Text>
              <Box className=" flex gap-2">
                <input className="text-black" type="time" />
                <input className="text-black" type="time" />
              </Box>
            </Box>
          </Box>
          <Box className="my-10 m-auto ">
            <Button
              color={"white"}
              bgColor={"#00E276"}
              className="bg-[#00E276] p-3 rounded-lg px-10 sm:px-18"
            >
              Continue to Pay
            </Button>
          </Box>

          <Text color={"white"} className="text-center">
            Pborbit © 2023 All rights reserved
          </Text>
        </Box>
      ) : (
        <Box className="flex flex-col gap-8 w-80 m-auto justify-center py-10">
          {/* <Line data={this.state.chartData} /> */}

          <Box className="flex m-auto">
            <Box className="m-auto">
              <Image className="auto" src="/utils/common/Avatar.png" alt="" />
            </Box>
            <Button className=" bg-[#5B4F82] sm:px-10 sm:py-4 px-5 py-2 text-center m-auto mx-4 my-4 sm:my-5 sm:text-xl rounded-lg">
              {" "}
              Upload Photo
            </Button>
          </Box>
          <Box className="flex bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
            {" "}
            <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
            <input
              _placeholder={{ color: "#656565" }}
              type={"tel"}
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}

              placeholder="Community Name"
              required
              // ref={emailRef}
              autoComplete={"off"}
              className="outline-none bg-[#050017] "
            />
          </Box>
          <Box className="flex bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
            {" "}
            <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
            <input
              _placeholder={{ color: "#656565" }}
              type={"tel"}
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}

              placeholder="Number of Courts"
              required
              // ref={emailRef}
              autoComplete={"off"}
              className="outline-none bg-[#050017] "
            />
          </Box>

          <Box className="flex   bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
            {" "}
            <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
            <input
              _placeholder={{ color: "#656565" }}
              type={"tel"}
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}

              placeholder="3764574888"
              required
              // ref={emailRef}
              autoComplete={"off"}
              className="outline-none bg-[#050017] "
            />
          </Box>
          <Box className="flex   bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
            {" "}
            <Image src="/utils/common/email2.svg" alt="pborbit_logo" />
            <input
              _placeholder={{ color: "#656565" }}
              type={"tel"}
              name="email"
              // value={formData.email}
              // onChange={handleInputChange}

              placeholder="3764574888"
              required
              // ref={emailRef}
              autoComplete={"off"}
              className="outline-none bg-[#050017] "
            />
          </Box>

          {/* <Box className="flex flex-col gap-4  ">
     <Box className="m-auto flex gap-5">

<Text className="">Monday:</Text>
     <Box className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </Box>
     </Box>
     <Box className="m-auto flex gap-5">

<Text className="">Monday:</Text>
     <Box className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </Box>
     </Box>
     <Box className="m-auto flex gap-5">

<Text className="">Monday:</Text>
     <Box className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </Box>
     </Box>
     <Box className="m-auto flex gap-5">

<Text className="">Monday:</Text>
     <Box className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </Box>
     </Box>
     <Box className="m-auto flex gap-5">

<Text className="">Monday:</Text>
     <Box className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </Box>
     </Box>
     <Box className="m-auto flex gap-5">

<Text className="">Monday:</Text>
     <Box className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </Box>
     </Box>
     <Box className="m-auto flex gap-5">

<Text className="">Monday:</Text>
     <Box className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </Box>
     </Box>
    </Box> */}
          <Box className="my-10 m-auto ">
            <Button className="bg-[#00E276] p-3 rounded-lg px-10 sm:px-18">
              Update
            </Button>
          </Box>

          <Text color={"white"} className="text-center">
            Pborbit © 2023 All rights reserved
          </Text>
        </Box>
      )}
    </Box>
  );
};
EditProfile.getLayout = getDashboardLayout;
export default EditProfile;
