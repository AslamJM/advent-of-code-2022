import { parseInputByLine } from "../utils/parse-input-line";
import { createFileTree, getDirectorySize } from "./part-01";

export function getTheDeletionSize(
  input: string,
  diskSize: number,
  spaceNeeded: number
) {
  const commandList = parseInputByLine(input);
  const directorySizes = getDirectorySize(createFileTree(commandList));

  const availableSpace = diskSize - directorySizes.at(-1)!;

  return directorySizes
    .filter((size) => size >= spaceNeeded - availableSpace)
    .sort((a, b) => a - b)[0];
}
