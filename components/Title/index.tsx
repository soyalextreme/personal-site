import React from "react";
import { TFontSize } from "../../types/font";
import TitleContainer from "./styledComponents";


export interface TitleProps {
  size: TFontSize;
  text: string;
}

const Title: React.FunctionComponent<TitleProps> = ({ size, text }) => {
  return (
    <TitleContainer>
      {size === "big" && <h1>{text}</h1>}
      {size === "medium" && <h3>{text}</h3>}
      {size === "small" && <h5>{text}</h5>}
    </TitleContainer>
  );
};

export default Title;
