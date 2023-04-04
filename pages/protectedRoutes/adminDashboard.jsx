import Image from "next/image";
import { getDashboardLayout } from "../../components/layouts/admin";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import userGroup from "../../assets/images/userGroup.png";
import pickleparkdemo from "../../assets/images/pickleparkdemo.png";
import Avater from "../../assets/images/Avatar.png";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import AdminDrawer from "../../components/AdminFlow/AdminDrawer";
import Admin from "../../components//layouts/admin";
import React from "react";
ChartJS.register(ArcElement, Tooltip);
const Dashboard = () => {
  const data = {
    labels: ["Users"],
    datasets: [
      {
        data: [30, 30],
        backgroundColor: ["#D4780C", "#1B8FCA"],
        hoverBackgroundColor: ["#D4780C", "#1B8FCA"],
      },
    ],
  };
  const [drop1, setDrop1] = React.useState(true);
  const [we, setW] = React.useState("w-1/12");
  const onclick = () => {
    setDrop1(!drop1);
    setW("w-1/6");
  };
  const [drop, setDrop] = React.useState("adminDashboard");
  return (
    <Flex backgroundColor={"#050017"} margin={"auto"} pr={10}>
      <section className="lg:ml-64 min-h-screen" id="wrapper">
        <div className={` pb-5 pt-20 sm:pt-28 lg:pt-[126px] px-3 sm:px-8`}>
          <div className="flex flex-col justify-center items-center mb-5">
            <Text as={"div"} color={"white"} fontFamily={"Poppins"}>
              Community Name
            </Text>

            <Heading
              color={"white"}
              as={"h1"}
              fontFamily={"Poppins"}
              className="text-3xl font-normal leading-normal mt-0 mb-2 "
            >
              Cityview walk Group
            </Heading>
          </div>
          <div className="grid gap-4 mb-4 sm:grid-cols-2">
            <div
              className={` border-2 rounded border-[#56565638] bg-[#26203A] min-h-[380px] flex flex-col  py-5 border_img `}
            >
              <div className={`px-5 my-6 `}>
                <div className="flex justify-center mx-auto w-[70%]">
                  <div className="w-[100%]">
                    <Doughnut data={data} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="px-5 flex items-center">
                  <div className="bg-[#1B8FCA] h-12 w-2 mr-3 rounded"></div>
                  <div>
                    <h4 className=" text-2xl font-medium leading-2">120</h4>
                    <p className="   text-xs font-medium leading-2 text-gray-400">
                      Total Added Users
                    </p>
                  </div>
                </div>
                <div className="px-5 flex items-center">
                  <div className="bg-[#D4780C] h-12 w-2 mr-3 rounded"></div>
                  <div>
                    <h4 className=" text-2xl font-medium leading-2">90</h4>
                    <p className="   text-xs font-medium leading-2 text-gray-400">
                      Total Active Users
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className={` border-2 rounded border-[#56565638] bg-[#26203A] min-h-[380px] flex flex-col  py-5 border_img `}
            >
              <div className={`px-5 my-6 `}>
                <div className="flex justify-center mx-auto w-[70%]">
                  <div className="w-[100%]">
                    <Doughnut data={data} />
                  </div>
                </div>
              </div>
              <div className="flex justify-between">
                <div className="px-5 flex items-center">
                  <div className="bg-[#531BCA] h-12 w-2 mr-3 rounded"></div>
                  <div>
                    <h4 className=" text-2xl font-medium leading-2">36</h4>
                    <p className="   text-xs font-medium leading-2 text-gray-400">
                      Users Request
                    </p>
                  </div>
                </div>
                <div className="px-5 flex items-center">
                  <div className="bg-[#B2408A] h-12 w-2 mr-3 rounded"></div>
                  <div>
                    <h4 className=" text-2xl font-medium leading-2">14</h4>
                    <p className="   text-xs font-medium leading-2 text-gray-400">
                      Accepted Request
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Text color={"white"} className="mb-5 text-lg">
            My Events
          </Text>

          <div className="grid gap-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2">
            <div className="max-w-sm bg-[#26203A]  w-full lg:max-w-full lg:flex">
              <div className="h-48 lg:h-auto w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <Image src={pickleparkdemo} alt="user" />
              </div>
              <div className="  bg-[#26203A] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-4">
                  <div className="text-gray-400 font-bold text-md mb-2">
                    Cityview Community
                  </div>
                  <h4>Weekly Play Game</h4>
                  <p className=" text-sm text-gray-400">Randam Selection</p>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <p className="text-gray-400 text-sm leading-none">
                      Mon, 22, Jan 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src={userGroup} alt="user" />
                </div>
                <div className="flex w-full">
                  <button className="bg-gray-300 px-5 py-2 rounded text-black mr-5">
                    Join events
                  </button>
                  <button>View Members</button>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-[#26203A]  w-full lg:max-w-full lg:flex">
              <div className="h-48 lg:h-auto  w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
                <Image src={pickleparkdemo} alt="user" />
              </div>
              <div className="  bg-[#26203A] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-4">
                  <div className="text-gray-400 font-bold text-md mb-2">
                    Cityview Community
                  </div>
                  <h4>Weekly Play Game</h4>
                  <p className=" text-sm text-gray-400">Randam Selection</p>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <p className="text-gray-400 text-sm leading-none">
                      Mon, 22, Jan 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src={userGroup} alt="user" />
                </div>
                <div className="flex w-full">
                  <button className="bg-gray-300 px-5 py-2 rounded text-black mr-5">
                    Join events
                  </button>
                  <button>View Members</button>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-[#26203A]  w-full lg:max-w-full lg:flex">
              <div
                className="h-48 lg:h-auto  w-24 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                title="Woman holding a mug"
              >
                <Image src={pickleparkdemo} alt="user" />
              </div>
              <div className="  bg-[#26203A] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-4">
                  <div className="text-gray-400 font-bold text-md mb-2">
                    Cityview Community
                  </div>
                  <h4>Weekly Play Game</h4>
                  <p className=" text-sm text-gray-400">Randam Selection</p>
                </div>
                <div>
                  <div className="flex justify-between mb-3">
                    <p className="text-gray-400 text-sm leading-none">
                      Mon, 22, Jan 2023
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Image src={userGroup} alt="user" />
                </div>

                <div className="flex w-full">
                  <button className="bg-gray-300 px-5 py-2 rounded text-black mr-5">
                    Join events
                  </button>
                  <button>View Members</button>
                </div>
              </div>
            </div>
          </div>
          <Text color={"white"} className="mt-5 mb-2 text-lg">
            User Request
          </Text>
          <div className="grid gap-4  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ">
            <div className="max-w-sm bg-[#26203A]  w-full lg:max-w-full lg:flex">
              <div className="h-48 lg:h-auto w-24  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden flex flex-col items-center justify-center">
                <Image src={Avater} alt="user" />
              </div>
              <div className="  bg-[#26203A] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-4">
                  <div className="text-gray-400 font-bold text-md mb-2">
                    Kristan Manny
                  </div>
                  <h4>Pickleball Player</h4>
                  <p className=" text-sm text-gray-400">
                    117 A Three Springs Rd, USA
                  </p>
                </div>

                <div className="flex w-full">
                  <button className="bg-green-500 px-5 py-2 rounded text-black mr-5">
                    Accept
                  </button>
                  <button className="bg-red-500 px-5 py-2 rounded text-black mr-5">
                    Decline
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-[#26203A]  w-full lg:max-w-full lg:flex">
              <div className="h-48 lg:h-auto w-24  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden flex flex-col items-center justify-center">
                <Image src={Avater} alt="user" />
              </div>
              <div className="  bg-[#26203A] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-4">
                  <div className="text-gray-400 font-bold text-md mb-2">
                    Kristan Manny
                  </div>
                  <h4>Pickleball Player</h4>
                  <p className=" text-sm text-gray-400">
                    117 A Three Springs Rd, USA
                  </p>
                </div>

                <div className="flex w-full">
                  <button className="bg-green-500 px-5 py-2 rounded text-black mr-5">
                    Accept
                  </button>
                  <button className="bg-red-500 px-5 py-2 rounded text-black mr-5">
                    Decline
                  </button>
                </div>
              </div>
            </div>
            <div className="max-w-sm bg-[#26203A]  w-full lg:max-w-full lg:flex">
              <div className="h-48 lg:h-auto w-24  bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden flex flex-col items-center justify-center">
                <Image src={Avater} alt="user" />
              </div>
              <div className="  bg-[#26203A] rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <div className="mb-4">
                  <div className="text-gray-400 font-bold text-md mb-2">
                    Kristan Manny
                  </div>
                  <h4>Pickleball Player</h4>
                  <p className=" text-sm text-gray-400">
                    117 A Three Springs Rd, USA
                  </p>
                </div>

                <div className="flex w-full">
                  <button className="bg-green-500 px-5 py-2 rounded text-black mr-5">
                    Accept
                  </button>
                  <button className="bg-red-500 px-5 py-2 rounded text-black mr-5">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Flex>
  );
};
Dashboard.getLayout = getDashboardLayout;
export default Dashboard;
