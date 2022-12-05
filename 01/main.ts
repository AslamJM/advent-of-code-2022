import { findMostCalories, sum } from "./part-01";
import { findTopThree } from "./part-02";

function main() {
  /*---part-01---*/
  const elf = findMostCalories();
  console.log(
    `the elf with most calories is ${elf.id} with ${sum(elf.calories)} calories`
  );

  /*---part-02---*/
  const topThree = findTopThree();
  console.log(
    `the top 3 elves are ${topThree[0].id},${topThree[1].id},${topThree[2].id},`
  );
  console.log(
    `the total top three sum ${
      sum(topThree[0].calories) +
      sum(topThree[1].calories) +
      sum(topThree[2].calories)
    } calories`
  );
}

main();
