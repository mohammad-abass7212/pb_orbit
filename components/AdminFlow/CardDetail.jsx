import React from "react";

const CardDetail = () => {
  return (
    <div style={{padding:"50px"}}>
    <div
     
      className=" sm:flex justify-between text-sm rounded-lg bg-[#26203A] py-10 sm:px-5"
    >
      <div className="flex gap-4 ">
        <div>
          {" "}
          <img src="/utils/common/Avatar.png" alt="AvatarIcon" />{" "}
        </div>
        <div>
          <div>Rozanne Barrientes</div>
          <p className="text-[#BDB8CF]">Player</p>
          <div className="sm:flex sm:gap-8 mt-4">
            {" "}
            <div className="flex gap-2 ">
              {" "}
              <span>
                {" "}
                <img src="/utils/common/msm.svg" alt={"commonIcon"} />{" "}
              </span>{" "}
              <p>+1 676 676 67612</p>{" "}
            </div>{" "}
            <div className="flex gap-2">
              <span>
                {" "}
                <img src="/utils/common/msm.svg" alt="Common" />{" "}
              </span>{" "}
              <p>rozanne barriendat@gmail,com</p>
            </div>{" "}
          </div>
        </div>
      </div>
      <div>
        {" "}
        <button className="bg-[#5B4F82] sm:px-10 sm:py-4 px-5 py-2 text-center m-auto mx-4 my-4 sm:my-5 sm:text-xl rounded-lg">
          remove
        </button>{" "}
      </div>
    </div>
    </div>
  );
};

export default CardDetail;
