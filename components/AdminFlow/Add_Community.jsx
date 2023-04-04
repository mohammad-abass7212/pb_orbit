import CustomButton from "@/components/CustomButton";
import { CREATE_COMMUNITY_API_ENDPOINT } from "@/pages/api/apiVariables";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
// import  TimePicker  from "react-ios-time-picker";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { api } from "../../pages/api/Base_ur";

const Add_Community = () => {
  // this.state = {
  //       chartData: {
  //         labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  //         datasets: [
  //           {
  //             label: 'Sales',
  //             data: [12, 19, 3, 5, 2, 3],
  //             backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //             borderColor: 'rgba(255, 99, 132, 1)',
  //             borderWidth: 1,
  //           }
  //         ]
  //       }
  //     };
  const toast = useToast();
  const [openTime, setOpenTime] = useState({
    Monday: "",
    Tueday: "",
    Wedneday: "",
    Thuesday: "",
    Friday: "",
    Satuday: "",
    Sunday: "",
  });
  const [closingTime, setClosingTime] = useState({
    Monday: "",
    Tueday: "",
    Wedneday: "",
    Thuesday: "",
    Friday: "",
    Satuday: "",
    Sunday: "",
  });
  // const [value2, setValue2] = useState("20:00");
  // const [value, setValue] = useState("21:00");
  const [payload, setPayload] = useState({
    name: "",
    Courts: "",
    location: "",
  });
  const handleOpenTimeChange = (time) => (e) => {
    setOpenTime({ ...openTime, [time]: e.target.value });
  };
  const handleClosingTimeChange = (time) => (e) => {
    setClosingTime({ ...closingTime, [time]: e.target.value });
  };
  const onOtherChange = (val) => (e) => {
    setPayload({ ...payload, [val]: e.target.value });
  };

  console.log(payload);
  const router = useRouter();

  const [paymentTrigger, setPaymentTrigger] = useState(false);

  // input taking and axios logic below
  const handlePayment = async () => {
    const token = localStorage.getItem("token");
    const schedule = {
      Monday: { start_time: openTime.Monday, end_time: closingTime.Monday },
      Tuesday: {
        start_time: openTime.Thuesday,
        end_time: closingTime.Thuesday,
      },
      Wednesday: {
        start_time: openTime.Wedneday,
        end_time: closingTime.Wedneday,
      },
      Thursday: {
        start_time: openTime.Thuesday,
        end_time: closingTime.Thuesday,
      },
      Friday: { start_time: openTime.Friday, end_time: closingTime.Friday },
      Saturday: { start_time: openTime.Satuday, end_time: closingTime.Satuday },
      Sunday: { start_time: openTime.Sunday, end_time: closingTime.Sunday },
    };

    const data = {
      community_name: payload.name,
      courts: parseInt(payload.Courts),
      latitude: "23.032",
      longitude: "29.456",
      address: payload.location,
      schedule,
    };

    await api
      .post("/community/create", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response, "community");
        toast({
          title: " Created successfully!",
          description: response?.message,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          router.push("/community");
        }, 2000);
        router.push("/paymentPage");

        // Do something with the response
      })
      .catch((error) => {
        console.log(error);
        // Handle the error
      });
  };

  return (
    <div className="flex flex-col justify-center py-10 text-[#6C6290]">
      <div className="sm:gap-8 sm:flex ">
        <div className=" w-[18rem] sm:w-[22rem] flex bg-[#050017] gap-4 border-collapse border border-[#656565] rounded-lg p-4  ">
          {" "}
          <Image
            src="/utils/common/com.svg"
            alt="pborbit_logo"
            width={20}
            height={20}
          />
          <input
            _placeholder={{ color: "#656565" }}
            type={"tel"}
            name="email"
            // value={formData.email}
            // onChange={handleInputChange}
            onChange={onOtherChange("name")}
            value={payload.name}
            placeholder="Community Name"
            required
            // ref={emailRef}
            autoComplete={"off"}
            className="outline-none bg-[#050017] "
          />
        </div>
        <div className="flex w-[18rem] sm:w-[22rem] bg-[#050017] gap-4 border-collapse border border-[#656565] rounded-lg p-4 ">
          {" "}
          <Image
            src="/utils/common/court.svg"
            alt="pborbit_logo"
            width={20}
            height={20}
          />
          <select
            _placeholder={{ color: "#656565" }}
            type={"tel"}
            name="email"
            // value={formData.email}
            onChange={onOtherChange("Courts")}
            value={payload.Courts}
            placeholder="Number of Courts"
            required
            // ref={emailRef}
            autoComplete={"off"}
            className="outline-none bg-[#050017] "
          >
            <option>Number of Courts</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </select>
        </div>
      </div>
      <div className="flex  w-[18rem] sm:w-[22rem] my-5  bg-[#050017] gap-4 border-collapse border border-[#656565] rounded-lg p-4 pr-10 ">
        {" "}
        <Image
          src="/utils/common/loc.svg"
          alt="pborbit_logo"
          width={20}
          height={20}
        />
        <input
          _placeholder={{ color: "#656565" }}
          type={"tel"}
          // name="email"
          // value={formData.email}
          // onChange={handleInputChange}

          placeholder="Location"
          required
          // ref={emailRef}
          onChange={onOtherChange("location")}
          value={payload.location}
          autoComplete={"off"}
          className="outline-none bg-[#050017]  "
        />
      </div>
      <div className="   py-10 flex gap-10 sm:gap-20">
        {" "}
        <h1 className="text-white font-medium">Schedules</h1>{" "}
        <div className="">
          <input type="checkbox" className="default:ring-2 ..." />{" "}
          <span>Use Defualt Schedule for Now</span>
        </div>{" "}
      </div>

      <div className="flex sm:ml-0 ml-20 gap-14 justify-end sm:w-[29%] pb-5 ">
        <div className="w-[55%] sm:w-[55%] flex gap-5 sm:gap-16  ">
          <h1 className="text-left"> Open </h1>
          <h1 className="text-left"> Close </h1>
          {/* <TimePicker /> */}
        </div>
      </div>
      <div className="flex flex-col gap-4  ">
        <div className="flex gap-14 ">
          <span className="sm:w-24">Monday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleOpenTimeChange("Monday")}
              value={openTime.Monday}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleClosingTimeChange("Monday")}
              value={closingTime.Monday}
            />
            {/* <TimePicker /> */}
          </div>
        </div>
        <div className="flex gap-14 ">
          <span className="sm:w-24">Tueday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleOpenTimeChange("Tueday")}
              value={openTime.Tueday}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleClosingTimeChange("Tueday")}
              value={closingTime.Tueday}
            />
          </div>
        </div>
        <div className="flex gap-8 sm:gap-14 ">
          <span className=" sm:w-24 ">Wedneday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleOpenTimeChange("Wedneday")}
              value={openTime.Wedneday}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleClosingTimeChange("Wedneday")}
              value={closingTime.Wedneday}
            />
          </div>
        </div>
        <div className="flex gap-10 sm:gap-14 ">
          <span className="sm:w-24">Thuesday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleOpenTimeChange("Thuesday")}
              value={openTime.Thuesday}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleClosingTimeChange("Thuesday")}
              value={closingTime.Thuesday}
            />
          </div>
        </div>
        <div className="flex gap-16 sm:gap-14 ">
          <span className="sm:w-24">Friday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleOpenTimeChange("Friday")}
              value={openTime.Friday}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleClosingTimeChange("Friday")}
              value={closingTime.Friday}
            />
          </div>
        </div>
        <div className="flex  gap-12 sm:gap-14 ">
          <span className="sm:w-24"> Satuday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleOpenTimeChange("Satuday")}
              value={openTime.Satuday}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleClosingTimeChange("Satuday")}
              value={closingTime.Satuday}
            />
          </div>
        </div>
        <div className="flex gap-12 sm:gap-14 ">
          <span className="sm:w-24">Sunday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleOpenTimeChange("Sunday")}
              value={openTime.Sunday}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={handleClosingTimeChange("Sunday")}
              value={closingTime.Sunday}
            />
          </div>
        </div>
      </div>
      <div className="my-10 ">
        <button
          onClick={handlePayment}
          className="bg-[#00E276] p-3 text-white rounded-lg px-10 sm:px-28"
        >
          Create Community
        </button>
      </div>

      <p className="text-center text-white">
        Pborbit © 2023 All rights reserved
      </p>
    </div>
  );
};

export default Add_Community;
