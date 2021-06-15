import * as React from "react";
import styled from "@emotion/styled";
import { ColorsDark } from "../../constants/Colors";

export interface LoadingProps {}

const ViewPage = styled.div`
  background-color: ${ColorsDark.background};
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;

  .lds-ripple {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-ripple div {
    position: absolute;
    border: 4px solid #bf1363;
    opacity: 1;
    border-radius: 50%;
    animation: lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }
  .lds-ripple div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes lds-ripple {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;

const Loading: React.FunctionComponent<LoadingProps> = () => {
  return (
    <ViewPage>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </ViewPage>
  );
};

export default Loading;
