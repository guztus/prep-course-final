import { Cell } from "./Cell";

export class GameField {
  appleLocations = [
    /*new Cell(18, 16),
    new Cell(20, 16),
    new Cell(22, 16),
    new Cell(24, 16),
    new Cell(26, 16),
    new Cell(2, 1),*/
    new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
    new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
    new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
    new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
    new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
    new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
  ];

  /**
   * Called when level completed
   */
  seed(): void {
    this.appleLocations = [
      new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
      new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
      new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
      new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
      new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
      new Cell(Math.floor(Math.random() * 44), Math.floor(Math.random() * 24)),
    ];
  }

  getApples(): Cell[] {
    return this.appleLocations;
    /*return [
      new Cell(18, 16),
      new Cell(20, 16),
      new Cell(22, 16),
      new Cell(24, 16),
      new Cell(26, 16),
      new Cell(2, 1),
    ];*/
  }

  isAppleInside(cell: Cell): boolean {
    for (var i = 0; i < this.getApples().length; i++) {
      if (JSON.stringify(cell) === JSON.stringify(this.getApples()[i])) {
        return true;
      }
    }
    return false;
  }

  removeApple(cell: Cell): void {
    this.appleLocations = this.appleLocations.filter((instance) => {
      return JSON.stringify(instance) !== JSON.stringify(cell);
    });
    //this.appleLocations.slice(this.appleLocations.indexOf(cell), 1);
  }

  isEmpty(): boolean {
    return this.appleLocations.length === 0;
  }
}
