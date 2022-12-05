import { parseCalories, sum } from "./part-01";

export function findTopThree() {
  const elfs = parseCalories();
  const sortedElfs = elfs.sort((a, b) => sum(b.calories) - sum(a.calories));
  return [sortedElfs[0], sortedElfs[1], sortedElfs[2]];
}
