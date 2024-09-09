'use client'
import { useAppSelector } from '@/store'
import { PokemonGrid } from './PokemonGrid'
import { useEffect, useState } from 'react'

export const PokemonsFavorites = () => {
    const isFavorites = useAppSelector(state => Object.values(state.pokemons.favories) )
    const [pokemons, setPokemons] = useState(isFavorites)


    
    
  return (
    <>
    {
        isFavorites.length
            ?<PokemonGrid pokemons={isFavorites} />
            :<NoFavorites />
    }
    </>
  )
}

export const NoFavorites = ()=>{
    return(
        <div className='flex justify-center items-center mt-4'>
            <h1 className='text-4xl text-gray-800'>No cuentas con pokemos Favoritos</h1>
        </div>
    )
}
