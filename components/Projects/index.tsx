import React from "react";
import ProjectCard from "./ProjectCard";

const Projects: React.FC = () => {
  return (
    <div className="sm:my-[8vh] my-[5vh]" id="work">
      <h1 className="title mb-10">/ Projects showcase</h1>
      <div className="lg:flex">
        <ProjectCard />
        <ProjectCard />
      </div>
      <div className="lg:flex">
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
