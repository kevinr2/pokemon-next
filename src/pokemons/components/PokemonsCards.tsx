import Link from "next/link";
import { SimplePokemon } from "../interfaces/simples-pokemon";
import Image from "next/image";
import { IoHeartOutline } from "react-icons/io5";

interface Props{
    pokemon:SimplePokemon;
}

export const PokemonsCards = ({pokemon}:Props) => {
    const {id, name}=pokemon
  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="flex flex-col bg-white rounded overflow-hidden shadow-lg">
        <div className=" flex flex-col items-center justify-center p-6 bg-gray-800 border-b">
          (
            <Image
                key={pokemon.id}
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
              width={100}
              height={100}
              alt={pokemon.name}
              priority={false}
            />
          <p className="pt-2 text-lg font-semibold text-gray-50">{name}</p>
          <div className="mt-5">
            <Link href={`pokemon/${name}`} className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100">
              Saber mas
            </Link>
          </div>
        </div>
        <div className="border-b">
          <Link
            href="/dashboard/main"
            className="px-4 py-2 hover:bg-gray-100 flex items-center"
          >
            <div className="text-red-600">
             <IoHeartOutline />
            </div>
            <div className="pl-3">
              <p className="text-sm font-medium text-gray-800 leading-none">
                no es  Favorito
              </p>
              <p className="text-xs text-gray-500">View your campaigns</p>
            </div>
          </Link>
          
        </div>
      </div>
    </div>
  );
};
