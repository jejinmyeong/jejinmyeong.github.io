import React from "react";
import { ContentsListItem } from ".";

type ListPropsTypes = {
  list: any[];
};

const ContentsList = ({ list }: ListPropsTypes) => {
  return (
    <div>
      {list.map((data, idx) => (
        <ContentsListItem key={idx} list={data} />
      ))}
    </div>
  );
};

export default ContentsList;
