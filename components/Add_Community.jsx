import CustomButton from "@/components/CustomButton";
// import  TimePicker  from "react-ios-time-picker";
import React, { useState } from "react";
import { Line } from "react-chartjs-2";

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
  const [value, setValue] = useState("09:00");
  const [value2, setValue2] = useState("20:00");
  const [payload, setPayload] = useState({
    name:"",
    Courts:0
    ,
    location:""

  });
  const onChange = (timeValue) => {
      
    setValue(timeValue);
  };
  const onChange2 = (timeValue2) => {
    setValue2(timeValue2);
  };
console.log(payload)
  return (
    <div className="flex flex-col justify-center py-10 text-[#6C6290]">
      {/* <Line data={this.state.chartData} /> */}

      <div className="sm:gap-8 sm:flex ">
        <div className=" w-[18rem] sm:w-[22rem] flex bg-[#050017] gap-4 border-collapse border border-[#656565] rounded-lg p-4  ">
          {" "}
          <img src="/utils/common/com.svg" alt="pborbit_logo" />
          <input
            _placeholder={{ color: "#656565" }}
            type={"tel"}
            name="email"
            // value={formData.email}
            // onChange={handleInputChange}
            onChange={(e)=>setPayload({...payload,name:e.target.value}) }
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
          <img src="/utils/common/court.svg" alt="pborbit_logo" />
          <select
            _placeholder={{ color: "#656565" }}
            type={"tel"}
            name="email"
            // value={formData.email}
            onChange={(e)=>setPayload({...payload,Courts:e.target.value}) }
value={payload.Courts}
            placeholder="Number of Courts"
            required
            // ref={emailRef}
            autoComplete={"off"}
            className="outline-none bg-[#050017] "
          >
            <option  >Number of Courts</option>
            <option value="1" >1</option>
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
        <img src="/utils/common/loc.svg" alt="pborbit_logo" />
        <input
          _placeholder={{ color: "#656565" }}
          type={"tel"}
          name="email"
          // value={formData.email}
          // onChange={handleInputChange}

          placeholder="Location"
          required
          // ref={emailRef}
          onChange={(e)=>setPayload({...payload,location:e.target.value}) }
value={payload.location}
          autoComplete={"off"}
          className="outline-none bg-[#050017]  "
        />
      </div>
      <div className="   py-10 flex gap-10 sm:gap-20">
        {" "}
        <h1 className="text-white font-medium">Schedules</h1>{" "}
        <div className="">
          <input type="checkbox" class="default:ring-2 ..." />{" "}
          <span>Use Defualt Schedule for Now</span>
        </div>{" "}
      </div>

      <div className="flex sm:ml-0 ml-20 gap-14 justify-end sm:w-[29%] pb-5 ">
    
          <div className="w-[55%] sm:w-[55%] flex gap-5 sm:gap-16  ">
            <h1 className="text-left" > Open </h1>
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
              onChange={onChange}
              value={value}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange2}
              value={value2}
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
              onChange={onChange}
              value={value}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange2}
              value={value2}
            />
          </div>
        </div>
        <div className="flex gap-8 sm:gap-14 ">
          <span className=" sm:w-24 ">Wedneday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange}
              value={value}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange2}
              value={value2}
            />
          </div>
        </div>
        <div className="flex gap-10 sm:gap-14 ">
          <span className="sm:w-24">Thuesday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange}
              value={value}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange2}
              value={value2}
            />
          </div>
        </div>
        <div className="flex gap-16 sm:gap-14 ">
          <span className="sm:w-24">Friday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange}
              value={value}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange2}
              value={value2}
            />
          </div>
        </div>
        <div className="flex  gap-12 sm:gap-14 ">
          <span className="sm:w-24"> Satuday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={(e)=>setValue(e.target.value)}
              value={value}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange2}
              value={value2}
            />
          </div>
        </div>
        <div className="flex gap-12 sm:gap-14 ">
          <span className="sm:w-24">Sunday:</span>
          <div className=" flex gap-2">
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange}
              value={value}
            />
            <input
              className="text-black  rounded-sm px-2"
              type="time"
              onChange={onChange2}
              value={value2}
            />
          </div>
        </div>
      </div>
      <div className="my-10 ">
        <button className="bg-[#00E276] p-3 text-white rounded-lg px-10 sm:px-28">
          Continue to Pay
        </button>
      </div>

      <p className="text-center text-white">Pborbit © 2023 All rights reserved</p>
    </div>
  );
};

export default Add_Community;
