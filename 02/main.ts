import { calculateTotalScoreAccordingToPlan } from "./part-01";
import { calculateScoreElfPlan } from "./part-02";

function main() {
  console.log(
    "total score for your plan: " + calculateTotalScoreAccordingToPlan()
  );
  console.log(
    "total score according to elf strategy: " + calculateScoreElfPlan()
  );
}

main();
