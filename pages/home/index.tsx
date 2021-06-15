import * as React from "react";

import useCreateBody from "../../hooks/useCreateBody";

//* Components
import Title from "../../components/Title";
import { ColorsDark } from "../../constants/Colors";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const { BodyPage } = useCreateBody(ColorsDark.background);

  return (
    <BodyPage>
      <Title text="Building the app" size="big" />
      <Title text="Coming soon..." size="medium" />
    </BodyPage>
  );
};

export default Home;
