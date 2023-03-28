import React from "react";
import Template from "../../template/ContentsTemplate";
import LevelTable from "../techstacks/LevelTable";
import List from "../techstacks/List";

const TechStacks: React.FC = () => {
  return (
    <Template
      title={"Tech Stack"}
      logo={{ type: "icon", name: "📚" }}
      contents={
        <div className="px-2">
          <LevelTable />
          <List />
        </div>
      }
    />
  );
};

export default TechStacks;
