import CustomButton from "@/components/CustomButton";
import React from "react";
import { Line } from 'react-chartjs-2';

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
          
  return (
    <div className="flex flex-col justify-center py-10">
      {/* <Line data={this.state.chartData} /> */}

   <div className="sm:flex sm:ml-40">

      <div className="flex bg-[#050017] gap-4 border-collapse border-inherit p-4 ">
        {" "}
        <img src="/utils/common/email2.svg" alt="pborbit_logo" />
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
      </div>
      <div className="flex bg-[#050017] gap-4 border-collapse border-inherit p-4 ">
        {" "}
        <img src="/utils/common/email2.svg" alt="pborbit_logo" />
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
      </div>
          </div>
      <div className="flex sm:ml-40 py-10 bg-[#050017] gap-4 border-collapse border-inherit p-4 ">
        {" "}
        <img src="/utils/common/email2.svg" alt="pborbit_logo" />
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
      </div>
<div className=" sm:ml-40  py-10 flex gap-10"> <h1>Schedules</h1> <div className="">
<input type="checkbox" class="default:ring-2 ..." /> <span>Use Defualt Schedule for Now</span>
  </div>  </div>

      <div className="flex flex-col gap-4  sm:ml-40">
      <div className="flex gap-5">

<span className="">Monday:</span>
      <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

      </div>
      </div>
      <div className="flex gap-5">

<span className="">Monday:</span>
      <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

      </div>
      </div>
      <div className="flex gap-5">

<span className="">Monday:</span>
      <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

      </div>
      </div>
      <div className="flex gap-5">

<span className="">Monday:</span>
      <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

      </div>
      </div>
      <div className="flex gap-5">

<span className="">Monday:</span>
      <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

      </div>
      </div>
      <div className="flex gap-5">

<span className="">Monday:</span>
      <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

      </div>
      </div>
      <div className="flex gap-5">

<span className="">Monday:</span>
      <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

      </div>
      </div>
     </div>
     <div className="my-10 sm:ml-40">

     <button className="bg-[#00E276] p-3 rounded-lg px-10 sm:px-28">Continue to Pay
      </button>
          </div>

          <p className="text-center">Pborbit © 2023 All rights reserved</p>
    </div>
  );
};

export default Add_Community;
