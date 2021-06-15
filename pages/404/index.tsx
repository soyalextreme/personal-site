import * as React from "react";

import Title from "../../components/Title";
import CustomText from "../../components/CustomText";
import useCreateBody from "../../hooks/useCreateBody";
import { ColorsDark } from "../../constants/Colors";
import useCreateLink from "../../hooks/useCreateLink";

export interface custom404props {}

const custom404: React.FunctionComponent<custom404props> = () => {
  const { BodyPage } = useCreateBody(ColorsDark.background);
  const { Link } = useCreateLink(
    "/home",
    "medium",
    ColorsDark.pink,
    "Lets go to home!"
  );

  return (
    <BodyPage>
      <section>
        <Title size="big" text="404" />
        <CustomText size="big" text="We cannot find the page your looking" />
        <Link />
      </section>
    </BodyPage>
  );
};

export default custom404;
