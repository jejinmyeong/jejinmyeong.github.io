import React from "react";
import Badge from "components/contents/techstacks/Badge";
import { TechStackListItem } from "./types";

const BadgeListItem = ({ explain }: { explain: TechStackListItem }) => {
  const { skilllist } = explain;

  return (
    <div className="flex gap-1 flex-wrap justify-end">
      {skilllist.map((skill, idx) => (
        <Badge key={idx} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default BadgeListItem;
