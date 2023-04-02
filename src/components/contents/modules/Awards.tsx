import React from "react";
import ContentsTemplate from "../../template/ContentsTemplate";
import List from "../awards/List";

const Awards = () => {
  return (
    <ContentsTemplate
      title={{
        text: "Awards",
        logo: {
          type: "icon",
          name: "🏆",
        }
      }}
      contents={<List></List>}
    />
  );
};

export default Awards;
