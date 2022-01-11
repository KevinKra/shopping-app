import { sum } from "./sum";

describe("sum()", () => {
  it("add 5 + 2 equals 7", () => {
    expect(sum(5, 2)).toBe(7);
  });
});
