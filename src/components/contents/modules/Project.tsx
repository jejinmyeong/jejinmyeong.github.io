import React from "react";
import { CardList } from "components/common";
import ContentsTemplate from "../../template/ContentsTemplate";
import data from 'data/projectdata.json'

const Project = () => {
  return (
    <div>
      <ContentsTemplate
        title={{
          text: "Project",
          logo: { type: "icon", name: "💻" }
        }}
        contents={<CardList list={data.list} fr={2}/>}
      />
    </div>
  );
};

export default Project;
