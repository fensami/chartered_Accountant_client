import Student from "../../../assets/Student.png";
import Teacher from "../../../assets/Teacher.png";
const AllInOneImage = () => {
  return (
    <div>
      <div className="md:flex items-center">
        <div>
          <p className="bg-[#EFD9F9] text-left mt-2 px-3 rounded-s-lg text-sm rounded-tr-md py-2">
            Hey, check out loreumipsum services.
          </p>
          <p className="bg-[#EFD9F9] mt-2 ml-4 px-3 rounded-s-lg rounded-tr-md py-2 text-sm">
            I learned from their videos, got my first job.
          </p>
          <p className="bg-[#EFD9F9] mt-2 px-3 rounded-s-lg rounded-tr-md py-2 text-sm">
            Hey, check out loreumipsum services.
          </p>
        </div>

        <div>
          <img className="h-80" src={Student} alt="" />
        </div>
      </div>

      <div className="md:flex">
        <img className="h-80" src={Teacher} alt="" />

        <div>
          <p className="bg-[#DDF3FF] mt-8 px-3 rounded-s-lg rounded-tr-md py-2 text-sm text-right">
            I got a perfect analysis report from them too
          </p>
          <p className="bg-[#DDF3FF] mt-2 md:ml-36 text-right px-3 rounded-r-md rounded-tl-md py-2 mb-5 text-sm">
            Oh, that is great.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AllInOneImage;
