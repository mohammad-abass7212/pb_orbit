import { CREATE_COMMUNITY_API_ENDPOINT } from "@/pages/api/apiVariables";
import { Button, position, useToast } from "@chakra-ui/react";
import CustomButton from "@/components/CustomButton";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
// import  TimePicker  from "react-ios-time-picker";
import React, { useEffect, useState } from "react";

import { api } from "../../pages/api/Base_url";

const Community_addition = () => {
  const [latitudeValue, setLatitudeValue] = useState("");

  const [longitudeValue, setLongitudeValue] = useState("");

  const [apiResponseState, setApiResponseState] = useState(false);

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

  const router = useRouter();

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
      latitude: latitudeValue.toString(),
      longitude: longitudeValue.toString(),
      address: payload.location,
      schedule,
    };
    // console.log(
    //   "courts>>>>>",
    //   data.courts,
    //   "community_name>>>>>",
    //   data.community_name,
    //   "latitudeValue>>",
    //   data.longitude,
    //   typeof data.longitude,
    //   "longitudeValue>>",
    //   data.longitude,
    //   typeof data.longitude,
    //   "courts>>",
    //   typeof data.courts,
    //   "address>>",
    //   typeof data.address
    // );
    setApiResponseState(true);
    await api
      .post("/community/create", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        setApiResponseState(false);
        console.log(response, "community");
        toast({
          title: response.message,
          description: response?.message,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });

        setTimeout(() => {
          router.push("/freshUserFlow/paymentPage");
        }, 2000);

        // Do something with the response
      })
      .catch((error) => {
        setApiResponseState(false);
        console.log(error);
        // Handle the error
      });
  };

  // geoLocaiton logic below
  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPostion, showError);
    } else {
      alert("Geolocation is not supported by this browser");
    }
  };
  const showPostion = (position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    setLatitudeValue(latitude);
    setLongitudeValue(longitude);

    fetchLocationUsingApi(latitude, longitude);
  };
  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        toast({
          title: "User denied the request for Geolocation",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        break;
      case error.POSITION_UNAVAILABLE:
        toast({
          title: "Location information is unavailable",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });

        break;
      case error.TIMEOUT:
        toast({
          title: "The request to get the user location timed out",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });

        break;
      case error.UNKNOWN_ERROR:
        toast({
          title: "An unknown error occured",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        break;
      default:
        toast({
          title: "An unknown error occured",
          status: "error",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
    }
  };
  // google geolocation service will be integrated here
  const fetchLocationUsingApi = async ({ latitude, longitude }) => {
    const res = await fetch(`https://ipapi.co/json/`);
    const data = await res.json();
    console.log(data);
    setPayload({
      location: data.city,
    });
  };
  const setDefaultValue = () => {
    setClosingTime({
      Monday: "12:00",
      Tueday: "12:00",
      Wedneday: "12:00",
      Thuesday: "12:00",
      Friday: "12:00",
      Satuday: "12:00",
      Sunday: "12:00",
    });
    setOpenTime({
      Monday: "09:00",
      Tueday: "09:00",
      Wedneday: "09:00",
      Thuesday: "09:00",
      Friday: "09:00",
      Satuday: "09:00",
      Sunday: "09:00",
    });
  };
  return (
    <div className="flex flex-col justify-center py-10 text-[#6C6290]">
      <div className="sm:gap-8 sm:flex ">
        <div className=" w-[18rem] sm:w-[22rem] flex bg-[#050017] gap-4 border-collapse border border-[#656565] rounded-lg p-4  ">
          {" "}
          <img
            src="/utils/common/com.svg"
            alt="pborbit_logo"
            width={20}
            height={20}
          />
          <input
            _placeholder={{ color: "#656565" }}
            type={"tel"}
            name="email"
            onChange={onOtherChange("name")}
            value={payload.name}
            placeholder="Community Name"
            required
            autoComplete={"off"}
            className="outline-none bg-[#050017] "
          />
        </div>
        <div className="flex w-[18rem] sm:w-[22rem] bg-[#050017] gap-4 border-collapse border border-[#656565] rounded-lg p-4 ">
          {" "}
          <img
            src="/utils/common/court.svg"
            alt="pborbit_logo"
            width={20}
            height={20}
          />
          <select
            _placeholder={{ color: "#656565" }}
            type={"tel"}
            name="email"
            onChange={onOtherChange("Courts")}
            value={payload.Courts}
            placeholder="Number of Courts"
            required
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
          color="white"
          _placeholder={{ color: "#656565" }}
          type={"tel"}
          onClick={() => getLocation()}
          placeholder="Location"
          required
          onChange={onOtherChange("location")}
          value={payload.location}
          autoComplete={"off"}
          className="outline-none bg-[#050017]  "
        />
        {status === "OK" && (
          <ul className="text-white">{renderSuggestions()}</ul>
        )}
      </div>
      <div className="   py-10 flex gap-10 sm:gap-20">
        {" "}
        <h1 className="text-white font-medium">Schedules</h1>{" "}
        <div className="">
          <input
            onClick={setDefaultValue}
            type="checkbox"
            className="default:ring-2 ..."
          />{" "}
          <span>Use Defualt Schedule for Now</span>
        </div>{" "}
      </div>

      <div className="flex sm:ml-0 ml-20 gap-4 justify-end sm:w-[65%] pb-5 ">
        <div className="w-[55%] justify-end flex mx-auto gap-20 sm:gap-20">
          <h1 className="text-left"> Open </h1>
          <h1 className="text-left"> Close </h1>
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
        <CustomButton
          onClick={handlePayment}
          text={"Create Community"}
          btnDisabled={false}
          buttonBgColor={"#00E276"}
          customHeight={["50px"]}
          widthArray={["340px"]}
          btnBorderRadius={"15px"}
          iconVisStatus={false}
          color={"white"}
          //  spinner={}
          className="bg-[#00E276] p-3 text-white rounded-lg px-10 sm:px-28"
        />
      </div>

      <p className="text-center text-white">
        Pborbit © 2023 All rights reserved
      </p>
    </div>
  );
};

export default Community_addition;
