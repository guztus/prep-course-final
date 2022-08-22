import { Cell } from "./Cell";

export class GameField {
  appleLocations = [
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
  }

  isEmpty(): boolean {
    return this.appleLocations.length === 0;
  }
}
