import React from "react";
import { Link } from "assets/svg/Figures";

type WebSitePropsTypes = {
  website: string;
};

const WebSite = (props: WebSitePropsTypes) => {
  const { website } = props;
  const onClick = () => {
    window.open("https://www." + website);
  };
  return (
    <div
      className="inline-flex gap-1 px-1 py-1 items-center text-xs hover:bg-gray-200 hover:cursor-pointer rounded-md text-gray-400"
      onClick={onClick}
    >
      <Link />
      <div className="overflow-ellipsis whitespace-nowrap overflow-hidden">
        {website}
      </div>
    </div>
  );
};

export default WebSite;
