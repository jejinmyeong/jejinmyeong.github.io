import React from 'react';
import AwardList from './AwardList';
import { ContentsContainer, Title } from 'components/common';

type Props = {
  data: any;
}

const Award = ({ data }: Props) => {
  return (
    <ContentsContainer>
      <Title size='medium'>🏆 Awards</Title>
      <AwardList data={data} />
    </ContentsContainer>
  );
};

export default Award;