import React from "react";
import { Circle } from "assets/svg/Figures";
import { SkillListTypes } from "components/common/types";

const Badge = ({ level = "lv3", name }: SkillListTypes) => {
  return (
    <span className="bg-gray-200 h-5 p-1 flex gap-1 items-center rounded-md text-xxs ">
      <Circle color={level} /> {name}
    </span>
  );
};

export default Badge;
