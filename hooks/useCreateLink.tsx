import styled from "@emotion/styled";
import { ColorsDark } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import { TFontSize } from "../types/font";
import LinkNext from "next/link";
import { useState } from "react";

const useCreateLink = (
  initRef: string,
  component: boolean,
  size?: TFontSize,
  initColor?: string,
  initText?: string
) => {
  const [ref, setRef] = useState(initRef);
  const [text, setText] = useState(initText);
  const [color, setColor] = useState(initColor);

  const LinkContent = styled.a`
    color: ${color};
    text-align: center;
    font-family: ${Fonts.primary};
    ${size === "big" && "font-size: 2rem;"}
    ${size === "medium" && "font-size: 1.5rem;"}
    ${size === "small" && "font-size: 1.3rem;"}
    color: ${ColorsDark.pink};
    font-family: "Fauna One", serif;
    font-weight: lighter;
    text-decoration: underline;
    text-align: center;
    cursor: pointer;
    
    :hover {
    ${size === "big" && "font-size: 2.2rem;"}
    ${size === "medium" && "font-size: 1.7rem;"}
    ${size === "small" && "font-size: 1.5rem;"}
    } 
  `;

  const LinkComponent = ({ children }) => (
    <LinkNext href={ref}>{children}</LinkNext>
  );

  const LinkText = () => (
    <LinkNext href={ref}>
      <LinkContent>{text}</LinkContent>
    </LinkNext>
  );

  const evalLink = () => (component ? LinkComponent : LinkText);

  return {
    setColor,
    setRef,
    setText,
    LinkText,
    LinkComponent,
  };
};

export default useCreateLink;
