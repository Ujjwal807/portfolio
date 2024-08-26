import {  GoHomeFill } from "react-icons/go";
import NavItems from "./NavItems";
import { BsPersonBadge } from "react-icons/bs";
import { SiBuymeacoffee } from "react-icons/si";
import { IoRocket } from "react-icons/io5";

function SideNav() {
  const navItems = [
    {
      text: "Home",
      icon: <GoHomeFill className="hover:-rotate-22 transition-all" />,
    },

    {
      text: "Projects",
      icon: <SiBuymeacoffee />,
    },
    {
      text: "About",
      icon: <BsPersonBadge />,
    },
    {
      text: "Contact",
      icon: <IoRocket />,
    },
  ];
  return (
    <div className=" side-nav lg:flex-wrap w-full mt-4 flex-wrap flex-col  flex  gap-6 ">
      {navItems.map((el, id) => (
        <NavItems key={id} icon={el.icon} text={el.text} />
      ))}
    </div>
  );
}

export default SideNav;
