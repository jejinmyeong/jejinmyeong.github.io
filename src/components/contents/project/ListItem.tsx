import React from "react";
import { dotore, drawingdream, tooliv, portfolio } from "assets/images";
import { Period, Tag, Title, WebSite } from "../../common";

type ListItemPropsTypes = {
  project: ProjectTypes;
};

type ProjectTypes = {
  title: string;
  description: string;
  cover: string;
  logo: {
    type: string;
    name: string;
  };
  startdate: string;
  enddate: string;
  skill: string[];
  github: string;
  tag: string[];
  participants: number;
};

type coverImgTypes = "drawingdream" | "dotore" | "tooliv" | "portfolio";

const ListItem = ({ project }: ListItemPropsTypes) => {
  const {
    title,
    description,
    cover,
    logo,
    startdate,
    enddate,
    skill,
    github,
    tag,
  } = project;

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
        <Title logo={logo} title={title} />
        {description}
        <div className="flex gap-1 flex-wrap">
          {skill.map((name, idx) => (
            <Tag key={idx} name={name} />
          ))}
        </div>
        <div className="flex gap-2 text-xs text-gray-400">
          <Period startdate={startdate} enddate={enddate} />
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
