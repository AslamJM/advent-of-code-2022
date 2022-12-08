import { isUnique } from "./part-01";

export function startOfMessageMarker(dataStream: string) {
  for (let i = 0; i <= dataStream.length - 14; i++) {
    if (isUnique(dataStream.slice(i, i + 14))) {
      return i + 14;
    }
  }
  return null;
}
