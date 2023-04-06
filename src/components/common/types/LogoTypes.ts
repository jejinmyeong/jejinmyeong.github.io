export type LogoComponent = {
  type: LogoType;
  name: LogoName;
}

export type LogoImageTypes =
  | "ssafy"
  | "hansung"
  | "tooliv"
  | "dotore"
  | "drawingdream"
  | "portfolio";

type LogoType = string;
type LogoName = string;