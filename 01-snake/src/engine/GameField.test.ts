import { GameField } from "./GameField";

describe("Game Field", () => {
  it("should have SIX apples present", () => {
    const field = new GameField();

    const apples = field.getApples();

    expect(apples.length).toBe(6);
  });
});
