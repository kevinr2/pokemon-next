import { PokemonsFavorites } from "@/pokemons/components/PokemonsFavorites";


export const metadata = {
  title: "favorites",
  descripcion: "mi pokemon favorito",
};

export default async function pagePokemons() {

  return (
    <div className="flex flex-col ">
      <span className=" text-xl my-2">
        Pokemons favoritos<small className="text-blue-500">estatico</small>{" "}
      </span>
      <PokemonsFavorites />
      
    </div>
  );
}
