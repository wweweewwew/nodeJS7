import getConnection from "./database/connection";
import { logAllQuestions } from "./database/queries";

export function main() {
  try {
    const connection = getConnection()
    logAllQuestions(connection)

    // getMostFrequentQuestions({
    //   connection,
    //   cb: (rows: unknown[]) => { console.log(rows) }
    // })
  } catch (error) {
    console.error("Failed to start:", error);
    process.exit(1);
  }
}

main();
