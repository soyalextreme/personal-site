import React from "react";
import { TFontSize } from "../../types/font";
import styled from "@emotion/styled";
import { ColorsDark } from "../../constants/Colors";

export interface CustomTextProps {
  size: TFontSize;
  text: string;
}

const CustomText: React.FunctionComponent<CustomTextProps> = ({
  size,
  text,
}) => {
  const CustomP = styled.p`
    ${size === "big" && "font-size: 2rem;"}
    ${size === "medium" && "font-size: 1.5rem;"}
    ${size === "small" && "font-size: 1rem;"}
    color: ${ColorsDark.blue};
    font-family: "Fauna One", serif;
    font-weight: lighter;
    text-align: center;
  `;

  return (
    <>
      <CustomP>{text}</CustomP>
    </>
  );
};

export default CustomText;
