import * as React from "react";
import Title from "../../components/Title";
import CustomText from "../../components/CustomText";

import { Body } from "../../styles/global";
import CustomLinkRedirect from "../../components/CustomLinkRedirect";
const BodyPage = Body("#232323");

export interface custom404props {}

const custom404: React.FunctionComponent<custom404props> = () => {
  return (
    <BodyPage>
      <Title size="big" text="404" />
      <CustomText size="big" text="We cannot find the page your looking" />
      <CustomLinkRedirect size="small" text="Lets go to home" />
    </BodyPage>
  );
};

export default custom404;
