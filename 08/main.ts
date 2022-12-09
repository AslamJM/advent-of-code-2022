import { parseInputByLine } from "../utils/parse-input-line";
import { getNumberOfVisibleTrees } from "./part-01";
import { calculateTopScenicScore } from "./part-02";

const treeLines = parseInputByLine("08/input.txt");

function main() {
  const visibleTrees = getNumberOfVisibleTrees(treeLines);
  console.log(`number of visible trees from outside: ${visibleTrees}`);
  console.log(`the top scenic score: ${calculateTopScenicScore(treeLines)}`);
}

main();
