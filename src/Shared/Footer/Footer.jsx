import { Link } from "react-router-dom";
import logo from "../../assets/footerLogo.png";

import FooterLogo from "./FooterLogo";
const Footer = () => {
  return (
    <>
    
 
    <footer className="bg-gradient-to-r  from-[#0076CE] to-[#9400D3] text-white py-10">

      <div className='md:flex justify-around'>

      
      <div className="flex justify-between px-10">
        <div className='mt-6'>
          <img src={logo} alt="Footer Logo" className="text-white" />
          <p className='w-80'>India s first platform dedicated to simplifying partner search</p>
        </div>
      
      </div>

      <div className='px-10 mt-6'>
        <h4 className='text-lg font-semibold'>COMPANY</h4>
      <ul className="">
          
          <li className="mr-4 mt-3"><Link to="/about">About</Link></li>
          <li className="mr-4 my-2"><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/career">Career</Link></li>
        </ul>
      </div>

      <div className="px-10 mt-6">
        <h4 className="text-lg font-semibold">SOLUTIONS</h4>
        <ul className="mt-3">
          <li className='my-2'><Link to="/search" >Search</Link></li>
          <li><Link to="/connect">Connect</Link></li>
          <li className='my-2'><Link to="/research">Research</Link></li>
          <li><Link to="/academy">Academy</Link></li>
        </ul>
      </div>

      <div className="px-10 mt-6">
        <h4 className="text-lg font-semibold">RESOURCES</h4>
        <ul className="mt-3">
          <li className='my-2'><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/forms">Forms</Link></li>
        </ul>
      </div>

      <div className="px-10 mt-6">
        <h4 className="text-lg font-semibold">SUPPORT</h4>
        <ul className="mt-3">
          <li className='my-2'><Link to="/help">Help</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </div>

      <div className="px-10 mt-6">
        <h4 className="text-lg font-semibold">LEGAL</h4>
        <ul className="mt-3">
          <li><Link to="/privacy">Privacy</Link></li>
          <li className='my-2'><Link to="/terms">Terms</Link></li>
          <li><Link to="/accessibility">Accessibility</Link></li>
        </ul>
      </div>
      </div>
      <hr className='mx-10 mt-10 py-3' />

      <FooterLogo></FooterLogo>
    </footer>


<div className="bg-black py-4">
  <p className="text-center text-white">Registered trademark of India Private Limited © 2023 loerumipsum Inc All Rights Reserved</p>
</div>
    </>
  );
};

export default Footer;
