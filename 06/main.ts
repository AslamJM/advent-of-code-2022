import { dataStream, firstStartOfPacketMarker } from "./part-01";
import { startOfMessageMarker } from "./part-02";

function main() {
  const packetMarker = firstStartOfPacketMarker(dataStream);
  const messageMarker = startOfMessageMarker(dataStream);

  console.log(`start of the first packet marker: ${packetMarker}`);
  console.log(`start of the first message marker: ${messageMarker}`);
}

main();
