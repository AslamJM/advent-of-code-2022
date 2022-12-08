import { parseInputString } from "../utils/parse-input-line";

export const dataStream = parseInputString("06/input.txt");

export function isUnique(signal: string) {
  return new Set(signal).size === signal.length;
}

export function firstStartOfPacketMarker(dataStream: string) {
  for (let i = 0; i <= dataStream.length - 4; i++) {
    if (isUnique(dataStream.slice(i, i + 4))) {
      return i + 4;
    }
  }
  return null;
}
