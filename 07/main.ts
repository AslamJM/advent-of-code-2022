import { calculateSumOfDirectorySizes } from "./part-01";
import { getTheDeletionSize } from "./part-02";

function main() {
  const someOfdirectorySizes = calculateSumOfDirectorySizes(
    "07/input.txt",
    100000
  );
  console.log(
    `total sizes of the directories with atmost 100000: ${someOfdirectorySizes}`
  );
  const deletionSize = getTheDeletionSize("07/input.txt", 70000000, 30000000);
  console.log(`smallest directory size to be deleted: ${deletionSize}`);
}

main();
