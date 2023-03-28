import React from "react";
import data from "data/awardsdata.json";
import ListItem from "./ListItem";

const List = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {data.list.map((award, idx) => (
        <ListItem key={idx} award={award} />
      ))}
    </div>
  );
};

export default List;
