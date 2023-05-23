import { Tag } from "components/common";
import React from "react";

type Props = {
  skilllist: string[];
};

const SkillList = ({ skilllist }: Props) => {
  return (
    <div className="flex flex-wrap gap-1">
      {skilllist.map((skill, idx) => (
        <Tag key={idx}>{skill}</Tag>
      ))}
    </div>
  );
};

export default SkillList;
