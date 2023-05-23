import React from "react";
import { Award, Education, Experience, Profile, Project, TechStack } from "../organisms";

type Props = {
  children: React.ReactNode;
};

const MainTemplate = ({ children }: Props) => {
  return (
    <>
      <img
        className="object-cover w-full h-72"
        alt="banner"
        src="https://user-images.githubusercontent.com/60130075/234107028-ea05d4af-4197-456c-a656-0cb53f3409fb.jpeg"
      />
      <div className="flex flex-col max-w-4xl gap-20 p-8 m-auto">
        {children}
      </div>
    </>
  );
};

MainTemplate.Profile = Profile;
MainTemplate.TechStack = TechStack;
MainTemplate.Education = Education;
MainTemplate.Project = Project;
MainTemplate.Award = Award;
MainTemplate.Experience = Experience;
export default MainTemplate;
