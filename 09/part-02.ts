import { Position } from "./part-01";
import { parseMove } from "./part-01";

let knots: Position[] = [
  ...[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((k) => ({ x: 0, y: 0 })),
];

let visited: string[] = [[0, 0].toString()];

export function moveKnot(H: Position, T: Position) {
  //check H,T are in same col
  if (H.x === T.x && H.y - T.y === 2) {
    T.y = T.y + 1;
    return [T.x, T.y].toString();
  }
  if (H.x === T.x && H.y - T.y == -2) {
    T.y = T.y - 1;
    return [T.x, T.y].toString();
  }
  // check H,T are in same row
  if (H.y === T.y && H.x - T.x === 2) {
    T.x = T.x + 1;
    return [T.x, T.y].toString();
  }
  if (H.y === T.y && H.x - T.x === -2) {
    T.x = T.x - 1;
    return [T.x, T.y].toString();
  }

  //check diagonally
  if (
    (H.y - T.y === 2 && H.x - T.x === 1) ||
    (H.x - T.x === 2 && H.y - T.y === 1) ||
    (H.x - T.x == 2 && H.y - T.y === 2)
  ) {
    T.x = T.x + 1;
    T.y = T.y + 1;
    return [T.x, T.y].toString();
  }
  if (
    (H.y - T.y === 2 && H.x - T.x === -1) ||
    (H.x - T.x === -2 && H.y - T.y === 1) ||
    (H.x - T.x === -2 && H.y - T.y === 2)
  ) {
    T.x = T.x - 1;
    T.y = T.y + 1;
    return [T.x, T.y].toString();
  }
  if (
    (H.y - T.y === -2 && H.x - T.x === 1) ||
    (H.x - T.x === 2 && H.y - T.y === -1) ||
    (H.x - T.x === 2 && H.y - T.y === -2)
  ) {
    T.x = T.x + 1;
    T.y = T.y - 1;
  }
  if (
    (H.y - T.y === -2 && H.x - T.x === -1) ||
    (H.x - T.x === -2 && H.y - T.y === -1) ||
    (H.x - T.x === -2 && H.y - T.y === -2)
  ) {
    T.x = T.x - 1;
    T.y = T.y - 1;
    return [T.x, T.y].toString();
  }

  return [T.x, T.y].toString();
}

export function trackLastKnot(moves: string[]) {
  for (const move of moves) {
    const { direction, steps } = parseMove(move);

    switch (direction) {
      case "L":
        for (let i = steps; i > 0; i--) {
          knots[0].x = knots[0].x - 1;
          let position: string = "";
          for (let i = 0; i < 9; i++) {
            position = moveKnot(knots[i], knots[i + 1]);
          }
          visited.push(position);
        }
        break;
      case "R":
        for (let i = 0; i < steps; i++) {
          knots[0].x = knots[0].x + 1;

          let position: string = "";
          for (let i = 0; i < 9; i++) {
            position = moveKnot(knots[i], knots[i + 1]);
          }
          visited.push(position);
        }
        break;
      case "U":
        for (let i = 0; i < steps; i++) {
          knots[0].y = knots[0].y + 1;

          let position: string = "";
          for (let i = 0; i < 9; i++) {
            position = moveKnot(knots[i], knots[i + 1]);
          }
          visited.push(position);
        }
        break;
      case "D":
        for (let i = steps; i > 0; i--) {
          knots[0].y = knots[0].y - 1;

          let position: string = "";
          for (let i = 0; i < 9; i++) {
            position = moveKnot(knots[i], knots[i + 1]);
          }
          visited.push(position);
        }
        break;
    }
  }
  return new Set(visited).size;
}
