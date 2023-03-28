import React from "react";
import data from "data/projectdata.json";
import ListItem from "./ListItem";

const List = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-2">
      {data.list.map((project, idx) => (
        <ListItem key={idx} project={project} />
      ))}
    </div>
  );
};

export default List;
