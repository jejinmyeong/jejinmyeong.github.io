import { ContentsList } from "components/common";
import React from "react";
import ContentsTemplate from "../../template/ContentsTemplate";
import LevelTable from "../techstacks/LevelTable";
import data from "data/skillstackdata.json";

const TechStacks = () => {
  return (
    <ContentsTemplate
      title={{
        text: "Tech Stack",
        logo: { type: "icon", name: "📚" },
      }}
      contents={
        <div className="px-2">
          <LevelTable />
          <ContentsList list={data.list} badge />
        </div>
      }
    />
  );
};

export default TechStacks;
