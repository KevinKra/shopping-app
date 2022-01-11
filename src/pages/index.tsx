import type { NextPage } from "next";
import Greeting from "../components/molecules/Greeting/Greeting";

const Home: NextPage = () => {
  return (
    <div>
      <p>Hello World</p>
      <Greeting />
    </div>
  );
};

export default Home;
