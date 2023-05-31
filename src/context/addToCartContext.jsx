import React from "react";
import { createContext, useState } from "react";

export const addToCartContext = createContext();


export const AddToCartState = (props) =>{

    const [cart, setCart ] = useState([])

    const addToCart = (data) =>{
      setCart ([...cart, data])
    }

    return (
        <addToCartContext.Provider value={{cart , addToCart}}>
            {props.children}
        </addToCartContext.Provider>
    )
}

