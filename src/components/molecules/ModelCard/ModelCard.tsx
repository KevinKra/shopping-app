import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";

const ModelCard = () => {
  return (
    <Wrapper>
      <Typography>Hello</Typography>
    </Wrapper>
  );
};

export default ModelCard;

const Wrapper = styled(Card)`
  border: 1px solid red;
`;
