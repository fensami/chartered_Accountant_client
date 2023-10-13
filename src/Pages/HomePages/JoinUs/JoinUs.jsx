import JoinCards from "./JoinCards";
import bg from '../../../assets/Vector 13.png'
const JoinUs = () => {
  return (
    <div className="my-10" style={{backgroundImage: `url(${bg})`, width: '100%', height:'100%', background:'cover'}}>
      <div className="text-center">
        <h1 className=" font-bold text-6xl">Want to Join Us?</h1>
        <p className=" mt-2 text-2xl">
          To remain with us, it is essential that you diligently follow the
          steps provided
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8  md:mx-28 md:mt-10 px-10  py-5">
        <JoinCards></JoinCards>
      </div>


      <p className="mx-10 mt-10">* For forms AOC-4 and MGT-7, you will be charged a penalty of ₹200 every day until you file the form . There is no maximum penalty amount. So, if you do not file the form for a year, you will owe ₹73,000 per form</p>
    </div>
  );
};

export default JoinUs;
