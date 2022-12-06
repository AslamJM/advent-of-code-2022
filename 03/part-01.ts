import fs from "fs";

const itemTypes = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

function parseInput() {
  const items = fs.readFileSync("03/input.txt").toString().split(/\r?\n/);
  const splittedItems = items.map((item) => {
    return [
      item.slice(0, item.length / 2),
      item.slice(item.length / 2, item.length),
    ];
  });
  return splittedItems;
}

function findItemInBoth(sack: string[]) {
  let commonItems: string[] = [];
  for (let i = 0; i < sack[0].length; i++) {
    if (sack[0][i] === sack[1][i]) {
      commonItems.push(sack[0][i]);
    }
  }
  return commonItems;
}

console.log(findItemInBoth(["jqHRNqRjqzjGDLGL", "rsFMfFZSrLrFZsSL"]));
