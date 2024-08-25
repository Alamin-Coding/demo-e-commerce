/* eslint-disable react/prop-types */
import  { createContext, useReducer } from 'react';
import cartReducer from '../reducers/cartReducer';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, { cart: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
