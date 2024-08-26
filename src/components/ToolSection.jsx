import { IoLogoCss3, IoLogoHtml5, IoLogoJavascript } from "react-icons/io";
import Tools from "./Tools";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandRedux } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  SiMui,
  SiNetlify,
  SiNextdotjs,
  SiRecoil,
  SiStyledcomponents,
  SiVite,
} from "react-icons/si";
import { FaBootstrap, FaGitAlt, FaGithub, FaSass } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";

function ToolSection() {
  const skills = [
    {
      icon: <IoLogoHtml5 className=" text-orange-600 text-xl" />,
      text: "HTML",
    },
    {
      icon: <IoLogoCss3 className=" text-cyan-400 text-xl" />,
      text: "CSS",
    },
    {
      icon: <FaSass className=" text-pink-500 text-xl" />,
      text: "SCSS",
    },
    {
      icon: <RiTailwindCssFill className=" text-cyan-500 text-xl" />,
      text: "TailwindCSS",
    },
    {
      icon: <FaBootstrap className=" text-violet-500 text-xl" />,
      text: "Bootstrap",
    },
    {
      icon: <SiMui className=" text-cyan-500 text-xl" />,
      text: "MUI",
    },
    {
      icon: <SiNextdotjs className="  text-xl" />,
      text: "NextJs",
    },
    {
      icon: <SiRecoil className=" text-cyan-500 text-xl" />,
      text: "Recoil",
    },
    {
      icon: <SiNetlify className=" text-cyan-300 bg-white text-xl" />,
      text: "Netlify",
    },
    {
      icon: <FaGitAlt className=" text-orange-500 text-xl" />,
      text: "Git",
    },
    {
      icon: <FaGithub className="  text-xl" />,
      text: "Github",
    },
    {
      icon: <FcLinux className=" text-cyan-500 text-xl" />,
      text: "Linux",
    },
    {
      icon: <IoLogoJavascript className="bg-yellow-400 text-black" />,
      text: "JavaScript",
    },
    {
      icon: <IoLogoReact className=" text-cyan-300 text-xl" />,
      text: "React",
    },
    {
      icon: <TbBrandRedux className=" text-violet-500 text-xl" />,
      text: "Redux",
    },
    {
      icon: <SiVite className=" text-violet-500 text-xl" />,
      text: "Vite",
    },
    {
      icon: <SiStyledcomponents className=" text-pink-500 text-xl" />,
      text: "StyledComponents",
    },
  ];

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledSkills = shuffleArray([...skills]);

  return (
    <div>
      <h4 className="capitalize my-4 mb-6 font-semibold text-xl">
        Tools that i have used
      </h4>

      <div className="relative w-full  flex overflow-hidden">
        <div className="flex flex-col gap-3">
          <div className="animate flex  w-fit ">
            {shuffledSkills.map((el, i) => (
              <Tools text={el.text} icon={el.icon} key={i} />
            ))}
          </div>
          <div className="animate-reverse flex   w-fit ">
            {shuffledSkills.map((el, i) => (
              <Tools text={el.text} icon={el.icon} key={i} />
            ))}
          </div>
          <div className="animate flex  w-fit ">
            {skills.map((el, i) => (
              <Tools text={el.text} icon={el.icon} key={i} />
            ))}
          </div>
        </div>

        <div className="tools "></div>
      </div>
      <div className=" mt-14 h-px bg-zinc-800"></div>
    </div>
  );
}

export default ToolSection;
