import { ContentsContainer, TextListContainer, Title } from "components/common";
import React from "react";
import TextList from "./TechStackList";
import { LevelTable } from "../molecules";

type Props = {
  data: any;
};

const TechStack = ({ data }: Props) => {
  return (
    <ContentsContainer>
      <Title size="medium">📚 Tech Stack</Title>
      <TextListContainer className="pl-2 pr-2">
        <LevelTable classname="justify-end mb-2" />
        <TextList data={data} />
      </TextListContainer>
    </ContentsContainer>
  );
};

export default TechStack;
