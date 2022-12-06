import fs from "fs";

export function parseInputByLine(input: fs.PathOrFileDescriptor) {
  return fs.readFileSync(input).toString().split(/\r?\n/);
}
