import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Profile from "./Profile";
import SideNav from "./SideNav";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { useState } from "react";

function Sidebar() {
  const [showNav, setShowNav] = useState(false);
  return (
    <div className="xl:max-w-xs     max-w-full  lg:h-fit md:w-full m-5 mt-0  no-scrollbar xl:fixed md:static  overflow-y-scroll bg-zinc-900 mr-5  px-5 py-8 rounded-md justify-start pt-4 items-center w-full ">
      <Profile />
      <div className=" mt-6  h-px bg-zinc-700"></div>
      <div
        onClick={() => setShowNav(!showNav)}
        className=" rounded-br-2xl hidden xl:hidden sm:block rounded-bl-2xl mx-auto text-center bg-zinc-600 w-fit p-2 py-1 pt-0 pointer "
      >
        {showNav ? <IoIosArrowDown /> : <IoIosArrowUp />}
      </div>
      <div className={ showNav ? "  hidden xl:hidden flex-wrap  sm:flex md:items-end md:w-full md:overflow-hidden" : " md:h-0 md:items-end md:w-full md:overflow-hidden"} >
        <div
          className={
            showNav
              ? "md:translate-y-0  md:w-full xl:hidden hidden md:flex md:transition-all md:duration-700 md:visible"
              : "md:-translate-y-24 md:w-full md:invisible"
          }
        >
        <div className="hidden w-full sm:block"><SideNav /></div>  
        </div>
      </div>
      <div className="sm:hidden xl:block"> <SideNav /></div>
      <div className=" mt-6 sm:hidden xl:block  h-px bg-zinc-700"></div>
      <div className="sm:mt-12 mt-4 xl:block  items-end sm:hidden">
        <a
          href="./cv.pdf"
          download
          target="_blank"
          className="bg-zinc-800 py-3 w-full gap-10  px-5 flex justify-between rounded-lg transition-all duration-500 hover:bg-zinc-600 items-center "
        >
          <div>
            <p>Download Resume</p>
          </div>
          <IoCloudDownloadOutline />
        </a>
      </div>
    </div>
  );
}

export default Sidebar;
