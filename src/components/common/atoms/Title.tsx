import React from "react";
import classNames from "classnames";

type Props = {
  children: string;
  size?: "large" | "medium" | "small";
};

const Title = ({ children, size = "small" }: Props) => {
  const titleClasses = classNames(
    "whitespace-nowrap",
    {
      "text-4xl": size === "large",
      "text-2xl": size === "medium",
      "text-lg": size === "small",
    },
  );

  return <div className={titleClasses}>{children}</div>;
};

export default Title;
