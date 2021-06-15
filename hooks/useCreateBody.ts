// Custom hook returns the color component styled for the page

import { useState } from "react";
import styled from "@emotion/styled";

const useCreateBody = (colorInit) => {
  const [color, setColor] = useState(colorInit);

  const BodyPage = styled.body`
    background-color: ${color};
    width: 100vw;
    height: 100vh;
  `;

  return {
    color,
    setColor,
    BodyPage,
  };
};

export default useCreateBody;
