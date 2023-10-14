import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("detailsData.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm, data]);

  return (
    <div className="container mx-auto  mt-10">
      <h1 className="md:text-5xl font-bold text-center  text-3xl mb-4">
        Chartered Accountant Search
      </h1>
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Search Accountant"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="mx-5 md:mx-0 md:w-full p-2 border rounded-lg shadow-md mb-4"
        />
      </div>
      {searchTerm.length > 0 && (
        <ul>
          {searchResults.map((result, index) => (
            <Link
              to={`/details/${result.id}`}
              key={index}
              className="text-lg mb-2 block"
            >
              {result.name}
            </Link>
          ))}
        </ul>
      )}
      {searchTerm.length > 0 && searchResults.length === 0 && (
        <p className="text-red-500 mt-4">No results found for {searchTerm}</p>
      )}
    </div>
  );
};

export default Search;
