import { numberOfFullyContainedPairs } from "./part-01";
import { numberOfOverlappingPairs } from "./part-02";

function main() {
  const fullyContainedPairs = numberOfFullyContainedPairs(); //part-01
  const overlappingPairs = numberOfOverlappingPairs(); //part-02

  console.log("fully contained pairs: " + fullyContainedPairs);
  console.log("overlapping pairs: " + overlappingPairs);
}

main();
