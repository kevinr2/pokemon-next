
import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";




export const localStorageMiddleware: Middleware = (state) => (next) => (action) => {
    // Aquí puedes agregar tu lógica antes de despachar la acción
    console.log('Prev state:',state.getState());
    console.log('Dispatching action:', action);
  
    const result = next(action); // Pasa la acción al siguiente middleware o reducer
  
    // Aquí puedes agregar lógica posterior al despacho de la acción
    console.log('Next state:', state.getState());
  
    return result; // Devuelve el resultado del siguiente middleware o reducer
  };