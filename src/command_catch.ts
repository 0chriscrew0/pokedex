import { State } from "./state.js";

export async function commandCatch(state: State, pokemonName: string) {
  const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);
  const name = pokemon.name;
  const exp = pokemon.base_experience;

  console.log(`Throwing a Pokeball at ${name}...`);

  // Tune this scale to make catching easier or harder
  const maxExp = 1000;

  let catchChance = 1 - exp / maxExp;

  // Clamp between 5% and 95% so it's never impossible
  catchChance = Math.max(0.05, Math.min(0.95, catchChance));

  const caught = Math.random() < catchChance;

  if (caught) {
    console.log(`${name} was caught!`);
    state.pokedex[name] = pokemon;
  } else {
    console.log(`${name} escaped!`);
  }
}
