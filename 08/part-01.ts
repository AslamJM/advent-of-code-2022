function checkLeft(trees: string, height: number): boolean {
  let i = trees.length - 1;
  while (i >= 0) {
    if (height <= parseInt(trees.charAt(i))) {
      return false;
    }
    i--;
  }
  return true;
}

function checkRight(trees: string, height: number): boolean {
  let i = 0;
  while (i <= trees.length - 1) {
    if (height <= parseInt(trees.charAt(i))) {
      return false;
    }
    i++;
  }
  return true;
}

function checkTop(trees: string[], height: number, position: number): boolean {
  let i = trees.length - 1;
  while (i >= 0) {
    if (height <= parseInt(trees[i].charAt(position))) {
      return false;
    }
    i--;
  }
  return true;
}

function checkBottom(
  trees: string[],
  height: number,
  position: number
): boolean {
  let i = 0;
  while (i < trees.length) {
    if (height <= parseInt(trees[i].charAt(position))) {
      return false;
    }
    i++;
  }
  return true;
}

export function getNumberOfVisibleTrees(treeLines: string[]) {
  let visibleTrees = treeLines[0].length * 2 + treeLines.length * 2 - 4;
  for (let i = 1; i < treeLines.length - 1; i++) {
    for (let j = 1; j < treeLines[i].length - 1; j++) {
      if (
        checkLeft(treeLines[i].slice(0, j), parseInt(treeLines[i].charAt(j))) ||
        checkRight(
          treeLines[i].slice(j + 1, treeLines[i].length),
          parseInt(treeLines[i].charAt(j))
        ) ||
        checkTop(treeLines.slice(0, i), parseInt(treeLines[i].charAt(j)), j) ||
        checkBottom(treeLines.slice(i + 1), parseInt(treeLines[i].charAt(j)), j)
      ) {
        visibleTrees++;
      }
    }
  }
  return visibleTrees;
}
