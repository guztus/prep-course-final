import { Game } from "./Game";

describe("Tic-Tac-Toe", () => {
  it("should start with blank state", () => {
    const game = new Game();

    expect(game.getCells()).toEqual([
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getTurn()).toBe("X");
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to click on cell and place 'X' in it", () => {
    const game = new Game();

    expect(game.onClick(0));
    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should be able to alternate between turns", () => {
    const game = new Game();

    expect(game.onClick(0));
    expect(game.onClick(1));
    expect(game.onClick(2));
    expect(game.getCells()).toEqual([
      "X",
      "O",
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should not be able to click twice on a cell", () => {
    const game = new Game();

    expect(game.onClick(0));
    expect(game.onClick(0));
    expect(game.getCells()).toEqual([
      "X",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getWinner()).toBe("-");
    expect(game.isTie()).toBe(false);
  });

  it("should win the game if a row is filled by player", () => {
    const game = new Game();

    expect(game.onClick(0));
    expect(game.onClick(3));
    expect(game.onClick(1));
    expect(game.onClick(4));
    expect(game.onClick(2));
    expect(game.getCells()).toEqual([
      "X",
      "X",
      "X",
      "O",
      "O",
      "-",
      "-",
      "-",
      "-",
    ]);
    expect(game.getWinner()).toBe("X");
    expect(game.isTie()).toBe(false);
  });

  it("should win the game if a row is filled by player", () => {
    const game = new Game();

    expect(game.onClick(0));
    expect(game.onClick(1));
    expect(game.onClick(3));
    expect(game.onClick(4));
    expect(game.onClick(5));
    expect(game.onClick(7));
    expect(game.getCells()).toEqual([
      "X",
      "O",
      "-",
      "X",
      "O",
      "X",
      "-",
      "O",
      "-",
    ]);
    expect(game.getWinner()).toBe("O");
    expect(game.isTie()).toBe(false);
  });
});
