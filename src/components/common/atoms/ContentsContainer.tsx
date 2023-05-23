import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContentsContainer = ({ children }: Props) => {
  return <div className="flex flex-col gap-3">{children}</div>;
};

export default ContentsContainer;
