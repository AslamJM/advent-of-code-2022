import { parseInputByLine } from "../utils/parse-input-line";

const lines = parseInputByLine("05/input.txt");

const moves = lines.slice(lines.indexOf("") + 1, lines.length);

/*---split each line of crates into an array---*/
function splitCrate(crate: string) {
  let slots: string[] = [];

  for (let i = 0; i <= crate.length - 3; i = i + 4) {
    const letter =
      crate.slice(i, i + 3).trim() === "" ? "_" : crate.charAt(i + 1);
    slots.push(letter);
  }

  return slots;
}

/*---transpose arrays---*/
function transposeArray(inputArrays: string[][]) {
  let collectionArray: string[][] = [];
  let tempArray: string[] = [];
  for (let i = 0; i < inputArrays[0].length; i++) {
    for (let j = 0; j < inputArrays.length; j++) {
      if (inputArrays[j][i] !== "_") tempArray.push(inputArrays[j][i]);
    }
    collectionArray.push(tempArray);
    tempArray = [];
  }
  return collectionArray;
}

/*--create the represention of a stack---*/
function getCrateStack() {
  const crates = lines.slice(0, lines.indexOf("") - 1);
  const splittedCrates = crates.map((crate) => splitCrate(crate));

  let stacks: string[][] = [];

  splittedCrates.forEach((crate) => {
    let strArray: string[] = [];
    crate.forEach((str) => {
      strArray.push(str);
    });
    stacks.push(strArray);
  });
  return transposeArray(stacks);
}

/*---parse a move command---*/
function parseMove(move: string) {
  let strings = move.split(" ");
  const numberOfCrates = parseInt(strings[1]);
  const from = parseInt(strings[3]);
  const to = parseInt(strings[5]);
  return {
    numberOfCrates,
    from,
    to,
  };
}

/*---move that returns a new arrangement of stacks---*/
function makeMove(move: string, stacks: Array<string[]>, part: 1 | 2) {
  const { from, to, numberOfCrates } = parseMove(move);
  let cratesToBemoved =
    part === 1
      ? stacks[from - 1].splice(0, numberOfCrates).reverse()
      : stacks[from - 1].splice(0, numberOfCrates);
  stacks[to - 1] = [...cratesToBemoved, ...stacks[to - 1]];
  return stacks;
}

/*---part 01 solution---*/
export function getTopStack(part: 1 | 2) {
  let stacks = getCrateStack();

  moves.forEach((move) => {
    let newStacks = makeMove(move, stacks, part);
    stacks = newStacks;
  });
  let topOfStack = "";
  for (let i = 0; i < stacks.length; i++) {
    topOfStack += stacks[i][0];
  }
  return topOfStack;
}

console.log(getTopStack(1));
