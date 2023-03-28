import React from "react";
import { Logo } from ".";

type Titletypes = {
  title: string;
  logo: {
    type: string;
    name: string;
  };
  header?: boolean;
};

const Title = ({ title, logo, header }: Titletypes) => {
  const large = "text-2xl md:text-3xl";

  return (
    <div className={`flex gap-1 items-center ${header && large}`}>
      <Logo name={logo.name} type={logo.type} />
      {title}
    </div>
  );
};

export default Title;
