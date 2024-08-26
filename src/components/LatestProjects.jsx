/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Project from "./Project";

function LatestProjects({ projects }) {
  return (
    <div>
      <div className="flex justify-between">
        <h5 className="capitalize my-4 mb-6 font-semibold text-xl">
          Latest Projects
        </h5>
        <Link
          to="/projects"
          className="flex text-zinc-400 hover:text-zinc-300 transition-all items-center"
        >
          View All Projects
          <span className="ml-5">
            <FaArrowRight />
          </span>
        </Link>
      </div>
      <div className="flex md:flex-row  flex-col gap-4 justify-between  ">
        {projects.map((el, id) => (
          <Project name={el.name} key={id} des={el.des} img={el.img} />
        ))}
      </div>
      <div className=" mt-5 h-px bg-zinc-800"></div>
    </div>
  );
}

export default LatestProjects;
