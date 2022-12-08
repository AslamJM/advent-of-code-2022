import { parseInputByLine } from "../utils/parse-input-line";

type Node = File | Directory;

interface File {
  type: "file";
  name: string;
  size: number;
}
interface Directory {
  type: "directory";
  name: string;
  children: Node[];
}

function createFile(name: string, size: number): File {
  return {
    type: "file",
    name,
    size,
  };
}

function createDirectory(name: string): Directory {
  return {
    type: "directory",
    name,
    children: [],
  };
}

/*---create file tree system based on the commands ---*/
export function createFileTree(commands: string[]) {
  const directories: Directory[] = [];

  for (const line of commands) {
    const parent = directories.at(-1);
    const splitted = line.split(" ");

    if (splitted[1] === "cd") {
      if (splitted[2] === "..") {
        directories.pop();
      } else {
        const dir = createDirectory(splitted[2]);
        parent?.children.push(dir);
        directories.push(dir);
      }
    }
    if (splitted[0] !== "$" && splitted[0] !== "dir") {
      const file = createFile(splitted[1], Number(splitted[0]));
      parent?.children.push(file);
    }
  }
  return directories[0];
}

/*---get directory sizes recursively---*/
export function getDirectorySize(node: Node) {
  let sizes: number[] = [];

  function traverseTree(node: Node): number {
    if (node.type === "directory") {
      const dirSize = node.children.reduce(
        (acc, curr) => acc + traverseTree(curr),
        0
      );
      sizes.push(dirSize);
      return dirSize;
    }
    return node.size;
  }
  traverseTree(node);
  return sizes;
}

export function calculateSumOfDirectorySizes(input: string, limit: number) {
  const commandList = parseInputByLine(input);
  return getDirectorySize(createFileTree(commandList))
    .filter((size) => size <= limit)
    .reduce((acc, curr) => acc + curr, 0);
}
