import { Cell } from "./Cell";
import { Direction } from "./Direction";

export class Snake {
  head: Cell = new Cell(6, 6);
  tail: Cell[] = [new Cell(4, 6), new Cell(5, 6)];
  direction: Direction = "Right";

  setDirection(newDirection: Direction) {
    this.direction = newDirection;
  }

  move() {
    const oldHead = this.head;
    if (this.direction === "Right") {
      this.head = new Cell(oldHead.x + 1, oldHead.y);
    } else if (this.direction === "Down") {
      this.head = new Cell(oldHead.x, oldHead.y + 1);
    } else if (this.direction === "Left") {
      this.head = new Cell(oldHead.x - 1, oldHead.y);
    } else if (this.direction === "Up") {
      this.head = new Cell(oldHead.x, oldHead.y - 1);
    }

    this.tail.push(new Cell(oldHead.x, oldHead.y));
    this.tail.shift();
  }

  grow() {
    this.tail.unshift(new Cell(this.head.x, this.head.y));
  }

  getHead(): Cell {
    return this.head;
  }

  getDirection(): Direction {
    return this.direction;
  }

  getTail(): Cell[] {
    return this.tail;
  }

  isTakenBySnake(cell: Cell): boolean {
    for (var i = 0; i < this.getTail().length; i++) {
      if (JSON.stringify(cell) === JSON.stringify(this.getTail()[i])) {
        return true;
      }
    }
    return false;
  }
}
