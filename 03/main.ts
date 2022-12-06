import { findPrioritySum } from "./part-01";
import { findPrioritySumBadges } from "./part-02";

function main() {
  /*---part-01---*/
  const prioritySum = findPrioritySum();
  console.log(
    `sum of priorities of item appears in both compartment: ${prioritySum}`
  );

  /*---part-02---*/
  const prioritySumOfBadges = findPrioritySumBadges();
  console.log(
    `sum of priorities of badges appears three elves: ${prioritySumOfBadges}`
  );
}

main();
