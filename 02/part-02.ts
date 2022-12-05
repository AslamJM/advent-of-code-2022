import { parseInput, OpponentChoise, Choise } from "./part-01";

function ultraSecretStrategy(opponent: OpponentChoise, you: Choise) {
  if (opponent === "A") {
    switch (you) {
      case "X":
        return 3;
      case "Y":
        return 4;
      case "Z":
        return 8;
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
        return 2;
      case "Y":
        return 6;
      case "Z":
        return 7;
    }
  }
}

export function calculateScoreElfPlan() {
  const games = parseInput();
  const totalPoints = games.reduce((acc, curr) => {
    const choices = curr.split(" ");
    return (
      acc +
      ultraSecretStrategy(choices[0] as OpponentChoise, choices[1] as Choise)
    );
  }, 0);
  return totalPoints;
}
