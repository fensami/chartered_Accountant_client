import detailsImage from '../../assets/DetailsImage.png'
import { AiTwotoneStar } from 'react-icons/ai';

const Recommendedforyou = () => {
  return (
    <div>
      <p className='mb-8 text-4xl font-bold'>Recommendedforyou</p>

      <div className='grid gap-8 grid-cols-1 md:grid-cols-3'>
        <div className=' shadow-md rounded-lg'>

        <img src={detailsImage} alt="" />
        <h1 className='flex mx-6 justify-between text-xl font-bold mt-4 mb-1'>Michael Jackson <span>₹4,370</span></h1>
        <p className='mx-6 text-base font-normal'>I will do business evaluation and corporate services</p>

        <p className='mt-3 mx-6 flex items-center'><AiTwotoneStar></AiTwotoneStar> <span className='text-base font-bold ml-2'>4.8</span> (89)</p>
<div className='flex my-8 mx-5 justify-center items-center'>

        <button className='bg-[#0076CE] px-5 py-2 w-full mx-2 rounded-lg text-xl font-bold text-white '>View services</button>
</div>
        </div>
        <div className=' shadow-md rounded-lg'>

        <img src={detailsImage} alt="" />
        <h1 className='flex mx-6 justify-between text-xl font-bold mt-4 mb-1'>Michael Jackson <span>₹4,370</span></h1>
        <p className='mx-6 text-base font-normal'>I will do business evaluation and corporate services</p>

        <p className='mt-3 mx-6 flex items-center'><AiTwotoneStar></AiTwotoneStar> <span className='text-base font-bold ml-2'>4.8</span> (89)</p>
<div className='flex my-8 mx-5 justify-center items-center'>

        <button className='bg-[#0076CE] px-5 py-2 w-full mx-2 rounded-lg text-xl font-bold text-white '>View services</button>
</div>
        </div>
        <div className=' shadow-md rounded-lg'>

        <img src={detailsImage} alt="" />
        <h1 className='flex mx-6 justify-between text-xl font-bold mt-4 mb-1'>Michael Jackson <span>₹4,370</span></h1>
        <p className='mx-6 text-base font-normal'>I will do business evaluation and corporate services</p>

        <p className='mt-3 mx-6 flex items-center'><AiTwotoneStar></AiTwotoneStar> <span className='text-base font-bold ml-2'>4.8</span> (89)</p>
<div className='flex my-8 mx-5 justify-center items-center'>

        <button className='bg-[#0076CE] px-5 py-2 w-full mx-2 rounded-lg text-xl font-bold text-white '>View services</button>
</div>
        </div>
       
      </div>
    </div>
  );
};

export default Recommendedforyou;