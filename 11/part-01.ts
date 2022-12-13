import { parseInputByLine } from "../utils/parse-input-line";

interface Monkey {
  startingItems: number[];
  operation: () => number;
  test: () => boolean;
  tTarget: number;
  fTarget: number;
}

let monkeys: Monkey[] = [];

function getMonkeyText() {
  let linne;
}
