import { useState } from "react";
import { CiBookmark } from "react-icons/ci";
import {
  IoBriefcaseOutline,
  IoCloudDownloadOutline,
  IoDocumentTextOutline,
} from "react-icons/io5";
import { PiGraduationCapLight } from "react-icons/pi";
import { NavLink } from "react-router-dom";
import ResumeComponent from "../components/resumeComponent";
import Role from "../components/Role";

function AboutPage() {
  const [about, setAbout] = useState("intro");

  const data = [
    {
      role: "GirlScript Summer of Code, OpenSource",
      timePeriod: "July 2023 - August 2023",
      duration: "1 Month",
      type: "Full Time",
      site: "Remote",
      img: "/gssoc.jpg",
      resp: "As a Front-End Developer with Girl Script Summer of Code, I leveraged HTML, CSS, and JavaScript to create responsive and visually appealing solutions. I actively participated in code reviews to uphold best practices and maintain high-quality standards. Collaborating closely with designers and backend developers, I ensured seamless integration of frontend components with backend systems. Committed to continuous learning, I stayed updated with the latest trends and technologies in frontend development.",
    },
    {
      role: "Open Source Contribution",
      timePeriod: "October 2023 - October 2023",
      duration: "1 Month",
      type: "Open Source",
      site: "Remote",
      img: "/hacktoverfest.jpg",
      resp: "I have actively contributed to open-source projects like Free Folio and Book Town, utilizing cutting-edge technologies such as HTML, CSS, and JavaScript. My efforts were recognized during Hacktoberfest 2023, where I became one of the first 50,000 contributors, had a pull request accepted, and was honored with a tree planted in my name. Additionally, I was featured in the Hacktoberfest 2023 Hall of Fame for my outstanding contributions to open-source collaboration.",
    },
    {
      role: "Web Developer, Intern",
      timePeriod: "July 2023 - August 2023",
      duration: "1 Month",
      type: "Full Time",
      site: "Remote",
      img: "/groow.png",
      resp: "During my internship, I gained invaluable experiences and knowledge working with various front-end technologies including HTML, CSS, JavaScript, SQL",
    },
  ];
  return (
    <div className="w-full ">
      <h5 className="text-3xl mb-2 font-bold">About</h5>
      <p className="text-zinc-400">
        An insightful glimpse into who I am – because every detail adds depth to
        the canvas of life.
      </p>
      <div className="w-full mt-8 mb-4  h-px border-dashed  border-zinc-700 border-t-[1px] "></div>
      <div className="">
        <div className="w-full flex flex-wrap sm:flex-nowrap  mb-6 justify-between gap-1 ">
          <NavLink className="w-full ">
            <div
              onClick={() => setAbout("intro")}
              className={
                about === "intro"
                  ? "active px-3 flex items-center justify-center py-2 rounded-sm hover:bg-zinc-500 tool-bg w-full"
                  : "px-3 flex items-center justify-center py-2 rounded-sm hover:bg-zinc-500 tool-bg w-full"
              }
            >
              <CiBookmark className="mr-2" /> <span> Intro</span>
            </div>
          </NavLink>
          <NavLink className=" w-full">
            <div
              onClick={() => setAbout("resume")}
              className={
                about === "resume"
                  ? "active px-3 flex items-center justify-center py-2 rounded-sm hover:bg-zinc-500 tool-bg w-full"
                  : "px-3 flex items-center justify-center py-2 rounded-sm hover:bg-zinc-500 tool-bg w-full"
              }
            >
              <IoDocumentTextOutline className="mr-2" /> <span> Resume</span>
            </div>
          </NavLink>
          <NavLink className=" w-full">
            <div
              onClick={() => setAbout("career")}
              className={
                about === "career"
                  ? "active px-3 flex items-center justify-center py-2 rounded-sm hover:bg-zinc-500 tool-bg w-full"
                  : "px-3 flex items-center justify-center py-2 rounded-sm hover:bg-zinc-500 tool-bg w-full"
              }
            >
              <IoBriefcaseOutline className="mr-2" /> <span> Career</span>
            </div>
          </NavLink>
          <NavLink className=" w-full">
            <div
              onClick={() => setAbout("education")}
              className={
                about === "education"
                  ? "active px-3 flex items-center justify-center py-2 rounded-sm hover:bg-zinc-500 tool-bg w-full"
                  : "px-3 flex items-center justify-center py-2 rounded-sm hover:bg-zinc-500 tool-bg w-full"
              }
            >
              <PiGraduationCapLight className="mr-2" /> <span> Education</span>
            </div>
          </NavLink>
        </div>
        <div className="text-lg flex flex-col gap-10 text-zinc-300">
          {about === "intro" && (
            <>
              <p className="text-zinc-200 text-xl mt-6">
                Hello! Thanks for stopping by my personal website.
              </p>
              <p>
                I&apos;m Ujjwal. I&apos;ve been working in web development for
                over 3 years, doing the coding you see on the screen (frontend).
                But what really gets me excited is making websites and apps that
                are easy for everyone to use and look good too!
              </p>
              <p>
                I&apos;m really into JavaScript and React, which are languages
                used to build websites. I also learning to be a Full-Stack
                Develper, I love learning about new web tools and features.
              </p>
              <p>
                I&apos;m good at adapting to different situations, working
                efficiently, and always trying to do my best. My experience has
                taught me how to solve problems , but I&apos;m also happy to
                work with others to get things done. I&apos;m excited about the
                chance to work together and make cool stuff!
              </p>
              <p>
                I&apos;m looking forward to the possibility of working with you!
              </p>
              <p>Best Regards,</p>
              <img
                src="/remarks.png"
                className="h-auto w-56 text-white invert				"
                alt=""
              />
            </>
          )}
          {about === "resume" && (
            <>
              <a
                href="./cv.pdf"
                download
                target="_blank"
                className="bg-zinc-800 py-2 gap-10  px-5 flex justify-between rounded-lg transition-all duration-500 hover:bg-zinc-600 items-center w-fit"
              >
                <div>
                  <p>Download Resume</p>
                </div>
                <IoCloudDownloadOutline />
              </a>
              <ResumeComponent />
            </>
          )}
          {about === "career" && (
            <div className="mb-20 flex flex-col gap-4">
              {data.map((el, i) => (
                <Role
                  img={el.img}
                  key={i}
                  role={el.role}
                  timePeriod={el.timePeriod}
                  type={el.type}
                  duration={el.duration}
                  site={el.site}
                  resp={el.resp}
                />
              ))}
            </div>
          )}
          {about === "education" && (
            <div className="flex flex-col gap-4 pb-16">
              <div className="bg-zinc-800 flex md:flex-row  flex-col rounded items-start gap-3 px-3 py-6">
                <div>
                  <img
                    src="/bvp.jpg"
                    className=" object-cover w-16 md:w-20 mt-3 h-20"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between w-full mb-2">
                    <h5 className="text-zinc-300 text-sm md:text-xl">
                      Bhartiya Vidyapeeth Computer Engineering
                    </h5>
                  </div>
                  <ul className="flex text-sm flex-col md:flex-row text-zinc-400  list-disc	">
                    <li className="md:mr-2 mx-4 md:ml-4 ">Bachelor Degree</li>
                    <li className="mx-4">Information Technology</li>
                  </ul>
                  <div className="mt-2">
                    <ul className="flex gap-6">
                      <li className="text-sm tracking-widest  text-zinc-400 ml-2">
                        2024 - 2027
                      </li>
                      <li className="text-sm tracking-widest  text-zinc-400 ml-2">
                        Delhi, India
                      </li>
                    </ul>
                  </div>  
                </div>
              </div>
              <div className="bg-zinc-800 flex flex-col md:flex-row rounded items-start gap-3 px-3 py-6">
                <div>
                  <img
                    src="/dseu.jpg"
                    className=" object-cover w-16 md:w-20 mt-3 h-20"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between w-full mb-2">
                    <h5 className="text-zinc-300 text-sm">
                    Delhi Skills Entrepreneurship University
                    </h5>
                  </div>
                  <ul className="flex text-sm flex-col text-zinc-400 md:flex-row  list-disc	">
                    <li className="md:mr-2 mx-4 md:ml-4">Diploma</li>
                    <li className="mx-4">Computer Engineering</li>
                  </ul>
                  <div className="mt-2">
                    <ul className="flex gap-6">
                      <li className="text-sm tracking-widest  text-zinc-400 ml-2">
                        2021 - 2024
                      </li>
                      <li className="text-sm tracking-widest  text-zinc-400 ml-2">
                        Delhi, India
                      </li>
                    </ul>
                  </div>  
                </div>
              </div>
              
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
