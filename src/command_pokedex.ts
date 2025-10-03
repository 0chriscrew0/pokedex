import { State } from "./state.js";

export async function commandPokedex(state: State) {
  console.log("Your Pokedex:");
  for (const p in state.pokedex) {
    console.log(`- ${p}`);
  }
}
