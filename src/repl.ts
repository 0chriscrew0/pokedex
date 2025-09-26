import { createInterface } from "node:readline";

export function cleanInput(input: string): string[] {
  return input.toLowerCase().trim().split(" ");
}

export function startREPL() {
  const rl = createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: "Pokedex > ",
  });

  rl.prompt();
  rl.on("line", (input: string) => {
    const inputWords = cleanInput(input);
    if (inputWords.length === 0) {
      rl.prompt();
    } else {
      console.log(`Your command was: ${inputWords[0]}`);
      rl.prompt();
    }
  });
}
