import React from "react";
import { Period, Title, WebSite } from ".";

type ListItemPropsType = {
  list: EduListTypes;
};

type EduListTypes = {
  title: string;
  logo: {
    type: string;
    name: string;
  };
  website: string;
  startdate: string;
  enddate: string;
};

const ContentsListItem = ({ list }: ListItemPropsType) => {
  const { title, logo, website, startdate, enddate } = list;

  return (
    <div className="flex flex-col sm:flex-row justify-between hover:bg-gray-100 py-1 px-2 rounded-lg">
      <div className="flex gap-1 items-center whitespace-nowrap">
        <Title title={title} logo={logo} />
      </div>
      <div className="flex gap-4">
        <WebSite website={website} />
        <Period startdate={startdate} enddate={enddate} />
      </div>
    </div>
  );
};

export default ContentsListItem;
