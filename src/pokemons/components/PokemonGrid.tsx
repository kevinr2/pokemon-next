import React from 'react'
import { SimplePokemon } from '../interfaces/simples-pokemon'
import { PokemonsCards } from './PokemonsCards';

interface Props{
    pokemons:SimplePokemon[];

}

export const PokemonGrid = ({pokemons}:Props) => {
  return (
    <div className="flex flex-wrap gap-10 items-center justify-center">

    {
        pokemons.map(pokemon =>(
            <PokemonsCards key={pokemon.id} pokemon={pokemon} />      
        ))
    }
  </div>
  )
}
