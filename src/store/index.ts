import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";

import pokemonsSlice from './Pokemons/pokemons';
import { localStorageMiddleware } from './middleware/localstore-middleware';

export const store = configureStore({
  reducer: {
    counter:counterSlice,
    pokemons:pokemonsSlice
  },
/*   middleware: ( getDefaultMiddleware ) => getDefaultMiddleware().concat(localStorageMiddleware) */
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()