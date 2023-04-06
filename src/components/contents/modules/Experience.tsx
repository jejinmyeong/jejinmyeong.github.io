import React from "react";
import ContentsTemplate from "../../template/ContentsTemplate";
import data from "data/experience.json";
import { ContentsList } from "components/common";

const Experience = () => {
  return (
    <ContentsTemplate
      title={{
        text: "Experience",
        logo: {
          type: "icon",
          name: "💼",
        },
      }}
      contents={<ContentsList list={data.list} />}
    />
  );
};

export default Experience;
