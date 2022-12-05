import fs from "fs";

type Elf = {
  id: number;
  calories: number[];
};

export function sum(input: number[]) {
  return input.reduce((acc, curr) => acc + curr, 0);
}

function parseInput() {
  const values = fs.readFileSync("01/input.txt").toString().split(/\r?\n/);
  return values;
}

export function parseCalories() {
  const result = parseInput();
  let elfs: Elf[] = [];
  let count = 1;
  let calories: number[] = [];

  result.map((reading) => {
    if (reading !== "") {
      calories.push(parseInt(reading));
    } else if (reading === "") {
      elfs.push({ id: count, calories });
      count++;
      calories = [];
    }
  });
  return elfs;
}

export function findMostCalories() {
  const elfs = parseCalories();
  let elfWithHighCalorie: Elf = elfs[0];
  for (let i = 1; i < elfs.length; i++) {
    if (sum(elfWithHighCalorie.calories) < sum(elfs[i].calories)) {
      elfWithHighCalorie = elfs[i];
    }
  }
  return elfWithHighCalorie;
}
