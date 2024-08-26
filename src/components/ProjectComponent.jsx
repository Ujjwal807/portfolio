import { FaLongArrowAltRight } from "react-icons/fa";
import { IoLogoReact } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

function ProjectComponent() {
  return (
    <a href="https://discord-clone-five-xi.vercel.app/" target="_blank">
      <div className="rounded-xl bg-zinc-800 max-w-96  border-zinc-800 shadow-sm transition-all duration-300 group relative cursor-pointer    ">
        <div className="relative">
          <div className="overflow-hidden">
            <img
              loading="lazy"
              className="duration-700 ease-in-out  scale-100 blur-0 grayscale-0 h-48 rounded-t-xl object-cover object-left"
              src="./DiscordProject.jpeg"
              alt="fds"
            />
            <div className="absolute left-0 top-0  flex h-full w-full items-center justify-center gap-1 rounded-t-xl bg-black text-sm font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-85">
              <span>View Project</span>
              <FaLongArrowAltRight />
            </div>
          </div>
        </div>
        <div className="p-5 px-3">
          <div className="flex flex-col justify-between">
            <div className="cursor-pointer  text-2xl mb-2 text-neutral-700 transition-all duration-300 dark:text-neutral-300 dark:group-hover:text-teal-400 lg:group-hover:text-teal-600 ">
              Discord
            </div>
            <p className="text-sm  text-neutral-700  dark:text-neutral-400">
              This project is a React-based clone of the Discord landing page,
              including fully functional login and signup pages. The clone
              accurately replicates the design and layout of the original
              Discord pages,
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <SiNextdotjs className="  text-xl" />
              <IoLogoReact className=" text-cyan-300 text-xl" />
              <RiTailwindCssFill className=" text-cyan-500 text-xl" />
              <SiTypescript className=" text-cyan-500 text-xl" /> 
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default ProjectComponent;
