import React from "react";
import Banner from "../components/banner/banner";
import Contents from "../components/contents/Contents";

const Main: React.FC = () => {
  return (
    <div>
      <Banner />
      <Contents>
        <Contents.Profile />
        <Contents.TechStacks />
        <Contents.Experience />
        <Contents.Education />
        <Contents.Project />
        <Contents.Awards />
      </Contents>
    </div>
  );
};

export default Main;
