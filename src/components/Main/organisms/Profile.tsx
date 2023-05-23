import React from "react";
import { profileimg } from "assets/images";
import { ContentsContainer, Title } from "components/common";

const Profile = () => {
  return (
    <ContentsContainer>
      <img
        className="object-cover w-32 h-32 md:h-48 md:w-48"
        alt="profile"
        src={profileimg}
      />
      <Title size="large">제진명 | Portfolio</Title>
    </ContentsContainer>
  );
};

export default Profile;
