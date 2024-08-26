/* eslint-disable react/prop-types */
// import Project from "../components/Project";
import ProjectComponent from "../components/ProjectComponent";

function ProjectPage() {
  return (
    <div className="w-full">
      <h5 className="text-3xl mb-2 font-bold">Projects</h5>
      <p className="text-zinc-400">
        Several projects that I have worked on, both private and open source.
      </p>
      <div className="w-full mt-8 mb-4  h-px border-dashed  border-zinc-700 border-t-[1px] "></div>
      <div className="flex flex-wrap justify-between gap-7">
        <ProjectComponent />
      </div>
    </div>
  );
}

export default ProjectPage;
