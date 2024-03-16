import React, { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext(null);


function GlobalState({children}){

    const [productList, setProductList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [navigationState, setNavigationState] = useState(null);
    const [cartList, setCartList] = useState([]);
    
    
  return (
    <GlobalContext.Provider
    value={{
        productList,
        setProductList,
        totalCost, 
        setTotalCost, 
        isLoaded, 
        setIsLoaded, 
        navigationState, 
        setNavigationState,
        cartList,
        setCartList
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState