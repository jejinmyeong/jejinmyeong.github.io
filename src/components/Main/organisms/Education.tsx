import { ContentsContainer, TextListContainer, Title } from "components/common";
import React from "react";
import EducationList from "./EducationList";

type Props = {
  data: any;
};

const Education = ({ data }: Props) => {
  return (
    <ContentsContainer>
      <Title size="medium">🎓 Education</Title>
      <TextListContainer>
        <EducationList data={data} />
      </TextListContainer>
    </ContentsContainer>
  );
};

export default Education;
