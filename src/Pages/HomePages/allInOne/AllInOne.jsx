import allinonelogo1 from '../../../assets/allinonelogo1.png'
import allinonelogo2 from '../../../assets/allinonelogo2.png'
import allinonelogo3 from '../../../assets/allinonelogo3.png'
import allinonelogo4 from '../../../assets/allinonelogo4.png'
import AllInOneImage from './AllInOneImage';
const AllInOne = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-10">
      <article>

      <p className="md:text-6xl text-4xl font-bold mt-20"><span className='bg-gradient-to-r from-[#0076CE] via-[#9400D3] to-[#9400D3] inline-block text-transparent bg-clip-text '>All-in-One</span> platform <span className='md:block mt-5'> that Makes Easier</span></p>
      <p className='my-5 md:text-2xl font-sans'>We are more than a platform; We are your success partner. Discover our services to achieve your business and educational goals </p>



      <div className="grid md:grid-cols-2 gap-10 mt-10">
<div className='flex gap-3'>
  <img className='w-14 h-14' src={allinonelogo1} alt="" />
  <p><span className='font-bold'>SEARCH</span> for vital company information </p>
</div>

<div className='flex gap-3'>
  <img className='w-14 h-14' src={allinonelogo2} alt="" />
  <p><span className='font-bold'>CONNECT</span> with the resources to meet your business needs</p>
</div>
<div className='flex gap-3'>
  <img className='w-14 h-14' src={allinonelogo3} alt="" />
  <p><span className='font-bold'>RESEARCH</span> and generate reports that drive growth </p>
</div>
<div className='flex gap-3'>
  <img className='w-14 h-14' src={allinonelogo4} alt="" />
  <p><span className='font-bold'>ACADEMY</span> to give you the skills for success in your career</p>
</div>
      </div>
      </article>


<AllInOneImage></AllInOneImage>
      

    </div>
  );
};

export default AllInOne;