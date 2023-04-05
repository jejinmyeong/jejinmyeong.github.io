import Badge from "components/contents/techstacks/Badge";
import React from "react";
import { Period, WebSite } from ".";
import { OtherListItem } from "./types";

const ContentsListItem = ({ explain }: { explain: OtherListItem }) => {
  const { website, period } = explain;

  return (
    <div className="flex gap-4">
      {website && <WebSite website={website} />}
      {period && <Period period={period} />}
    </div>
  );
};

export default ContentsListItem;
