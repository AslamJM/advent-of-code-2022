import { parseInputByLine } from "../utils/parse-input-line";

export function splitPairs() {
  const lines = parseInputByLine("04/input.txt");
  const pairs = lines.map((line) => line.split(","));
  return pairs;
}

function isFullyContained(pair: string[]) {
  let first = pair[0].split("-").map((part) => parseInt(part));
  let second = pair[1].split("-").map((part) => parseInt(part));
  if (
    (first[0] >= second[0] && first[1] <= second[1]) ||
    (first[0] <= second[0] && first[1] >= second[1])
  ) {
    return 1;
  }
  return 0;
}

export function numberOfFullyContainedPairs() {
  const pairs = splitPairs();
  return pairs.reduce((acc, curr) => acc + isFullyContained(curr), 0);
}
