import { ContentsContainer, Title } from "components/common";
import React from "react";
import ProjectList from "./ProjectList";

type Props = {
  data: any;
};

const Project = ({ data }: Props) => {
  return (
    <ContentsContainer>
      <Title size="medium">💻 Project</Title>
      <ProjectList data={data} />
    </ContentsContainer>
  );
};

export default Project;
