import React from "react";
import { ContentsListItem } from ".";
import { IListComponent, OtherListItem, TechStackListItem } from "./types";
import ListItemTemplate from "components/template/ListItemTemplate";
import BadgeListItem from "./BadgeListItem";

const ContentsList = ({
  list,
  badge,
}: {
  list: IListComponent[];
  badge?: boolean;
}) => {
  return (
    <div>
      {list.map((data, idx) => (
        <ListItemTemplate key={idx} title={data.title} badge={badge}>
          {badge ? (
            <BadgeListItem explain={data.explain as TechStackListItem} />
          ) : (
            <ContentsListItem explain={data.explain as OtherListItem} />
          )}
        </ListItemTemplate>
      ))}
    </div>
  );
};

export default ContentsList;
