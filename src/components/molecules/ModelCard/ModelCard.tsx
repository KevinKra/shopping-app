import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";

const ModelCard = () => {
  return (
    <Wrapper>
      <Hero primary>
        <Typography>hero</Typography>
      </Hero>
      <Details>
        <Typography>details</Typography>
      </Details>
    </Wrapper>
  );
};

export default ModelCard;

const Center = styled("div")`
  display: grid;
  place-items: center;
`;

type HeroProps = {
  primary?: boolean;
};

const Hero = styled(Center)<HeroProps>`
  > p {
    color: ${(props) => (props.primary ? "red" : "blue ")};
  }
  border: 1px solid green;
`;

const Details = styled(Center)``;

const Wrapper = styled(Card)`
  display: grid;
  grid-template-rows: repeat(2, 1fr);

  border: 1px solid red;
  max-width: 350px;
  min-height: 500px;

  ${Hero} {
    border: 1px solid blue;
  }

  ${Details} {
    border: 1px solid red;
  }
`;
