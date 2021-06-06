import styled from "@emotion/styled";
import { Fragment } from "react";
import { ColorsDark } from "../../constants/Colors";

const TitleContainer = styled.div`
  h1,
  h3,
  h5 {
    font-family: "Oswald", sans-serif;
  }

  h1 {
    color: ${ColorsDark.yellow};
    font-size: 5rem;
  }

  h3 {
    font-size: 3rem;
    color: ${ColorsDark.blueLight};
  }
`;

export default TitleContainer;
