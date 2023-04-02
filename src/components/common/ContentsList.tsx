import React from "react";
import { ContentsListItem } from ".";
import { IListComponent } from "./types";

const ContentsList = ({ list }: { list: IListComponent[] }) => {
  return (
    <div>
      {list.map((data, idx) => (
        <ContentsListItem key={idx} title={data.title} explain={data.explain} />
      ))}
    </div>
  );
};

export default ContentsList;
