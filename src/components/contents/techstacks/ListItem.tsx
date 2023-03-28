import React from "react";
import { Title } from "../../common";
import Badge from "./Badge";

type ListItemPropsTypes = {
  title: string;
  logo: {
    type: string,
    name: string
  }
  skilllist: SkillListTypes[];
};

type SkillListTypes = {
  level: string;
  name: string;
};

const ListItem = ({ title, logo, skilllist }: ListItemPropsTypes) => {
  return (
    <div className="flex justify-between gap-2">
      <div className="whitespace-nowrap">
        <Title logo={logo} title={title} />
      </div>
      <div className="flex gap-1 flex-wrap justify-end">
        {skilllist.map((skill, idx) => (
          <Badge key={idx} skill={skill.name} level={skill.level} />
        ))}
      </div>
    </div>
  );
};

export default ListItem;
