import type { NextPage } from "next";
import styled from "@emotion/styled";
import Button from "@mui/material/Button";

const Home: NextPage = () => {
  return (
    <StyledDiv>
      <p>Hello World</p>
      <Button variant="contained">Greetings</Button>
    </StyledDiv>
  );
};

export default Home;

const StyledDiv = styled.div`
  border: 1px solid red;
`;
