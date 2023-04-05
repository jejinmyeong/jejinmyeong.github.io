import { Title } from "components/common";
import { IListComponent, TitleInterface } from "components/common/types";
import React from "react";

const ListItemTemplate = ({
  title,
  badge,
  children,
}: {
  title: TitleInterface;
  badge?: boolean;
  children: JSX.Element;
}) => {
  return (
    <div
      className={`flex justify-between py-0.5 ${
        !badge && "hover:bg-gray-100 px-2 rounded-md flex-col sm:flex-row"
      }`}
    >
      <div className="whitespace-nowrap">
        <Title title={title} />
      </div>
      {children}
    </div>
  );
};

export default ListItemTemplate;
