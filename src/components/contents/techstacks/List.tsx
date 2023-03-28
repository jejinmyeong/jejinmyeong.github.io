import React from "react";
import data from "data/skillstackdata.json";
import ListItem from "./ListItem";

const List = () => {
  return (
    <div className="flex flex-col gap-1">
      {data.list.map((data, idx) => (
        <ListItem
          key={idx}
          title={data.title}
          logo={data.logo}
          skilllist={data.skilllist}
        />
      ))}
    </div>
  );
};

export default List;
