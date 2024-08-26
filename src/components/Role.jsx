/* eslint-disable react-hooks/rules-of-hooks */
import {  useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

function Role({ role, type, timePeriod, duration, site, img, resp }) {
  const [showResp, setShowResp] = useState(false);
  return (
   
      <div className="bg-zinc-800 flex sm:flex-row flex-col rounded items-start gap-3 px-3 py-6">
        <div>
          <img src={img} className=" object-cover w-20  mt-3 h-20" />
        </div>
        <div className="w-full">
          <div className="flex flex-col md:flex-row justify-between w-full mb-2">
            <h5 className="text-zinc-300 md:text-lg text-base">{role}</h5>
            <ul className="mr-4">
              <li className="text-zinc-400 text-xs md:text-base">Delhi,India</li>
            </ul>
          </div>
          <ul className="flex flex-col sm:flex-row text-sm pt-4 text-zinc-400  list-disc	">
            <li className="mx-4 md:mr-2  md:ml-6">{timePeriod}</li>
            <li className="mx-4">{duration}</li>
            <li className="mx-4">{type}</li>
            <li className="mx-4">{site}</li>
          </ul>
          <div className="mt-2 md:ml-2 px-0">
            <p
              onClick={() => setShowResp(!showResp)}
              className="text-sm sm:ml-3 ml-[-4px] flex px-0 items-center gap-1 duration-300 mb-2 hover:cursor-pointer hover:text-zinc-100 transition-all text-zinc-400"
            >
              <IoIosArrowForward /> <span>Show Responsiblities</span>
            </p>
            {showResp && (
              <ul>
                <li className="text-sm px-7">{resp}</li>
              </ul>
            )}
          </div>
        </div>
      </div>
  
  );
}

export default Role;

