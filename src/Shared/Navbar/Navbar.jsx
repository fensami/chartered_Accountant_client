// // 
// Linear Gradient
// #FEDDEE
// 100%
// #FCF6FC
// 100%
// #C5EAED
// 100%
// #FDDDFE
// 100%
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'
const Navbar = () => {
  return (
    <div className="flex justify-between bg-gradient-to-r from-[#FEDDEE] from-10% via-[#FCF6FC] via-30% to-[#C5EAED] to-90% px-5 py-2 font-bold">
      <ul className="md:flex hidden items-center gap-5">
        <Link to='/'><img src={logo} alt="" /></Link>
        <Link>solution</Link>
        <Link>Features</Link>
        <Link>Blogs</Link>
        <Link>About</Link>
      </ul>

      <div className="flex gap-3">
      <button className='text-[#0076CE] border border-[#0076CE] px-6 rounded-lg'>login</button>
      <button className='bg-[#0076CE] text-white px-3 rounded-lg'>Register</button>
      </div>
    </div>
  );
};

export default Navbar;