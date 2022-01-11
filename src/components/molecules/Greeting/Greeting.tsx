import styled from "@emotion/styled";
import { Button, Typography } from "@mui/material";
import React from "react";

const Greeting = () => {
  return (
    <GreetingWrapper>
      <Typography variant="h2">Greetings</Typography>

      <Button variant="outlined">Button</Button>
    </GreetingWrapper>
  );
};

export default Greeting;

const GreetingWrapper = styled.div`
  border: 1px solid black;
`;
