import React from "react";
import TitleContainer from "./styledComponents";

export type TSize = "big" | "medium" | "small";

export interface TitleProps {
  size: TSize;
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
