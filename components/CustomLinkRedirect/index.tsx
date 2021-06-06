import React from "react";
import Link from "next/link";
import { TFontSize } from "../../types/font";
import styled from "@emotion/styled";
import { ColorsDark } from "../../constants/Colors";
import { CustomLinkRedirectContainer } from "./styledComponents";

export interface CustomLinkRedirectProps {
  size: TFontSize;
  text: string;
}

const CustomLinkRedirect: React.FunctionComponent<CustomLinkRedirectProps> = ({
  size,
  text,
}) => {
  const CustomA = styled.a`
    ${size === "big" && "font-size: 2rem;"}
    ${size === "medium" && "font-size: 1.5rem;"}
    ${size === "small" && "font-size: 1.3rem;"}
    color: ${ColorsDark.pink};
    font-family: "Fauna One", serif;
    font-weight: lighter;
    text-decoration: underline;
    text-align: center;
  `;
  return (
    <CustomLinkRedirectContainer>
      <Link href="/home">
        <CustomA>{text}</CustomA>
      </Link>
    </CustomLinkRedirectContainer>
  );
};

export default CustomLinkRedirect;
