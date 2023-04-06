import React from "react";
import {
  ssafy,
  hansung,
  toolivlogo,
  dotorelogo,
  drawingdreamlogo,
  portfoliologo,
} from "assets/images";
import { LogoComponent, LogoImageTypes } from "./types";

const Logo = ({ type, name }: LogoComponent) => {
  const logoImg = {
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
        <img
          className="h-5 w-5"
          alt="logo"
          src={logoImg[name as LogoImageTypes]}
        />
      )}
    </>
  );
};

export default Logo;
