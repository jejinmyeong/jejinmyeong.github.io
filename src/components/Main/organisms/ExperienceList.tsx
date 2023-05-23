import React from "react";
import TextListItem from "./TextListItem";

type Props = {
  data: any;
};

const ExperienceList = ({ data }: Props) => {
  return (
    <div>
      {data.list.map((item: any, idx: number) => (
        <TextListItem
          className="flex flex-col justify-between px-2 py-0.5 rounded-md hover:bg-gray-100 sm:flex-row"
          key={idx}
        >
          <TextListItem.Title>{item.title}</TextListItem.Title>
          <div className="flex items-center gap-4">
            <TextListItem.WebSite url={item.explain.website} />
            <TextListItem.Period
              startdate={item.explain.startdate}
              enddate={item.explain.enddate}
            />
          </div>
        </TextListItem>
      ))}
    </div>
  );
};

export default ExperienceList;
