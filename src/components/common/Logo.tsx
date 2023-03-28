import React from "react";
import {
  ssafy,
  hansung,
  toolivlogo,
  dotorelogo,
  drawingdreamlogo,
  portfoliologo,
} from "assets/images";

type LogoPropsTypes = {
  type: string;
  name: string;
};

type LogoImageTypes =
  | "ssafy"
  | "hansung"
  | "tooliv"
  | "dotore"
  | "drawingdream"
  | "portfolio";

const Logo = ({ type, name }: LogoPropsTypes) => {
  const src = {
    ssafy: ssafy,
    hansung: hansung,
    tooliv: toolivlogo,
    dotore: dotorelogo,
    drawingdream: drawingdreamlogo,
    portfolio: portfoliologo,
  };
  return (
    <>
      {type === "icon" ? (
        <span>{name}</span>
      ) : (
        <img className="h-5 w-5" alt="logo" src={src[name as LogoImageTypes]} />
      )}
    </>
  );
};

export default Logo;
