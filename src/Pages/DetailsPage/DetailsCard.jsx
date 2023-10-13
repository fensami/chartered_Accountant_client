import { BsCalendar3 } from 'react-icons/bs';

const DetailsCard = () => {
  return (

    <>
    
   
    <div className="shadow-xl rounded-lg p-7 md:w-[516px] md:h-[216px]">

    <div className='flex justify-between'>
    <h1 className='text-xl font-medium'>Basic to complex tasks</h1>
      <p className='text-xl font-bold'>₹4,370</p>
    </div>

    <div className="flex items-center mt-8 gap-3">
    <BsCalendar3></BsCalendar3>
      <h1 className='text-xl font-medium'> Delivers the job within 2 days</h1>
    </div>

    <div className="grid grid-cols-2 mt-5">
      <button className='border-2 rounded-xl font-bold text-base  bg-[#0076CE] text-white px-3 py-2'>Request Proposal</button>
      <button className='border-2 border-[#0076CE] rounded-xl font-bold text-base  text-[#0076CE] px-3 py-2'>Chat with me</button>
    </div>
    </div>


<div className='shadow-xl md:w-[516px] mt-8 p-7 '>
  <h1 className='text-3xl font-bold mb-4'>What people say?</h1>
  <p className='text-xl'>I cannot express enough gratitude for the support Micheal has provided in managing my personal finances. Their attention to detail and deep understanding of financial markets has ensured that my investments are in safe hands. I highly recommend their services to anyone seeking financial guidance.</p>
</div>
    </>
  );
};

export default DetailsCard;