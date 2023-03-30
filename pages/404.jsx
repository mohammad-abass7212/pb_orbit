import CustomButton from "@/components/CustomButton";
import React from "react";

const Not404 = () => {
  return (
    <div className="py-10 flex-col justify-center gap-8 m-auto text-center h-screen ">
      {/* <img className='m-auto py-10' src="/utils/common/Group (1).png" alt="" /> */}
      <div>
        {" "}
        <h1 className="font-bold text-7xl text-[#00E276]">404 </h1>{" "}
      </div>
      <div className="m-auto text-center text-4xl py-4">
        <p> PAGE NOT FOUND</p>
      </div>
      <div className="m-auto sm:w-96 text-center font-bold text-[#6C6290] py-4 ">
        <p>
          Lorem Ipsum is simply dummy text of the printing and type Lorem Ipsum
          is simply dummy text of the printing and typesetting industry. setting
          industry.
        </p>
      </div>

      <div className="m-auto py-4 mb-20 ">
        <button className="bg-[#00E276] p-3 rounded-lg px-10 sm:px-28">
          Back to Dashboard
        </button>
      </div>
      <p>Pborbit © 2023 All rights reserved</p>
    </div>
  );
};

export default Not404;
