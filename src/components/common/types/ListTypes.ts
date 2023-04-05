import { TitleInterface } from ".";

export default interface IListComponent {
  title: TitleInterface;
  explain: TechStackListItem | OtherListItem;
}

export type TechStackListItem = {
  skilllist: SkillListTypes[];
};

export type OtherListItem = {
  website: OtherWebSite;
  period: PeriodTypes;
};

export type SkillListTypes = {
  level: SkillListLevel;
  name: SkillListName;
};

export type PeriodTypes = {
  startdate: OtherStartDate;
  enddate: OtherEndDate;
};

export type OtherWebSite = string;
type OtherStartDate = string;
type OtherEndDate = string;

type SkillListLevel = string;
type SkillListName = string;
