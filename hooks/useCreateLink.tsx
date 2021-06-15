import styled from "@emotion/styled";
import { ColorsDark } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import { TFontSize } from "../types/font";
import LinkNext from "next/link";
import { useState } from "react";

const useCreateLink = (
  initRef: string,
  size: TFontSize,
  initColor: string,
  initText?: string,
  Component?: null
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
  `;

  const LinkComponent = () => (
    <LinkNext href={ref}>
      <Component />
    </LinkNext>
  );

  const Link = () => {
    if (Component === null) {
      return <LinkComponent />;
    }

    return (
      <LinkNext href={ref}>
        <LinkContent>{text}</LinkContent>
      </LinkNext>
    );
  };

  return {
    setColor,
    setRef,
    setText,
    Link,
  };
};

export default useCreateLink;
