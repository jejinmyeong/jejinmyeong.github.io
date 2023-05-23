import React from "react";
import CardListItem from "./CardListItem";

type Props = {
  data: any;
};

const AwardList = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-2 pt-4 border-t-2 border-gray-200 sm:grid-cols-2 lg:grid-cols-3">
      {data.list.map((item: any, idx: number) => (
        <CardListItem key={idx}>
          <img
            className="object-contain h-64 m-auto"
            alt="cover"
            src={item.cover}
          />
          <div className="flex flex-col gap-1 p-3">
            <CardListItem.Title size="small">{item.title}</CardListItem.Title>
            <CardListItem.Period enddate={item.explain.enddate} />
          </div>
        </CardListItem>
      ))}
    </div>
  );
};

export default AwardList;
