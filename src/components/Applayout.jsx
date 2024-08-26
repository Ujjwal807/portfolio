import Hamburger from "hamburger-react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState } from "react";

function Applayout() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className=" w-full relative text-white justify-center   flex ">
      <div className="flex xl:flex-row md:flex-col flex-col relative bg-zinc-950 pr-8 pt-6 py-6  w-full">
        <div className="ml-5 xl:hidden">
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <div className="xl:hidden">{isOpen && <Sidebar />}</div>
        <div className="hidden xl:block"><Sidebar /></div>
        <div className="max-w-4xl  ml-auto relative w-full flex flex-col  pl-6 pb-16">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Applayout;
