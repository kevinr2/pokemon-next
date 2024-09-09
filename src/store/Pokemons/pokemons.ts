import { SimplePokemon } from '@/pokemons';
import { createSlice, PayloadAction, Action } from '@reduxjs/toolkit';

interface PokemonsState {
    favories:{[key:string]:SimplePokemon }
}

const getinitialState = ():PokemonsState =>{

  const  favorites = JSON.parse(localStorage.getItem('favorite-pokemons') ?? '{}')

  return favorites
}

const initialState:PokemonsState = {
  favories:{}

 /*  ...getinitialState() */
/*     '1':{id:'1', name:'bulbasaur'},
    '3':{id:'3', name:'venusaur'},
    '4':{id:'4', name:'charmander'} */

}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state,action:PayloadAction<{[key:string]:SimplePokemon }>){
      state.favories =action.payload
    },

    togglefavorite(state, action:PayloadAction<SimplePokemon>){
       const pokemon=action.payload
       const {id}=pokemon

       if(!!state.favories[id]){
          delete state.favories[id]
        /*   return */
       }else{

         state.favories[id]=pokemon
       }
       
       localStorage.setItem('favorite-pokemons',JSON.stringify(state.favories))
    }
  }
});

export const {togglefavorite,setFavoritePokemons} = pokemonsSlice.actions

export default pokemonsSlice.reducer