import fs from "fs";

/*--- A-rock-1 B-paper-2 C-scissor-3 ---*/
/*--- X-rock-1 Y-paper-2 Z-scissor-3 ---*/

export type Choise = "X" | "Y" | "Z";
export type OpponentChoise = "A" | "B" | "C";

export function calculatePoints(opponent: OpponentChoise, you: Choise) {
  if (opponent === "A") {
    switch (you) {
      case "X":
        return 4;
      case "Y":
        return 8;
      case "Z":
        return 3;
    }
  } else if (opponent === "B") {
    switch (you) {
      case "X":
        return 1;
      case "Y":
        return 5;
      case "Z":
        return 9;
    }
  } else {
    switch (you) {
      case "X":
        return 7;
      case "Y":
        return 2;
      case "Z":
        return 6;
    }
  }
}

export function parseInput() {
  const games = fs.readFileSync("02/input.txt").toString().split(/\r?\n/);
  return games;
}

export function calculateTotalScoreAccordingToPlan() {
  const games = parseInput();
  const totalPoints = games.reduce((acc, curr) => {
    const choices = curr.split(" ");
    return (
      acc + calculatePoints(choices[0] as OpponentChoise, choices[1] as Choise)
    );
  }, 0);
  return totalPoints;
}
