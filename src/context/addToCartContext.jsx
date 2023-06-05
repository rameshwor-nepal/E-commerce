import React from "react";
import { createContext, useState } from "react";

export const addToCartContext = createContext();


export const AddToCartState = (props) =>{

    const [cart, setCart ] = useState([])

    const addToCart = (data) =>{
      setCart ([...cart, {...data, quantity :1 }])
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        cart.forEach((item) => {
          totalAmount += parseFloat(item.price) * item.quantity;
        });
        return totalAmount;
      };

    const increaseQuantity = (itemId) => {
        const updatedCartItems = cart.map((item) => {
          if (item.id === itemId) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        });
        setCart(updatedCartItems);
      };

      const decreaseQuantity = (itemId) => {
        const updatedCartItems = cart.map((item) => {
          if (item.id === itemId && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
          return item;
        });
        setCart(updatedCartItems);
      };

      const removeItem = (itemId) => {
        const updatedCartItems = cart.filter((item) => item.id !== itemId);
        setCart(updatedCartItems);
      };

    return (
        <addToCartContext.Provider value={{cart , addToCart, getTotalAmount, increaseQuantity, removeItem, decreaseQuantity}}>
            {props.children}
        </addToCartContext.Provider>
    )
}

