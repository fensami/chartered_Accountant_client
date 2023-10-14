import { useEffect, useState } from "react";

const JoinCards = () => {
  const [joinus, setjoinus] = useState([]);
  useEffect(() => {
    fetch("joinUs.json")
      .then((res) => res.json())
      .then((data) => setjoinus(data));
  }, []);
  return (
    <>
      {joinus.map((join, index) => (
        <article
          key={index}
          className="shadow-xl rounded-lg relative border-black bg-white"
        >
          <div className="absolute -top-3 p-2 rounded-lg bg-gradient-to-r from-[#0076CE] to-[#9400D3] -left-3">
            <p className="text-xl text-white font-bold">1st</p>
          </div>
          <div className="text-center">
            <h1 className="text-xl font-bold mt-7">{join.title} </h1>
            <p className="px-2 text-sm my-2">{join.description}</p>
          </div>

          <div className=" flex justify-between rounded-md bg-gray-100 mx-6 my-5 px-4 py-2">
            <div className="">
              <h1 className="font-bold text-blue-700">Due date</h1>
              <h1>Within 30 days </h1>
            </div>

            <div className="">
              <p className="text-red-600 font-bold">Penalty fees</p>

              <p>
                <span className="font-bold">₹300</span> per month.
              </p>
              <p>
                <span className="font-bold">₹300</span> per month.
              </p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
};

export default JoinCards;
