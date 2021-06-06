import * as React from "react";

//* styled components
import { Body } from "../../styles/global";
const BodyPage = Body("#232323");
import { Home__Main } from "../../styles/pages/HomeStyledComponents";

//* Components
import Title from "../../components/Title";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <BodyPage>
      <Home__Main>
          <Title text="Building the app" size="big" />
          <Title text="Coming soon..." size="medium" />
      </Home__Main>
    </BodyPage>
  );
};

export default Home;
