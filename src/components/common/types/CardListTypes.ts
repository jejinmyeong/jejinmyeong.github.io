import { PeriodTypes } from "./ListTypes";
import TitleInterface from "./TitleTypes";

export default interface CardListItem {
  title: TitleInterface;
  cover: Cover;
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

type Description = string;
type Cover = string;
type Skill = string[];
type Github = string;
type Tag = string;
type Participants = number;
