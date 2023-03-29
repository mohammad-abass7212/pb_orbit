import React from 'react'

const Payment_Done = () => {
  return (
    <div className='text-center h-screen flex-col justify-center gap-8 m-auto'>
      
<img className='m-auto py-10' src="/utils/common/shape.svg" alt="" />
<div> <h1 className='font-bold text-4xl'>$400.00</h1> </div>
<div className='m-auto py-10 font-bold'>
    <p> Your payment has been succesfully complete</p>
</div>

<button className='bg-[#00E276] text-sm p-3 rounded-lg sm:px-28' >View Communities</button>
<footer>
<div className='m-auto text-center py-10'>
    <p> Go to Dashboard</p>
</div>
</footer>

    </div>
  )
}

export default Payment_Done
