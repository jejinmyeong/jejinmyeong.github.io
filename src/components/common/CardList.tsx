import React from "react";
import { CardListItem } from ".";
import { ICardListComponent } from "./types";

const CardList = ({
  list,
  fr,
}: {
  list: ICardListComponent[];
  fr: Number;
}) => {
  const gridColsFr = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3"
  }
  return (
    <div className={`grid grid-cols-1 ${gridColsFr[fr as 2 | 3]} gap-4 p-2`}>
      {list.map((data, idx) => (
        <CardListItem
          key={idx}
          title={data.title}
          cover={data.cover}
          explain={data.explain}
        />
      ))}
    </div>
  );
};

export default CardList;
