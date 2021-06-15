import React from "react";
import Image from "next/image";
import useCreateLink from "../hooks/useCreateLink";
import styled from "@emotion/styled";

export interface HeaderProps {}

const HeaderContainer = styled.header`
  position: fixed;
  top: 5%;
  left: 5%;

  img:hover {
    animation: rotateIcon 300ms ease-in forwards;
  }

  @keyframes rotateIcon {
    to {
      transform: scale(1.2) rotate(90deg);
    }
  }
`;

const Header: React.FunctionComponent<HeaderProps> = () => {
  const { LinkComponent } = useCreateLink("/hi", true);
  return (
    <HeaderContainer>
      <LinkComponent>
        <Image src="/images/manita.png" alt="manita" height={40} width={40} />
      </LinkComponent>
    </HeaderContainer>
  );
};

export default Header;
