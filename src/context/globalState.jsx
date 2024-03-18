import React, { useState } from 'react'
import { createContext } from 'react'

export const GlobalContext = createContext(null);


function GlobalState({children}){

    const [productList, setProductList] = useState([]);             // original list of products(objects) fetched from api
    const [totalCost, setTotalCost] = useState(0);          
    const [isLoaded, setIsLoaded] = useState(false);                // state to prevent unnecessary fetching/refrshing
    //const [cartList, setCartList] = useState([]);                   // list of items that are added to the cart( structure is the same as productList)
    const [cartCountList, setCartCountList] = useState([])          // list to store item count for each product in the cart
    const [filteredProductsList, setFilteredProductList] = useState([])
    const [searchKey, setSearchKey] = useState("")
    //const [adminName, setAdminName] = useState('admin');
    //const [adminPassword, setAdminPassword] = useState('password123');
    const [validUser, setValidUser] = useState(false);

  return (
    <GlobalContext.Provider
    value={{
        productList,
        setProductList,
        totalCost, 
        setTotalCost, 
        isLoaded, 
        setIsLoaded, 
        cartCountList,
        setCartCountList,
        filteredProductsList,
        setFilteredProductList,
        searchKey,
        setSearchKey,
        validUser,
        setValidUser
    }}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState