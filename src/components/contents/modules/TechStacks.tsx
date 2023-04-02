import { ContentsList } from "components/common";
import React from "react";
import Template from "../../template/ContentsTemplate";
import LevelTable from "../techstacks/LevelTable";
import data from 'data/skillstackdata.json';

const TechStacks: React.FC = () => {
  return (
    <Template
      title={{
        text: "Tech Stack",
        logo: { type: "icon", name: "📚" }
      }}
      contents={
        <div className="px-2">
          <LevelTable />
          <ContentsList list={data.list} />
        </div>
      }
    />
  );
};

export default TechStacks;
