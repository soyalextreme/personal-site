// Custom hook returns the color component styled for the page

import { useState } from "react";
import styled from "@emotion/styled";

const useCreateBody = (colorInit) => {
  const [colorBody, setColorBody] = useState(colorInit);

  const BodyPage = styled.body`
    background-color: ${colorBody};
    width: 100vw;
    height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0;
  `;

  return {
    colorBody,
    setColorBody,
    BodyPage,
  };
};

export default useCreateBody;
