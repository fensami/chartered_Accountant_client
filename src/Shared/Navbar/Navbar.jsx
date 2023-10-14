import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const Navbar = () => {
  return (
    <div className="flex justify-between bg-gradient-to-r from-[#FEDDEE] from-10% via-[#FCF6FC] via-30% to-[#C5EAED] to-90% md:px-24 px-5 py-4 font-bold">
      <ul className="flex items-center gap-5">
        <Link to="/">
          <img src={logo} alt="" />
        </Link>

        <Link className="">solution</Link>
        <Link className="">Features</Link>
        <Link className="">Blogs</Link>
        <Link className="">About</Link>
      </ul>

      <div className="flex gap-3">
        <button className="text-[#0076CE] md:block hidden border border-[#0076CE] px-6 rounded-lg">
          login
        </button>
        <button className="bg-[#0076CE] md:block hidden text-white px-3 rounded-lg">
          Register
        </button>
      </div>
    </div>
  );
};

export default Navbar;
