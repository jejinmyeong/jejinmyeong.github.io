import React from "react";
import classNames from "classnames";

type Props = {
  children: string;
};

type TagNameTypes =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Next"
  | "Recoil"
  | "Emotion"
  | "Java"
  | "Spring"
  | "Electron"
  | "WebRTC"
  | "Solidity"
  | "Storybook"
  | "Remix"
  | "Redux"
  | "styled-components"
  | "Tailwind CSS";

const Tag = ({ children }: Props) => {
  const Colors = {
    JavaScript: "text-yellow-500 bg-yellow-100",
    TypeScript: "text-blue-500 bg-blue-100",
    React: "text-sky-500 bg-sky-100",
    Next: "text-gray-500 bg-gray-100",
    Recoil: "text-stone-500 bg-stone-100",
    Emotion: "text-pink-500 bg-pink-100",
    Java: "text-red-500 bg-red-100",
    Spring: "text-green-500 bg-green-100",
    Electron: "text-indigo-500 bg-indigo-100",
    WebRTC: "text-amber-500 bg-amber-100",
    Solidity: "text-neutral-500 bg-neutral-100",
    Storybook: "text-rose-500 bg-rose-100",
    Remix: "text-zinc-500 bg-zinc-100",
    Redux: "text-purple-500 bg-purple-100",
    "styled-components": "text-rose-500 bg-rose-100",
    "Tailwind CSS": "text-sky-500 bg-sky-100",
    default: "text-gray-500 border border-gray-400",
  };

  const tagClasses = classNames(
    "text-xxs",
    "p-0.5",
    "rounded-sm",
    Object.keys(Colors).includes(children)
      ? Colors[children as TagNameTypes]
      : Colors.default,
  );

  return <span className={tagClasses}>{children}</span>;
};

export default Tag;
