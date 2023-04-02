import React from "react";
import Template from "../../template/ContentsTemplate";
import data from "data/educationdata.json";
import { ContentsList } from "components/common";

const Education = () => {
  return (
    <Template
      title={{
        text: "Education",
        logo: { type: "icon", name: "🎓" },
      }}
      contents={<ContentsList list={data.list}/>}
    />
  );
};

export default Education;
