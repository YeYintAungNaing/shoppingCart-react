import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext(null);


function GlobalState({children}){

    const [productList, setProductList] = useState([]);
    const [totalCost, setTotalCost] = useState(0);
    

  return (
    <GlobalContext.Provider
    value={{
        productList,
        setProductList,
        totalCost, 
        setTotalCost
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState