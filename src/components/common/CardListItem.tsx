import React from "react";
import {
  dotore,
  drawingdream,
  hansung1,
  hansung2,
  portfolio,
  project1,
  project2,
  project3,
  tooliv,
} from "assets/images";
import { CoverImgTypes, ICardListComponent } from "./types";
import { Tag, WebSite, Title, Period } from ".";

const CardListItem = ({ title, cover, explain }: ICardListComponent) => {
  const { date, skill, period, github, tag } = explain;
  const coverImg = {
    project1: project1,
    project2: project2,
    project3: project3,
    hansung1: hansung1,
    hansung2: hansung2,
    drawingdream: drawingdream,
    dotore: dotore,
    tooliv: tooliv,
    portfolio: portfolio,
  };
  return (
    <div className="rounded-lg shadow-custom hover:bg-gray-100 overflow-hidden">
      <img
        className="object-contain h-64 m-auto"
        alt="award"
        src={coverImg[cover as CoverImgTypes]}
      />
      <div className="flex flex-col p-3 gap-1">
        <Title title={title} />
        {date && <div className="text-sm text-gray-400">{date}</div>}
        {skill && (
          <div className="flex gap-1 flex-wrap">
            {skill.map((name, idx) => (
              <Tag key={idx} name={name} />
            ))}
          </div>
        )}
        {period && (
          <div className="flex gap-2 text-xs text-gray-400">
            <Period period={period} />
          </div>
        )}
        {github && <WebSite website={github} />}
        {tag && (
          <div className="flex gap-1 flex-wrap">
            {tag.map((name, idx) => (
              <Tag key={idx} name={name} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CardListItem;
