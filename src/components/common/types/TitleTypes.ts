import { LogoComponent } from ".";

export default interface TitleInterface {
  text: TitleTextType,
  logo: LogoComponent,
}

type TitleTextType = string;