import { parseInputByLine } from "../utils/parse-input-line";
import { trackLastKnot } from "./part-02";
import { trackTail } from "./part-01";

const moves = parseInputByLine("09/input.txt");

function main() {
  //part 1
  console.log(`positions visited by tail knot: ${trackTail(moves)}`);
  //part 2
  console.log(`positions visited by last knot: ${trackLastKnot(moves)}`);
}

main();
