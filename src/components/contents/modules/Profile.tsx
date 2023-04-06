import React from "react";
import { profileimg } from "assets/images";

const Profile = () => {
  return (
    <div>
      <img
        className="h-32 w-32 md:h-48 md:w-48 object-cover"
        alt="profile"
        src={profileimg}
      />
      <div className="text-4xl pt-4">제진명 | Portfolio</div>
    </div>
  );
};

export default Profile;
