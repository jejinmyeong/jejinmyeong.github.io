import React from "react";
import CardListItem from "./CardListItem";

type Props = {
  data: any;
};

const ProjectList = ({ data }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4 p-2 sm:grid-cols-2">
      {data.list.map((item: any, idx: number) => (
        <CardListItem key={idx}>
          <div className="overflow-hidden">
            <img
              className="object-cover w-full h-52 hover:scale-110"
              src={item.cover}
              alt="cover"
            />
          </div>
          <div className="flex flex-col gap-1 p-3">
            <CardListItem.Title>{item.title}</CardListItem.Title>
            <CardListItem.SkillList skilllist={item.explain.skill} />
            <CardListItem.Period
              startdate={item.explain.startdate}
              enddate={item.explain.enddate}
            />
            <CardListItem.WebSite url={item.explain.github} />
            <CardListItem.SkillList skilllist={item.explain.tag} />
          </div>
        </CardListItem>
      ))}
    </div>
  );
};

export default ProjectList;
