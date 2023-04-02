import React from "react";
import Template from "../../template/ContentsTemplate";
import List from "../project/List";

const Project = () => {
  return (
    <div>
      <Template
        title={{
          text: "Project",
          logo: { type: "icon", name: "💻" }
        }}
        contents={<List></List>}
      />
    </div>
  );
};

export default Project;
