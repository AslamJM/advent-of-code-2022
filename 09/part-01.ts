import { parseInputByLine } from "../utils/parse-input-line";

export const moves = parseInputByLine("09/input.txt");

export type Position = {
  x: number;
  y: number;
};

let H: Position = {
  x: 0,
  y: 0,
};

let T: Position = {
  x: 0,
  y: 0,
};

type Direction = "R" | "L" | "U" | "D";

let visited: string[] = [[0, 0].toString()];

export function parseMove(move: string): {
  direction: Direction;
  steps: number;
} {
  const direction: Direction = move.split(" ")[0] as Direction;
  const steps: number = parseInt(move.split(" ")[1]);
  return { direction, steps };
}

export function moveTail(H: Position, T: Position) {
  //check H,T are in same col
  if (H.x === T.x && H.y - T.y === 2) {
    T.y = T.y + 1;
    visited.push([T.x, T.y].toString());
    return;
  }
  if (H.x === T.x && H.y - T.y == -2) {
    T.y = T.y - 1;
    visited.push([T.x, T.y].toString());
    return;
  }
  // check H,T are in same row
  if (H.y === T.y && H.x - T.x === 2) {
    T.x = T.x + 1;
    visited.push([T.x, T.y].toString());
    return;
  }
  if (H.y === T.y && H.x - T.x === -2) {
    T.x = T.x - 1;
    visited.push([T.x, T.y].toString());
    return;
  }

  //check diagonally
  if (
    (H.y - T.y === 2 && H.x - T.x === 1) ||
    (H.x - T.x === 2 && H.y - T.y === 1)
  ) {
    T.x = T.x + 1;
    T.y = T.y + 1;
    visited.push([T.x, T.y].toString());
    return;
  }
  if (
    (H.y - T.y === 2 && H.x - T.x === -1) ||
    (H.x - T.x === -2 && H.y - T.y === 1)
  ) {
    T.x = T.x - 1;
    T.y = T.y + 1;
    visited.push([T.x, T.y].toString());
    return;
  }
  if (
    (H.y - T.y === -2 && H.x - T.x === 1) ||
    (H.x - T.x === 2 && H.y - T.y === -1)
  ) {
    T.x = T.x + 1;
    T.y = T.y - 1;
    visited.push([T.x, T.y].toString());
    return;
  }
  if (
    (H.y - T.y === -2 && H.x - T.x === -1) ||
    (H.x - T.x === -2 && H.y - T.y === -1)
  ) {
    T.x = T.x - 1;
    T.y = T.y - 1;
    visited.push([T.x, T.y].toString());
    return;
  }
}

export function trackTail(moves: string[]) {
  for (const move of moves) {
    const { direction, steps } = parseMove(move);

    switch (direction) {
      case "L":
        for (let i = steps; i > 0; i--) {
          H.x = H.x - 1;

          moveTail(H, T);
        }
        break;
      case "R":
        for (let i = 0; i < steps; i++) {
          H.x = H.x + 1;

          moveTail(H, T);
        }
        break;

      case "U":
        for (let i = 0; i < steps; i++) {
          H.y = H.y + 1;

          moveTail(H, T);
        }
        break;

      case "D":
        for (let i = steps; i > 0; i--) {
          H.y = H.y - 1;

          moveTail(H, T);
        }
        break;
    }
  }
  return new Set(visited).size;
}
