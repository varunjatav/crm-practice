import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-1 px-8 bg-black h-14 text-white">
      <div>
        <ul className="flex items-center gap-5">
          <li>
            <img
              src="https://synergygoldtrading.com/assets/images/trading_icon.png"
              alt="logo.png"
              className="h-10 w-10"
            />
          </li>

          {/* <li>Trip</li>
          <li>Bookings</li>
          <li>Accounting</li> */}
        </ul>
      </div>

      <div>
        <div className="flex items-center justify-between gap-4 nav_inputside_svg">
          <div
            id="search-input"
            className="flex items-center justify-between gap-2 bg-white rounded-sm px-2"
          >
            <div>
            <CiSearch className="text-black"/>
            </div>
            <input
              type="text"
              placeholder="Search here"
              className="bg-white border-none"
            />
          </div>

          <div>
           <BsBell/>
          </div>
          <div>
         <AiOutlineUser/>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
