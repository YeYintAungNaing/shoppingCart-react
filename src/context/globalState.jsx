import React, { useState, useEffect } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext(null);


function GlobalState({children}){

    const [productList, setProductList] = useState([]);

 
  return (
    <GlobalContext.Provider
    value={{
        productList,
        setProductList
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState