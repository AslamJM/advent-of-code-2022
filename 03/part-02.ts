import { parseInputByLine } from "../utils/parse-input-line";
import { itemTypes } from "./part-01";

function findBadge(rucksacks: string[]) {
  for (let i = 0; i < rucksacks[0].length; i++) {
    for (let j = 0; j < rucksacks[1].length; j++) {
      for (let k = 0; k < rucksacks[2].length; k++) {
        if (
          rucksacks[0][i] === rucksacks[1][j] &&
          rucksacks[1][j] === rucksacks[2][k]
        ) {
          return itemTypes.indexOf(rucksacks[0][i]) + 1;
        }
      }
    }
  }
  return 0;
}

export function findPrioritySumBadges() {
  const rucksacks = parseInputByLine("03/input.txt");

  let sum = 0;
  for (let i = 0; i <= rucksacks.length - 3; i = i + 3) {
    sum = sum + findBadge([rucksacks[i], rucksacks[i + 1], rucksacks[i + 2]]);
  }
  return sum;
}
