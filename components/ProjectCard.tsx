import React from "react";
import { ThreeDCard } from "./ThreeDCard";
import projectData from "@/constants/projectData";

const ProjectCard = () => {
  return (
    <div className="mt-4">
      <p className="text-2xl underline text-center">Projects</p>
      <div className="flex flex-col md:flex-row gap-8 -mt-8">
        {projectData?.map((data) => (
          <ThreeDCard key={data?.id} data={data} />
        ))}
      </div>
    </div>
  );
};


export default ProjectCard;
