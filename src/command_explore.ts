import { State } from "./state.js";

export async function commandExplore(state: State, locationName: string) {
  const location = await state.pokeAPI.fetchLocation(locationName);
  console.log(`Exploring ${locationName}...`);
  console.log("Found Pokemon:");
  for (const p of location.pokemon_encounters) {
    console.log(`- ${p.pokemon.name}`);
  }
}
