import Badge from "components/contents/techstacks/Badge";
import React from "react";
import { Period, Title, WebSite } from ".";
import { IListComponent } from "./types";

const ContentsListItem = ({ title, explain }: IListComponent) => {
  const { skilllist, website, period } = explain;

  return (
    <div
      className={`flex justify-between py-0.5 ${
        !skilllist && "hover:bg-gray-100 px-2 rounded-md flex-col sm:flex-row"
      }`}
    >
      <div className="whitespace-nowrap">
        <Title title={title} />
      </div>
      {skilllist && (
        <div className="flex gap-1 flex-wrap justify-end">
          {skilllist.map((skill, idx) => (
            <Badge key={idx} name={skill.name} level={skill.level} />
          ))}
        </div>
      )}
      {(website || period) && (
        <div className="flex gap-4">
          {website && <WebSite website={website} />}
          {period && <Period period={period} />}
        </div>
      )}
    </div>
  );
};

export default ContentsListItem;
