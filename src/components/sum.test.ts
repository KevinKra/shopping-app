import { sum } from "./sum";

it("add 5 + 2 equals 7", () => {
  //   const a: string = 5;
  //   expect(a).toBe(5);
  expect(sum(5, 2)).toEqual(7);
});
