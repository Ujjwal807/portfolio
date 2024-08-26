/* eslint-disable react/prop-types */

function Tools({ text, icon }) {
  return (
    <div className="flex mr-4 items-center gap-2 tool-bg  py-2 px-3 justify-center rounded-3xl w-fit ">
      {icon}
      <p>{text}</p>
    </div>
  );
}

export default Tools;
