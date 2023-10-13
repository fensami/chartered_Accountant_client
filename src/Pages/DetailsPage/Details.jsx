import { AiTwotoneStar } from 'react-icons/ai';
import DetailsCard from './DetailsCard';
import DetailsAbout from './DetailsAbout';
import Recommendedforyou from './Recommendedforyou';

const Details = () => {
  return (
    <>
    
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 mx-5 md:mx-20">
      
      <div className=''>
        <h1 className='text-4xl font-bold'>Michael Jackson</h1>
        <p className='text-xl mt-4 mb-8'>I am here to provide my expertise in accounting and finance, which includes financial statements, economics, and auditing, all to assist you effectively</p>
        <p className='flex items-center gap-3 mb-8'><AiTwotoneStar></AiTwotoneStar> 4.8 (89)</p>


        <DetailsCard></DetailsCard>
      </div>

      <div>
        <DetailsAbout></DetailsAbout>
      </div>

    </div>
      <div className='md:mx-20'>
        <Recommendedforyou></Recommendedforyou>
      </div>

    </>
  );
};

export default Details;