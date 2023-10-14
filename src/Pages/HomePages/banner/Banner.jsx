import banner1 from "../../../assets/banner_1.png";
import banner2 from "../../../assets/banner_2.png";
import banner3 from "../../../assets/banner_3.png";

const Banner = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-[#FEDDEE] from-10% via-[#FCF6FC] via-30% to-[#C5EAED] to-90%">
        <div className="grid grid-cols-1 md:grid-cols-2 mx-10">
          <article className="md:mt-32 mt-5">
            <div className=" flex-col flex gap-5 justify-center items-center">
              <h1 className="text-6xl md:ml-16 font-bold mb-4">
                Find
                <span className="bg-gradient-to-r from-[#0076CE] via-[#9400D3] to-[#9400D3] inline-block text-transparent bg-clip-text">
                  Partners
                </span>
                (CAs) available online
              </h1>
              <p className="mb-14 md:ml-16">
                CONNECT with us where your services are listed and visible to a
                myriad of businesses seeking CA’s for compliance support
              </p>
            </div>

            <div className="flex md:ml-16 md:mr-28">
              <input
                type="text"
                className="rounded-s-sm w-full px-3 py-2"
                placeholder="Search by name"
              />
              <button
                className="rounded-r-sm text-white px-9 bg-blue-600
          font-semibold py-2"
              >
                Search
              </button>
            </div>
          </article>

          <article className="flex justify-center items-center gap-5 my-5">
            <img
              src={banner1}
              className="w-20 md:w-full md:h-fit md:mt-20"
              alt=""
            />
            <img src={banner2} className="w-20 md:w-full md:h-fit" alt="" />
            <img src={banner3} className="w-20 md:w-full md:h-fit" alt="" />
          </article>
        </div>
      </div>
    </>
  );
};

export default Banner;
