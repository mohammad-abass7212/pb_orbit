import React from "react";

const Payment_Page = () => {
  return (
    <div>
      <div className="flex flex-col justify-center py-10 ">
        <div>
          <h1 className="font-bold text-4xl text-center">$400.00</h1>
        </div>
        <div className="m-auto">
          <p className="text-center bg-[#58526d] text-sm rounded-lg p-3">
            Your 200 Members Fess and $10 per court
          </p>
        </div>
        <div className="sm:px-60 w-[100%] ">
          <h1 className="font-bold ">Select Your Method</h1>
          <div className="flex gap-4 justify-between">
            <div className="hover:bg-[#FF6600] p-5 rounded-lg m-auto w-1/3 ">
              <img
                className="m-auto"
                src="/utils/common/Group 17932.svg"
                alt="commonIcon"
              />
            </div>
            <div className="hover:bg-[#FF6600] p-5 rounded-lg bg-white m-auto w-1/3 ">
              {" "}
              <img
                className="m-auto"
                src="/utils/common/Group 833.svg"
                alt=""
              />{" "}
            </div>
            <div className="hover:bg-[#FF6600] p-5 rounded-lg bg-white m-auto w-1/3">
              <img className="m-auto" src="/utils/common/Vector.svg" alt="" />{" "}
            </div>
          </div>

          <div className="bg-white text-black px-4 py-10 flex flex-col gap-4">
            <h1>Enter your payment details</h1>

            <div className="border-#DFDFDF border-2 px-10 py-2 rounded-lg">
              <label htmlFor="">Card Holder Name</label>
              <br />
              <input
                type="text"
                placeholder="Card Holder Name"
                className="outline-none  "
              />
            </div>
            <div className="border-#DFDFDF border-2 px-10 rounded-lg py-2">
              <label htmlFor="">Card Number</label>
              <br />
              <input
                type="text"
                placeholder="xxxx -  xxxx -  xxxx - xxxx"
                className="outline-none  "
              />
            </div>
            <div className="border-#DFDFDF border-2 flex px-10 py-2 rounded-lg">
              <div className="w-1/2">
                <label htmlFor="">Expiry Date</label>
                <br />
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="outline-none  "
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="">Cvv</label>
                <br />
                <input
                  type="tel"
                  placeholder="xxx"
                  className="outline-none w-full"
                />
              </div>
            </div>
            <div className="border-#DFDFDF border-2 flex gap-4 p-3 text-white rounded-lg">
              <div className="w-1/2 m-auto text-black">
                {" "}
                <h1 className="font-bold sm:text-4xl text-center">
                  $400.00
                </h1>{" "}
              </div>{" "}
              <div className="w-1/2 m-auto">
                {" "}
                <button className="bg-[#00E276] p-3 rounded-lg sm:px-28">
                  Pay Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment_Page;
