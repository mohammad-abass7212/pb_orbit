import CustomButton from '@/components/CustomButton'
import React from 'react'

const No_user_Screen = () => {
  return (
    <div className='py-10 flex-col justify-center gap-8 m-auto text-center'>
      
    <img className='m-auto py-10' src="/utils/common/Group (1).png" alt="" />
    <div> <h1 className='font-bold text-4xl'>Oops !</h1> </div>
    <div className='m-auto  font-bold text-[#6C6290] py-4 '>
        <p> 

You don’t have user in community, Lets Add</p>
    </div>
    
    <div className='m-auto text-center py-4'>
        <p> Go to Dashboard</p>
    </div>
    
    <div className="m-auto py-4 ">
    <button className='bg-[#00E276] p-3 rounded-lg px-28' >Add Users</button>
    </div>
    <p>
    Pborbit © 2023 All rights reserved
    </p>
        </div>
  )
}

export default No_user_Screen
