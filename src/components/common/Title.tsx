import React from "react";
import { Logo } from ".";
import { TitleInterface } from "./types";

const Title = ({
  title,
  header,
}: {
  title: TitleInterface;
  header?: boolean;
}) => {
  const { text, logo } = title;
  const large = "text-2xl md:text-3xl border-b-2 pb-2";

  return (
    <div className={`flex gap-1 items-center ${header && large}`}>
      <Logo name={logo.name} type={logo.type} />
      {text}
    </div>
  );
};

export default Title;
