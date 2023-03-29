import CustomButton from "@/components/CustomButton";
import React, { useState } from "react";
import { Line } from 'react-chartjs-2';

const Edit_Profile = () => {
     const [view,setView]=useState(true)
    
          
  return (
    <div>
        <div className="flex w-full gap-10 m-auto justify-around">
           <button className={`view?${"text-white"}:${"text-[#6C6290]"}`} onClick={()=>setView(!false)}>Personal Details</button> 
           <button className={` view&& text-[#6C6290] `} onClick={()=>setView(!true)}>Community Details</button> 
           </div>

{
   view?  <div className="flex flex-col gap-8 w-80 m-auto justify-center py-10">
     {/* <Line data={this.state.chartData} /> */}

  
<div className="flex m-auto">
<div className="m-auto">

   <img className="auto" src="/utils/common/Avatar.png" alt="" /> 
</div>
   <button className=" bg-[#5B4F82] sm:px-10 sm:py-4 px-5 py-2 text-center m-auto mx-4 my-4 sm:my-5 sm:text-xl rounded-lg"> Upload Photo</button>
</div>
     <div className="flex bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
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
     <div className="flex bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
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
         
     <div className="flex   bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
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
<div className="   py-10 flex gap-8"> <h1>Schedules</h1> <div className="">
<input type="checkbox" class="default:ring-2 ..." /> <span>Use Defualt Schedule for Now</span>
 </div>  </div>

     <div className="flex flex-col gap-4  ">
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
    </div>
    <div className="my-10 m-auto ">

    <button className="bg-[#00E276] p-3 rounded-lg px-10 sm:px-18">Continue to Pay
     </button>
         </div>

         <p className="text-center">Pborbit © 2023 All rights reserved</p>
   </div>: <div className="flex flex-col gap-8 w-80 m-auto justify-center py-10">
     {/* <Line data={this.state.chartData} /> */}

  
<div className="flex m-auto">
<div className="m-auto">

   <img className="auto" src="/utils/common/Avatar.png" alt="" /> 
</div>
   <button className=" bg-[#5B4F82] sm:px-10 sm:py-4 px-5 py-2 text-center m-auto mx-4 my-4 sm:my-5 sm:text-xl rounded-lg"> Upload Photo</button>
</div>
     <div className="flex bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
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
     <div className="flex bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
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
         
     <div className="flex   bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
       {" "}
       <img src="/utils/common/email2.svg" alt="pborbit_logo" />
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
     </div>
     <div className="flex   bg-[#050017] gap-4 border-collapse border-2 rounded-lg border-inherit p-4 ">
       {" "}
       <img src="/utils/common/email2.svg" alt="pborbit_logo" />
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
     </div>

     {/* <div className="flex flex-col gap-4  ">
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
     <div className="m-auto flex gap-5">

<span className="">Monday:</span>
     <div className=" flex gap-2">
<input className="text-black" type="time"  /><input className="text-black" type="time"  />

     </div>
     </div>
    </div> */}
    <div className="my-10 m-auto ">

    <button className="bg-[#00E276] p-3 rounded-lg px-10 sm:px-18">Update
     </button>
         </div>

         <p className="text-center">Pborbit © 2023 All rights reserved</p>
   </div>
}

    </div>
   
  );
};

export default Edit_Profile;
