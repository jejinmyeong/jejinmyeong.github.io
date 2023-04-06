import { PeriodTypes } from "./ListTypes";
import TitleInterface from "./TitleTypes";

export interface ICardListComponent {
  title: TitleInterface;
  cover: Cover;
  explain: ProjectListItem & AwardListItem;
}

export interface ICardListItemTamplate
  extends Pick<ICardListComponent, "title" | "cover"> {
  children: JSX.Element;
}

interface ProjectListItem {
  description?: Description;
  period?: PeriodTypes;
  skill?: Skill;
  github?: Github;
  tag?: Tag;
  participants?: Participants;
}

interface AwardListItem {
  date?: string;
}

export type CoverImgTypes =
  | "tooliv"
  | "dotore"
  | "drawingdream"
  | "portfolio"
  | "project1"
  | "project2"
  | "project3"
  | "hansung1"
  | "hansung2";

type Description = string;
type Cover = string;
type Skill = string[];
type Github = string;
type Tag = string[];
type Participants = number;
