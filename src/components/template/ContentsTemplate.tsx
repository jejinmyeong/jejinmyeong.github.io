import React from "react";
import { HorizentalLine, Title } from "../common";

type ContentsTemplateTypes = {
  title: string;
  logo: {
    type: string;
    name: string;
  };
  contents: JSX.Element;
};

const ContentsTemplate = ({ title, logo, contents }: ContentsTemplateTypes) => {
  return (
    <div className="flex flex-col gap-3">
      <Title title={title} logo={logo} header />
      <HorizentalLine />
      {contents}
    </div>
  );
};

export default ContentsTemplate;
