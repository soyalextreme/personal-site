import React from "react";
import Header from "./Header";

export interface LayoutContainerProps {}

const LayoutContainer: React.FunctionComponent<LayoutContainerProps> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default LayoutContainer;
