/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Project({ img, des, name }) {
  return (
    <div className="project-bg relative md:w-[17rem] w-full  rounded-3xl">
      <img src={img} className=" rounded-xl w-full  " alt="image" />
      <div className="absolute backdrop-blur-3xl justify-end flex flex-col items-center	 top-0 h-full w-full rounded-xl px-3 py-6 bg-black transition-all  duration-300 text-white  opacity-70  z-10">
        <p className="text-xl font-semibold mb-4">{name}</p>
        <p className="text-xs  text-zinc-300">{des}</p>
        <Link
          to="/projects"
          className="bg-zinc-700 hover:bg-zinc-800 transition-all text-center px-10 mt-2 text-lg rounded-sm"
        >
          View
        </Link>
      </div>
    </div>
  );
}

export default Project;
