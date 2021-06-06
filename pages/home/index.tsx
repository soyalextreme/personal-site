import * as React from "react";
import { Colors } from "../../constants/Colors";

//? styled components
import { Body, Link } from "../../styles/index.style";
const BodyPage = Body(Colors.dark);

import Styled from "./index.styles";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  return (
    <BodyPage>
      <Styled.MainSection>
        <h1>Building the app.</h1>
        <h3>Coming soon... </h3>
        {/* <article className="content-main">
          <h1>Alejandro Andrade Soriano</h1>
          <h2>Self-Tought Software Engineer</h2>
          <p>Im from Mexico 🇲🇽</p>
          <i className="fab fa-github" color="red"></i>
          <i className="fab fa-instagram" color="white"></i>
          <br />
          <Link href="#" style={{ textAlign: "center" }}>
            More about me!
          </Link>
        </article> */}
      </Styled.MainSection>
    </BodyPage>
  );
};

export default Home;
