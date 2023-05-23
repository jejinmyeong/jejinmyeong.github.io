import { Period, Title, WebSite } from "components/common";
import React from "react";
import classNames from "classnames";
import BadgeList from "./BadgeList";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const TextListItem = ({ className, children }: Props) => {

  const TextListItemClasses = classNames("flex justify-between", className);

  return (
    <div className={TextListItemClasses}>
      {children}
    </div>
  );
};

TextListItem.Title = Title;
TextListItem.BadgeList = BadgeList;
TextListItem.WebSite = WebSite;
TextListItem.Period = Period;

export default TextListItem;
