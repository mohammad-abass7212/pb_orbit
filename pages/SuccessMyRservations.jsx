import React from "react";
import CardReservations from "../components/AdminFlow/CardReservations";

const SuccessMyRservations = () => {
  return (
    <div>
      {/* <div className=' flex-col justify-center gap-2 m-auto text-center h-screen py-8'>
      
      <img className='m-auto w-[30%] ' src="/utils/common/crong.png" alt="" />
   
      <div className='m-auto  font-bold text-3xl text-[#FFCC00]  '>
          <p> 
  
          Congratulations</p>
      </div>
      
      <div className='m-auto text-center w-80 px-10 py-4'>
          <p> Your court has been successful reserved
</p>
      </div>
      <div className='text-center rounded-lg w-80 p-5 m-auto bg-[#26203A]'>
        
        <h1 className='font-bold text-lg'>Pickle Park </h1>
        <p>Reseve Date  :  9 Jan, 10:30 - 11:30am</p>
        <p>Court  : 2</p>
        
       
      </div>
      <div className="m-auto py-4 ">
      <button className='bg-[#00E276] p-3 rounded-lg px-8 sm:px-28' >My Rservations</button>
      </div>
      <p>
      Pborbit © 2023 All rights reserved
      </p>
          </div>  */}
      <CardReservations />
    </div>
  );
};

export default SuccessMyRservations;
