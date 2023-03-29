import React from "react";

const CardReservations = () => {
  return (
    <div>
      <div className="flex gap-4 justify-evenly rounded-lg bg-[#26203A] py-10 px-5 relative ">
        {" "}
        <div>
          {" "}
          <img
            className="w-auto"
            src="/utils/common/pickleparkdemo 1.png"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-3">
          {" "}
          <div className="text-white font-medium text-xl">Pcikel Park Demo</div>
          <div className="text-[#A097BF]">Communities</div>
          <div className="sm:flex sm:gap-8 mt-4 text-[#A097BF]">
            {" "}
            <div className="flex gap-2 ">
              {" "}
              <span>
                {" "}
                <img src="/utils/common/msm.svg" alt="CommonIcon"  />{" "}
              </span>{" "}
              <p >9 Jan, 10:30 - 11:30am</p>{" "}
            </div>{" "}
            <div className="flex gap-2">
              <span>
                {" "}
                <img src="/utils/common/msm.svg" alt="CommonIcon"/>{" "}
              </span>{" "}
              <p>Court 2</p>
            </div>{" "}
          </div>
          <div className="text-[#A097BF] text-lg flex gap-3">
            <span>
              {" "}
              <img src="/utils/common/Location.svg" alt="CommonIcon"/>{" "}
            </span>{" "}
            Player : Shivani Singh
          </div>{" "}
        </div>{" "}
        <img
          onClick={() => setView(!view)}
          className="absolute top-10 right-8"
          src="/utils/common/threedot.svg"
          alt="CommonIcon"
        />
        {/* <div className="absolute top-20  bg-white right-6 p-6 text-black"> <h2>delete</h2>
        <h2>edit</h2> </div> */}
      </div>
    </div>
  );
};

export default CardReservations;
