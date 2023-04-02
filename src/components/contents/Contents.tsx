import React from "react";
import { Awards, Education, Experience, Profile, Project } from "./modules";
import TechStacks from "./modules/TechStacks";

const Contents = ({ children }: { children: JSX.Element[] }) => {
  return (
    <div className="m-auto max-w-4xl p-8 flex flex-col gap-20">{children}</div>
  );
};

Contents.Profile = Profile;
Contents.TechStacks = TechStacks;
Contents.Education = Education;
Contents.Project = Project;
Contents.Awards = Awards;
Contents.Experience = Experience;

export default Contents;
