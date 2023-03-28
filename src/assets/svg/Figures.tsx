import React from "react";

export enum LevelColors {
  lv1 = "fill-blue-200",
  lv2 = "fill-blue-300",
  lv3 = "fill-blue-400",
  lv4 = "fill-blue-500",
  lv5 = "fill-blue-600",
}

type LevelType = "lv1" | "lv2" | "lv3" | "lv4" | "lv5";

type FigurePropsType = {
  color: string;
};

export const Circle = ({ color }: FigurePropsType) => {
  return (
    <svg
      className={`inline h-2.5 ${LevelColors[color as LevelType]}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512z" />
    </svg>
  );
};

export const Square = ({ color }: FigurePropsType) => {
  return (
    <svg
      className={`inline h-3 ${LevelColors[color as LevelType]}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
    >
      <path d="M0 96C0 60.7 28.7 32 64 32H384c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96z" />
    </svg>
  );
};

export const Link = () => {
  return (
    <svg className="inline h-2 fill-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
      <path d="M562.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L405.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C189.5 251.2 196 330 246 380c56.5 56.5 148 56.5 204.5 0L562.8 267.7zM43.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C57 372 57 321 88.5 289.5L200.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C416.5 260.8 410 182 360 132c-56.5-56.5-148-56.5-204.5 0L43.2 244.3z" />
    </svg>
  );
};
