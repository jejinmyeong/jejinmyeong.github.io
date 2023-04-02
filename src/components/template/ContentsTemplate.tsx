import { TitleInterface } from "components/common/types";
import React from "react";
import { Title } from "../common";

const ContentsTemplate = ({
  title,
  contents,
}: {
  title: TitleInterface;
  contents: JSX.Element;
}) => {
  return (
    <div className="flex flex-col gap-3">
      <Title title={title} header/>
      {contents}
    </div>
  );
};

export default ContentsTemplate;
