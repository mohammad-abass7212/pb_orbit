import { useState } from "react";

const CardCommunities = () => {
  const [view, setView] = useState(false);

  return (
    <div className="flex gap-4 justify-evenly rounded-lg bg-[#26203A] py-10 px-5 relative ">
      {" "}
      <div>
        {" "}
        <img
          className="w-auto"
          src="/utils/common/Facebook.png"
          alt="FaceBookIcon"
        />
      </div>
      <div className="flex flex-col gap-3">
        {" "}
        <div className="text-[#A097BF]">Communities</div>
        <div className="text-white font-medium text-xl">Cityview Walk</div>
        <div className="text-[#A097BF] text-lg flex gap-3">
          <span>
            {" "}
            <img src="/utils/common/Location.svg" />{" "}
          </span>{" "}
          117 A Three Springs Rd, USA
        </div>{" "}
      </div>{" "}
      <img
        onClick={() => setView(!view)}
        className="absolute top-10 right-8"
        src="/utils/common/threedot.svg"
        alt=""
      />
      {view && (
        <div className="absolute top-20  bg-white right-6 p-6 text-black">
          {" "}
          <h2>delete</h2>
          <h2>edit</h2>{" "}
        </div>
      )}
    </div>
  );
};

export default CardCommunities;
