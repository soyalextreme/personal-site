import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/Loading";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = () => {
  const router = useRouter();

  useEffect(() => {
      router.push("/home");
  });

  return <Loading />;
};

export default Home;
