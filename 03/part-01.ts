import fs from "fs";

export const itemTypes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function parseInput() {
  const items = fs.readFileSync("03/input.txt").toString().split(/\r?\n/);

  //split the string in half
  const splittedItems = items.map((item) => {
    return [
      item.slice(0, item.length / 2),
      item.slice(item.length / 2, item.length),
    ];
  });
  return splittedItems;
}

function findItemInBoth(sack: string[]) {
  for (let i = 0; i < sack[0].length; i++) {
    for (let j = 0; j < sack[0].length; j++) {
      if (sack[0][i] === sack[1][j]) {
        //return the priority
        return itemTypes.indexOf(sack[0][i]) + 1;
      }
    }
  }
  return 0;
}

export function findPrioritySum() {
  const itemsArray = parseInput();
  const prioritySum = itemsArray.reduce((acc, curr) => {
    return acc + findItemInBoth(curr);
  }, 0);
  return prioritySum;
}
