import React, { useEffect } from "react";
import { useRouter } from "next/router";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  });

  return <h1>Loading... one sec</h1>;
};

export default Home;
