/* eslint-disable react/no-unescaped-entities */
import { FaLongArrowAltRight } from "react-icons/fa";
import { IoRocket } from "react-icons/io5";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className=" mt-6 ">
      <h5 className="text-2xl font-semibold">What I've been working on</h5>
      <p className="mt-9 ml-2 leading-7 text-lg text-zinc-500">
        I assist brands, companies, institutions, and startups in creating
        exceptional digital experiences for their businesses through strategic
        development services.
      </p>
      <div className="bg-zinc-800 px-5 py-3 mt-10 rounded-lg sm:px-10 sm:py-6">
        <p className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <IoRocket className="text-zinc-300" />
          Lets work together!
        </p>
        <p className="text-zinc-300 sm:mb-8 mb-4 leading-4	">
          I'm open for freelance projects, feel free to email me to see how can
          we collaborate.
        </p>
        <Link
          to="/contact"
          className="bg-zinc-700 px-3 py-1 sm:py-2 sm:px-4 rounded w-fit items-center gap-3 justify-center hover:bg-zinc-600 transition-all flex"
        >
          Contact me
          <span>
            <FaLongArrowAltRight />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
