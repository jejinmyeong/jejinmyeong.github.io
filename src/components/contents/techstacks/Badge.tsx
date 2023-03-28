import React from "react";
import { Circle } from "assets/svg/Figures";

type BadgePorpsType = {
  level: string;
  skill: string;
};

const Badge = ({ level = "lv3", skill }: BadgePorpsType) => {
  return (
    <span className="bg-gray-200 p-1 flex gap-1 items-center rounded-md text-xxs ">
      <Circle color={level} /> {skill}
    </span>
  );
};

export default Badge;
