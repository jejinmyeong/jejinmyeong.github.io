import React from "react";
import { Title } from "../../common";
import {
  project1,
  project2,
  project3,
  hansung1,
  hansung2,
} from "assets/images";

type ListItemPropsTypes = {
  award: ListItemTypes;
};

type ListItemTypes = {
  title: string;
  logo: {
    type: string;
    name: string;
  };
  date: string;
  img: string;
};

type coverImgTypes =
  | "project1"
  | "project2"
  | "project3"
  | "hansung1"
  | "hansung2";

const ListItem = ({ award }: ListItemPropsTypes) => {
  const { title, logo, date, img } = award;
  const coverImg = {
    project1: project1,
    project2: project2,
    project3: project3,
    hansung1: hansung1,
    hansung2: hansung2,
  };
  return (
    <div className="rounded-lg shadow-custom hover:bg-gray-100 overflow-hidden">
      <img
        className="object-contain h-64 m-auto"
        alt="award"
        src={coverImg[img as coverImgTypes]}
      />
      <div className="flex flex-col p-3 gap-1">
        <Title title={title} logo={logo} />
        <div className="text-sm text-gray-400">{date}</div>
      </div>
    </div>
  );
};

export default ListItem;
