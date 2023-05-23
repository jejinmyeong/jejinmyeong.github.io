import { Period, Tag, Title, WebSite } from "components/common";
import React, { HTMLAttributes } from "react";
import { SkillList } from "../molecules";

interface Props extends HTMLAttributes<HTMLDivElement> {
};

const CardListItem = ({ children }: Props) => {
  return (
    <div className="rounded-lg shadow-custom hover:bg-gray-100">{children}</div>
  );
};

CardListItem.Title = Title;
CardListItem.SkillList = SkillList;
CardListItem.Period = Period;
CardListItem.WebSite = WebSite;
CardListItem.Tag = Tag;

export default CardListItem;
