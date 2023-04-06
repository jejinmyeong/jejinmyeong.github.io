import React from "react";
import ContentsTemplate from "../../template/ContentsTemplate";
import data from "data/educationdata.json";
import { ContentsList } from "components/common";

const Education = () => {
  return (
    <ContentsTemplate
      title={{
        text: "Education",
        logo: { type: "icon", name: "🎓" },
      }}
      contents={<ContentsList list={data.list} />}
    />
  );
};

export default Education;
