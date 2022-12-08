import fs from "fs";

export function parseInputString(input: fs.PathOrFileDescriptor) {
  return fs.readFileSync(input).toString();
}

export function parseInputByLine(input: fs.PathOrFileDescriptor) {
  return fs.readFileSync(input).toString().split(/\r?\n/);
}
