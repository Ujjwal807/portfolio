import { IoCloudDownloadOutline } from "react-icons/io5";

function Profile() {
  return (
    <div className="sm:flex justify-between sm:items-center  ">
      <div className="flex xl:flex-col items-center gap-4">
        <div className="w-24 md:w-24 sm:w-16 ml-1 rounded-full border overflow-hidden  border-zinc-600">
          <img src="avatar.jpg" alt="fdf" />
        </div>
        <div>
          <p className="lg:text-2xl mt-1 font-semibold sm:text-lg  tracking-widest">
            Ujjawal
          </p>
          <a
            href="https://www.linkedin.com/in/ujjawal-gupta-a14247269/"
            target="_blank"
            className="text-zinc-500 text-xs md:text-base hover:text-zinc-200 transition-all "
          >
            @ujjawal
          </a>
        </div>
      </div>
      <div className="sm:flex hidden  xl:hidden  ">
        <a
          href="./cv.pdf"
          download
          target="_blank"
          className="bg-zinc-800  py-3  w-full gap-10  px-5 flex justify-between rounded-lg transition-all duration-500 hover:bg-zinc-600 items-center "
        >
          <div>
            <p>Download Resume</p>
          </div>
          <IoCloudDownloadOutline />
        </a>
      </div>
    </div>
  );
}

export default Profile;
