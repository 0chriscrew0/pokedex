import { State } from "./state.js";

export async function commandInspect(state: State, pokemonName: string) {
  if (!state.pokedex[pokemonName]) {
    console.log("you have not caught that pokemon");
  } else {
    console.log(state.pokedex[pokemonName]);
  }
}
