import { getTopStack } from "./part-01";

function main() {
  /*---part-01---*/
  const topStack = getTopStack(1);
  console.log(`top of the stacks is: ${topStack}`);

  /*---part-01---*/
  const topStack2 = getTopStack(2);
  console.log(`top of the stacks is after crane 9001: ${topStack2}`);
}

main();
