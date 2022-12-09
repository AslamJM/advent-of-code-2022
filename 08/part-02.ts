function scenicScoreLeft(trees: string, height: number): number {
  let i = trees.length - 1;
  let scenicScore = 0;
  while (i >= 0) {
    if (height <= parseInt(trees.charAt(i))) {
      return scenicScore + 1;
    }
    scenicScore++;
    i--;
  }
  return scenicScore;
}

function scenicScoreRight(trees: string, height: number): number {
  let i = 0;
  let scenicScore = 0;
  while (i <= trees.length - 1) {
    if (height <= parseInt(trees.charAt(i))) {
      return scenicScore + 1;
    }
    scenicScore++;
    i++;
  }
  return scenicScore;
}

function scenicScoreTop(
  trees: string[],
  height: number,
  position: number
): number {
  let i = trees.length - 1;
  let scenicScore = 0;
  while (i >= 0) {
    if (height <= parseInt(trees[i].charAt(position))) {
      return scenicScore + 1;
    }
    scenicScore++;
    i--;
  }
  return scenicScore;
}

function scenicScoreBottom(
  trees: string[],
  height: number,
  position: number
): number {
  let i = 0;
  let scenicScore = 0;
  while (i < trees.length) {
    if (height <= parseInt(trees[i].charAt(position))) {
      return scenicScore + 1;
    }
    scenicScore++;
    i++;
  }
  return scenicScore;
}

export function calculateTopScenicScore(treeLines: string[]) {
  let topScenicScore = 0;
  for (let i = 1; i < treeLines.length - 1; i++) {
    for (let j = 1; j < treeLines[i].length - 1; j++) {
      const scenicScore =
        scenicScoreLeft(
          treeLines[i].slice(0, j),
          parseInt(treeLines[i].charAt(j))
        ) *
        scenicScoreRight(
          treeLines[i].slice(j + 1, treeLines[i].length),
          parseInt(treeLines[i].charAt(j))
        ) *
        scenicScoreTop(
          treeLines.slice(0, i),
          parseInt(treeLines[i].charAt(j)),
          j
        ) *
        scenicScoreBottom(
          treeLines.slice(i + 1),
          parseInt(treeLines[i].charAt(j)),
          j
        );
      if (scenicScore > topScenicScore) {
        topScenicScore = scenicScore;
      }
    }
  }
  return topScenicScore;
}
