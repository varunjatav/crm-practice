import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
// import SidebarMenu from "./SidebarMenu";
const Sidebar2 = () => {
    const routes = [
         {
            path: "/",
            name: "Dashboard",
            icon: <FaHome />,
          },
          {
            path: "/users",
            name: "Users",
            icon: <FaUser />,
          },
          {
            path: "/messages",
            name: "Messages",
            icon: <MdMessage />,
          },
          {
            path: "/analytics",
            name: "Analytics",
            icon: <BiAnalyse />,
          },
          {
            path: "/file-manager",
            name: "File Manager",
            icon: <AiTwotoneFileExclamation />,
            subRoutes: [
              {
                path: "/settings/profile",
                name: "Profile ",
                icon: <FaUser />,
              },
              {
                path: "/settings/2fa",
                name: "2FA",
                icon: <FaLock />,
              },
              {
                path: "/settings/billing",
                name: "Billing",
                icon: <FaMoneyBill />,
              },
            ],
          },
          {
            path: "/order",
            name: "Order",
            icon: <BsCartCheck />,
          },
          {
            path: "/settings",
            name: "Settings",
            icon: <BiCog />,
            exact: true,
            subRoutes: [
              {
                path: "/settings/profile",
                name: "Profile ",
                icon: <FaUser />,
              },
              {
                path: "/settings/2fa",
                name: "2FA",
                icon: <FaLock />,
              },
              {
                path: "/settings/billing",
                name: "Billing",
                icon: <FaMoneyBill />,
              },
            ],
          },
          {
            path: "/saved",
            name: "Saved",
            icon: <AiFillHeart />,
          },
    ]
  return (
    <div className='main-component'>
       <motion.div animate={{width: "200px"}} className='sideBar'>
        <div className="top-section">
            <h1>Dsafdsgdsg</h1>
        </div>
        <section className='flex flex-col gap-4 py-4'>
         {routes.map((route) =>{
            return (
              <NavLink to={route.path} key={route.name}>
                <div className="flex items-center gap-4 px-2">
                <div className="icon">
                  {route.icon}
                </div>
                <h1>
                  {route.name}
                </h1>
                </div>
                
              </NavLink>
            );
         })}
        </section>
        <main>

        </main>
       </motion.div>
    </div>
  )
}

export default Sidebar2