import React from "react";
import classNames from "classnames";
import { Badge } from "../molecules";

type Props = {
  className?: string;
  explain: {
    skilllist: {name: string, level: number} [];
  };
};

const BadgeList = ({ className, explain }: Props) => {
  const { skilllist } = explain;

  const BadgeListClasses = classNames("flex gap-1 flex-wrap", className);

  return (
    <div className={BadgeListClasses}>
      {skilllist.map((skill, idx) => (
        <Badge key={idx} name={skill.name} level={skill.level} />
      ))}
    </div>
  );
};

export default BadgeList;
