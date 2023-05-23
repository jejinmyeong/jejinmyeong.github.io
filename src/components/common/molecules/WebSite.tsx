import React from "react";
import { ReactComponent as Link } from "assets/svg/link.svg";
import classNames from "classnames";

type Props = {
  url: string
}

const WebSite = ({ url }: Props) => {
  const onClick = () => {
    window.open("https://www." + url, "_black", "noopener noreferrer");
  };

  const webSiteClasses = classNames([
    "p-1",
    "h-fit",
    "rounded-md",
    "text-gray-400",
    "text-xs",
    "overflow-ellipsis",
    "whitespace-nowrap",
    "overflow-hidden",
    "hover:bg-gray-200",
    "hover:cursor-pointer",
  ]);
  return (
    <span className={webSiteClasses} onClick={onClick}>
      <Link className="inline h-2 fill-gray-400" /> {url}
    </span>
  );
};

export default WebSite;
