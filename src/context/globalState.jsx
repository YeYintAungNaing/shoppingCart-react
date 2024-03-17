import React, { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext(null);


function GlobalState({children}){

    const [productList, setProductList] = useState([]);             // original list of products fetched from api
    const [totalCost, setTotalCost] = useState(0);          
    const [isLoaded, setIsLoaded] = useState(false);                // state to prevent unnecessary fetching/refrshing
    const [cartList, setCartList] = useState([]);                   // list of items that are added to the cart( structure is the same as productList)
    const [cartCountList, setCartCountList] = useState([])          // list to store item count for each product in the cart


  return (
    <GlobalContext.Provider
    value={{
        productList,
        setProductList,
        totalCost, 
        setTotalCost, 
        isLoaded, 
        setIsLoaded, 
        cartList,
        setCartList,
        cartCountList,
        setCartCountList
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState