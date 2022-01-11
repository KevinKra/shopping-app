import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

it("renders 'Greetings' ", () => {
  render(<Greeting />);
  const myElement = screen.getByText(/greetings/i);
  expect(myElement).toBeInTheDocument();
});
