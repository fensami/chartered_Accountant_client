import JoinUs from "../JoinUs/JoinUs";
import AllInOne from "../allInOne/AllInOne";
import Banner from "../banner/Banner";
import Search from "../Search/Search";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Search></Search>
      <JoinUs></JoinUs>
      <AllInOne></AllInOne>
    </div>
  );
};

export default Home;