import classNames from "classnames";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const TextListContainer = ({ className, children }: Props) => {
  const TextListContainerClasses = classNames(
    "pt-4 border-t-2 border-gray-200",
    className,
  );
  return <div className={TextListContainerClasses}>{children}</div>;
};

export default TextListContainer;
