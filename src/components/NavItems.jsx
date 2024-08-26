/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function NavItems({ text, icon }) {
  const where = text.toLowerCase();
  return (
    <NavLink
      to={`/${where === "home" ? "" : where}`}
      className="bg-zinc-800   text-zinc-300 group  hover:bg-zinc-600  transition-all flex justify-between items-center rounded-md px-2 py-2  w-full"
    >
      <div className="flex items-center   gap-3">
        <span className="group-hover:-rotate-12">{icon}</span>
        
        <p className="font-semibold text-md">{text}</p>
      </div>
      <FaArrowRight className="h-3" />
    </NavLink>
  );
}

export default NavItems;
