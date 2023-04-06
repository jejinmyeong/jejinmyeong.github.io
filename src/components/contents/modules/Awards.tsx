import React from "react";
import { CardList } from "components/common";
import ContentsTemplate from "../../template/ContentsTemplate";
import data from "data/awardsdata.json";

const Awards = () => {
  return (
    <ContentsTemplate
      title={{
        text: "Awards",
        logo: {
          type: "icon",
          name: "🏆",
        },
      }}
      contents={<CardList list={data.list} fr={3} />}
    />
  );
};

export default Awards;
