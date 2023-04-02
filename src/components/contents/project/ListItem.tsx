import React from "react";
import { dotore, drawingdream, tooliv, portfolio } from "assets/images";
import { Period, Tag, Title, WebSite } from "../../common";
import { TitleInterface } from "components/common/types";

type ListItemPropsTypes = {
  project: ProjectTypes;
};

type ProjectTypes = {
  title: TitleInterface;
  description: string;
  cover: string;
  period: {
    startdate: string;
    enddate: string;
  };
  skill: string[];
  github: string;
  tag: string[];
  participants: number;
};

type coverImgTypes = "drawingdream" | "dotore" | "tooliv" | "portfolio";

const ListItem = ({ project }: ListItemPropsTypes) => {
  const { title, description, cover, period, skill, github, tag } = project;

  const coverImg = {
    drawingdream: drawingdream,
    dotore: dotore,
    tooliv: tooliv,
    portfolio: portfolio,
  };
  return (
    <div className="rounded-lg shadow-custom hover:bg-gray-100">
      <div className="overflow-hidden rounded-t-lg">
        <img
          className="object-cover h-48 sm:h-44 md:h-52 w-full hover:scale-110"
          alt="projectImg"
          src={coverImg[cover as coverImgTypes]}
        />
      </div>
      <div className="flex flex-col p-3 gap-1">
        <Title title={title} />
        {description}
        <div className="flex gap-1 flex-wrap">
          {skill.map((name, idx) => (
            <Tag key={idx} name={name} />
          ))}
        </div>
        <div className="flex gap-2 text-xs text-gray-400">
          <Period period={period} />
        </div>
        <WebSite website={github} />
        <div className="flex gap-1 flex-wrap">
          {tag.map((name, idx) => (
            <Tag key={idx} name={name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ListItem;
