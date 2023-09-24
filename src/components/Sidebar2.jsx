import { NavLink } from "react-router-dom";
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck } from "react-icons/bs";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
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
];
const Sidebar2 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const inputAnimation = {
    hidden: {
      width: 0,
      padding: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "140px",
      padding: "5px 15px",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };
  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.2,
      },
    },
    show: {
      width: "auto",
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <div className="flex">
      <motion.div
        animate={{ width: isOpen ? "200px" : "45px" }}
        className="bg-[#00073D] text-white h-[100vh]"
      >
        <div className="flex items-center justify-between py-[15px] px-[10px]">
          {isOpen && (
            <motion.div
              variants={showAnimation}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[18px] leading-0"
            >
              DoSomeCoding
            </motion.div>
          )}
          <div className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div className="flex items-center my-[10px] mx-0 h-[30px] p-[10px]">
          <div className="search_icon">
            <BiSearch />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                variants={inputAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                type="text"
                placeholder="Search..."
                className="border-none ml-[10px] bg-[rgb(238,238,238)] rounded-sm"
              />
            )}
          </AnimatePresence>
        </div>
        <section className="flex flex-col py-4 routes">
          {routes.map((route) => {
            return (
              <NavLink
                to={route.path}
                key={route.name}
                className="flex text-white items-center gap-4 px-[10px] py-[5px] border-r-transparent hover:border-r-4 hover:border-white hover:transition-transform hover:bg-[#4C5177]"
              >
                <div className="icon">{route.icon}</div>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={showAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                      className="whitespace-nowrap"
                    >
                      {route.name}
                    </motion.div>
                  )}
                </AnimatePresence>
              </NavLink>
            );
          })}
        </section>
      </motion.div>
      <main></main>
    </div>
  );
};

export default Sidebar2;
