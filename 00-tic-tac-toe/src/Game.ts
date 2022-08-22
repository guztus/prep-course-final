export type XO = "X" | "O" | "-";

export class Game {
  cells: XO[] = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  turn: XO = "X";

  //turnCounter: number = 0;

  getCells(): XO[] {
    return this.cells;
  }

  getTurn(): XO {
    return this.turn;
    /*return this.turnCounter % 2 === 0 ? "X" : "O"; ////whoseTurn*/
  }

  getWinner(): XO {
    const cells = this.cells;
    if (cells[0] === cells[1] && cells[1] === cells[2]) {
      return cells[0];
    }
    if (cells[3] === cells[4] && cells[4] === cells[5]) {
      return cells[3];
    }
    if (cells[6] === cells[7] && cells[7] === cells[8]) {
      return cells[6];
    }
    if (cells[0] === cells[3] && cells[3] === cells[6]) {
      return cells[0];
    }
    if (cells[1] === cells[4] && cells[4] === cells[7]) {
      return cells[1];
    }
    if (cells[2] === cells[5] && cells[5] === cells[8]) {
      return cells[2];
    }
    if (cells[0] === cells[4] && cells[4] === cells[8]) {
      return cells[0];
    }
    if (cells[2] === cells[4] && cells[4] === cells[6]) {
      return cells[2];
    }
    return "-";
  }

  isTie(): boolean {
    var emptyCells = 0;
    var fullCells = 0;
    this.cells.find((el) => {
      if (el !== "-") {
        ++fullCells;
      } else {
        ++emptyCells;
      }
    });
    return fullCells === 9 ? true : false;
  }

  onClick(i: number): void {
    if (this.cells[i] !== "-" || this.getWinner() !== "-") return;
    this.cells[i] = this.turn;
    this.turn = this.turn === "X" ? "O" : "X";

    /*console.log(`cell ${i} clicked`);

    if (this.cells[i] !== "-") {
    } else {
      this.cells[i] = this.turnCounter % 2 === 0 ? "X" : "O"; ////whoseTurn
      ++this.turnCounter;
    }

    console.log(this.cells); ///////*/
  }

  restart(): void {
    this.cells = ["-", "-", "-", "-", "-", "-", "-", "-", "-"];
  }
}
