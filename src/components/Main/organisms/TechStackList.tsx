import React from "react";
import TextListItem from "./TextListItem";

type Props = {
  data: any;
};

const TechStackList = ({ data }: Props) => {
  return (
    <div>
      {data.list.map((item: any, idx: number) => (
        <TextListItem key={idx}>
          <TextListItem.Title>{item.title}</TextListItem.Title>
          <TextListItem.BadgeList
            className="justify-end"
            explain={item.explain}
          />
        </TextListItem>
      ))}
    </div>
  );
};

export default TechStackList;
