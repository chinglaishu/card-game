import {DefaultTheme} from "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    themeName: string;
    background: string;
    pageHeaderBackground: string;
    primary: string;
    onPrimary: string;
    secondary: string;
    onSecondary: string;
    text: string;
    title: string;
    subTitle: string;
    modalBackground: string;
  }
}

const lightTheme: DefaultTheme = {
  themeName: "light",
  background: "#7CB1EC",
  pageHeaderBackground: "#80BAFC",
  primary: "#76DFFB",
  onPrimary: "#FFFFFF",
  secondary: "#FBD676",
  onSecondary: "#FFFFFF",
  text: "#000000",
  title: "#000000",
  subTitle: "#24242480",
  modalBackground: "#FFFFFF",
};

const darkTheme: DefaultTheme = {
  themeName: "dark",
  background: "#000000",
  pageHeaderBackground: "#80BAFC",
  primary: "#65F0E6",
  onPrimary: "#FFFFFF",
  secondary: "#F2C354",
  onSecondary: "#FFFFFF",
  text: "#FFFFFF",
  title: "#FFFFFF",
  subTitle: "#FFFFFF",
  modalBackground: "#FFFFFF",
};

export {lightTheme, darkTheme};
