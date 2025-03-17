import getConnection from "./database/connection";
import { getMostFrequentQuestions } from "./database/queries";

export function main() {
  try {
    const connection = getConnection()

    getMostFrequentQuestions({
      connection,
      quantity: 10,
      cb: (rows: unknown[]) => { console.log (rows) }
    })

    } catch (error) {
    console.error("Failed to start:", error);
    process.exit(1);
  }
}

main();
