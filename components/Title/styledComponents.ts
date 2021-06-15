import styled from "@emotion/styled";
import { Fragment } from "react";
import { ColorsDark } from "../../constants/Colors";

const TitleContainer = styled.div`
  h1,
  h3,
  h5 {
    font-family: "Oswald", sans-serif;
    text-align: center;
  }

  h1 {
    color: ${ColorsDark.pink};
    font-size: 5rem;
  }

  h3 {
    font-size: 3rem;
    color: ${ColorsDark.blue};
  }
`;

export default TitleContainer;
