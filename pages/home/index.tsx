import * as React from "react";

import useCreateBody from "../../hooks/useCreateBody";

//* Components
import Title from "../../components/Title";
import { ColorsDark } from "../../constants/Colors";
import LayoutContainer from "../../layout/LayoutContainer";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const { BodyPage, setColorBody } = useCreateBody(ColorsDark.background);

  return (
    <BodyPage>
      <LayoutContainer>
        <section
          onMouseEnter={() => setColorBody(ColorsDark.yellow)}
          onMouseLeave={() => setColorBody(ColorsDark.background)}
        >
          <Title text="Building the app" size="big" />
          <Title text="Coming soon..." size="medium" />
        </section>
      </LayoutContainer>
    </BodyPage>
  );
};

export default Home;
