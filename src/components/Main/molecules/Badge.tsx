import React from "react";
import { ReactComponent as Circle } from "assets/svg/circle.svg";
import classNames from "classnames";

type Props = {
  level: number;
  name: string;
};

const Badge = ({ level, name }: Props) => {
  const circleClasses = classNames("inline", "h-2.5", {
    "fill-blue-200": level === 1,
    "fill-blue-300": level === 2,
    "fill-blue-400": level === 3,
    "fill-blue-500": level === 4,
    "fill-blue-600": level === 5,
  });

  return (
    <span className="flex items-center gap-1 p-1 bg-gray-200 rounded-md text-xxs h-fit w-fit">
      <Circle className={circleClasses} /> {name}
    </span>
  );
};

export default Badge;
