import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {

    
  return (
    <div>
      <div className="bg-black max-h-20 ">
        
        <div className="logo text-2xl font-bold flex justify-center border-[2px] ">
          <span className="text-white">Secure</span>
          <span className="text-green-500">Vault</span>
        </div>
        <ul className="text-white  flex justify-evenly  ">
          <li className="">
            <Link to="/SecureVault-MongoDB"><span className="mx-5" >Home</span></Link>
            <Link to="/about" ><span className="mx-5">About</span></Link>
            <Link to="/contact"><span className="mx-5">Contact</span></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
