import React from "react";
import  {IoMdArrowDropdownCircle} from "react-icons/io";
const LoyoutDror = () => {
  return (
    <div>
      <ul className="flex flex-col  font-thin font-sans uppercase text-[#6C6290]">
        <li onClick={open} className="hover:bg-white py-2 px-4 w-full">
          Dashboard
        </li>

        <li onClick={open} className="hover:text-white py-2 px-4 w-full">
          Profile
        </li>

        <div className="group">
          <li className="hover:text-hov py-2 px-4 w-full flex justify-between  ">
           <span className="flex gap-3" ><img src="/utils/common/email2.svg" alt="pborbit_logo" />Community</span> 
            <span className="">
              <IoMdArrowDropdownCircle />
            </span>
          </li>
          <div className="hidden group-hover:block ">
            <ul className="flex flex-col ">
              <li onClick={open} className="hover:text-white py-2 px-8 w-full">
                Add Community
              </li>
              <li onClick={open} className="hover:text-white py-2 px-8 w-full">
                View Community
              </li>
            </ul>
          </div>
        </div>

        <div className="group">
          <li className="hover:text-white py-2 px-4 w-full flex justify-between">
            Reservations
            
          </li>
        </div>

        <li className="hover:text-white py-2 px-4 w-full">Notification</li>

        <div className="group">
          <li className="hover:text-white py-2 px-4 w-full flex justify-between">
            Logout
          </li>
        </div>
      </ul>



     
    </div>
  );
};

export default LoyoutDror;
