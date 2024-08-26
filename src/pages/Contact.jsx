import { BsFillCameraVideoFill } from "react-icons/bs";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { MdEmail } from "react-icons/md";

function Contact() {
  return (
    <div className="w-full">
      <h5 className="text-3xl mb-2 font-bold">Contact</h5>
      <p className="text-zinc-400">
        Feel free to get in touch and let&apos;s have a discussion about how we can
        work together.
      </p>
      <div className="w-full mt-8 mb-4  h-px border-dashed  border-zinc-700 border-t-[1px] "></div>
      <div className="">
        <h5 className="text-xl mb-6 font-bold">Find me on social media</h5>
        <div className="w-full flex flex-wrap sm:flex-nowrap justify-between sm:gap-1 md:gap-2 lg:gap-3 xl:gap-5 ">
          <a
            href="mailto:ujjawal8076@gmail.com"
            target="_blank"
            className=" w-full my-2"
          >
            <div className="px-3 flex items-center justify-center py-2 rounded-sm  bg-green-600 w-full">
              <MdEmail className="mr-2" /> <span> Email</span>
            </div>
          </a>
          <a
            href="https://www.linkedin.com/in/ujjawal-gupta-a14247269/"
            target="_blank"
            className=" w-full  my-2"
          >
            <div className="px-3 flex items-center justify-center py-2 rounded-sm  bg-blue-500 w-full">
              <FaLinkedin className="mr-2" /> <span> Linkedin</span>
            </div>
          </a>
          <a
            href="https://github.com/Ujjwal807"
            target="_blank"
            className=" w-full my-2"
          >
            <div className="px-3 flex items-center justify-center py-2 rounded-sm  tool-bg w-full">
              <IoLogoGithub className="mr-2" /> <span> Github</span>
            </div>
          </a>
          <a
            href="https://x.com/Ujjawalgupta_1"
            target="_blank"
            className=" w-full my-2"
          >
            <div className="px-3 flex items-center justify-center py-2 rounded-sm  bg-blue-500 w-full">
              <FaTwitter className="mr-2" /> <span> Twitter</span>
            </div>
          </a>
          <a
            href="https:/www.instgram.com/coders_pace"
            target="_blank"
            className=" w-full my-2"
          >
            <div className="px-3 flex items-center justify-center py-2 rounded-sm  bg-gradient-to-r from-red-600 to-indigo-600 w-full">
              <FaInstagram className="mr-2" /> <span> Instagram</span>
            </div>
          </a>
        </div>
        <div className="w-full mt-12 mb-4    border-zinc-700 border-t-[1px] "></div>
        <div>
          <h5 className="text-2xl mb-10 font-semibold">Book a call</h5>
          <a href="https://cal.com/ujjwal-jkbf7y/30min" target="_blank">
            <div className="bg-gradient-to-r from-emerald-800  to-emerald-700 p-5 hover:scale-105   duration-500 transition-all   py-6 rounded-md border-[1px] border-emerald-300 ">
              <p className="sm:text-2xl text-xl font-bold mb-4">
                1 on 1 Chit-chat Session
              </p>
              <p className="text-emerald-200 text-sm sm:text-base mb-2">
                Let&apos;s find some time to talk about anything
              </p>
              <div className="flex flex-col sm:flex-row  sm:items-center mt-4 text-xl gap-5">
                <div className="flex items-center sm:gap-3 gap-1">
                  <LuCalendarClock />
                  <span className="text-lg text-emerald-200">30 Minutes</span>
                </div>
                <div className="flex items-center sm:gap-3 gap-1">
                  <BsFillCameraVideoFill />
                  <span className="sm:text-lg text-sm text-emerald-200 ">Google Meet</span>
                </div>
              </div>
            </div>
          </a>
        </div>
        <div className="w-full mt-12 mb-4    border-zinc-700 border-t-[1px] "></div>
        <div>
            <h3 className="text-xl">Or ping me with a quick message</h3>
            <div className="mt-6 flex flex-col gap-5">
              <form className="flex w-full flex-col gap-5">
                <div className="flex flex-col sm:flex-row w-full gap-5">
                  <input
                    type="text"
                    placeholder="Enter your Name"
                    className="h-12 w-full sm:w-1/2 rounded-md border border-neutral-700 bg-transparent px-4 focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="h-12 sm:w-1/2 w-full rounded-md border border-neutral-700 bg-transparent px-4 focus:outline-none"
                  />
                </div>
                <textarea
                  name="message"
                  id="message"
                  className="rounded-md border border-neutral-700 bg-transparent px-3 py-3 focus:outline-none"
                  rows={5}
                  placeholder="Message"
                ></textarea>
                <button className="rounded-lg bg-neutral-700 py-3 font-medium transition-all delay-300 hover:scale-[101%] hover:bg-gray-50 hover:text-zinc-700">
                 
                  Send Message
                </button>
              </form>
            </div>
          </div>
       
      </div>
    </div>
  );
}
export default Contact;
