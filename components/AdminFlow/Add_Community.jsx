import CustomButton from "@/components/CustomButton";
import { CREATE_COMMUNITY_API_ENDPOINT } from "@/pages/api/apiVariables";
import { position, useToast } from "@chakra-ui/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/router";
// import  TimePicker  from "react-ios-time-picker";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";
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
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  console.log(value, "value");
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };
  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter to "false"
      setValue(description, false);
      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description }).then((results) => {
        const { lat, lng } = getLatLng(results[0]);
        console.log("📍 Coordinates: ", { lat, lng });
      });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        place_id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li key={place_id} onClick={handleSelect(suggestion)}>
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });
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
      address: value,
      schedule,
    };

    await api
      .post("/community/create", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response, "community");
        toast({
          title: " request submitted successfully!",
          description: response?.message,
          status: "success",
          duration: 9000,
          isClosable: true,
          position: "top",
        });
        setTimeout(() => {
          router.push("/paymentPage");
        }, 2000);

        // Do something with the response
      })
      .catch((error) => {
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
    fetchLocaionUsingApi(latitude, longitude);
  };
  const showError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        alert("User denied the request for Geolocation");
        break;
      case error.POSITION_UNAVAILABLE:
        alert("Location information is unavailable");
        break;
      case error.TIMEOUT:
        alert("The request to get the user location timed out");
        break;
      case error.UNKNOWN_ERROR:
        alert("An unknown error occured");
        break;
      default:
        alert("An unknown error occured");
    }
  };
  // google geolocation service will be integrated here
  const apiKey = "";
  const fetchLocaionUsingApi = async ({ latitude, longitude }) => {
    const res = await fetch(`https://ipapi.co/json/`);
    const data = await res.json();
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
      <div
        ref={ref}
        className="flex  w-[18rem] sm:w-[22rem] my-5  bg-[#050017] gap-4 border-collapse border border-[#656565] rounded-lg p-4 pr-10 "
      >
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
          onClick={() => getLocation()}
          placeholder="Location"
          required
          // ref={emailRef}
          // onChange={onOtherChange("location")}
          onChange={handleInput}
          // value={payload.location}
          value={value}
          // disabled={!ready}
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
