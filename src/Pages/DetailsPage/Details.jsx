import { AiTwotoneStar } from "react-icons/ai";
import DetailsCard from "./DetailsCard";
import DetailsAbout from "./DetailsAbout";
import Recommendedforyou from "./Recommendedforyou";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Details = () => {
  const [data, setData] = useState();
  const [showJob, setShowJob] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch("/detailsData.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        const jobData = data.find((info) => info.id == id);
        setShowJob(jobData);
      });
  }, [id, showJob]);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-20 mx-5 md:mx-20">
        <div className="">
          <h1 className="text-4xl font-bold">{showJob?.name}</h1>
          <p className="text-xl mt-4 mb-8">{showJob?.intro}</p>
          <p className="flex items-center gap-3 mb-8">
            <AiTwotoneStar></AiTwotoneStar> {showJob?.rating} (
            {showJob?.reviewCount})
          </p>

          <DetailsCard></DetailsCard>
        </div>

        <div>
          <DetailsAbout></DetailsAbout>
        </div>
      </div>

      <div className="md:mx-20">
        <Recommendedforyou></Recommendedforyou>
      </div>
    </>
  );
};

export default Details;
