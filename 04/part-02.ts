import { splitPairs } from "./part-01";

function isOverlap(pair: string[]) {
  let first = pair[0].split("-").map((part) => parseInt(part));
  let second = pair[1].split("-").map((part) => parseInt(part));

  if (
    (first[0] <= second[0] && first[1] >= second[0]) ||
    (second[0] <= first[0] && second[1] >= first[0])
  ) {
    return 1;
  }
  return 0;
}

export function numberOfOverlappingPairs() {
  const pairs = splitPairs();
  return pairs.reduce((acc, curr) => acc + isOverlap(curr), 0);
}
