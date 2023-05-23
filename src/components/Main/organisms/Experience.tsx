import { ContentsContainer, TextListContainer, Title } from 'components/common';
import React from 'react';
import ExperienceList from './ExperienceList';

type Props = {
  data: any;
}

const Experience = ({ data }: Props) => {
  return (
    <ContentsContainer>
      <Title size='medium'>💼 Experience</Title>
      <TextListContainer>
        <ExperienceList data={data} />
      </TextListContainer>
    </ContentsContainer>
  );
};

export default Experience;