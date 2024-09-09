import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";

export const metadata={
  title:'151 pokemons',
  description:'151 pokemons de api pokemons'
}


const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  /* throw new Error('Esto es un error que no deberia de salir') */
  return pokemons;
};

export default async function pagePokemons() {
  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col ">
        <span className=" text-xl my-2">listado de pokemons <small className="text-blue-500" >estatico</small> </span>
        <PokemonGrid pokemons={pokemons} />
    </div>
  );
}
