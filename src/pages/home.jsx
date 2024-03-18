import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalState'
import Product from '../component/Product';

function Home() {

  const {
        productList, setProductList, isLoaded, 
        setIsLoaded, setCartCountList,filteredProductsList, 
        setFilteredProductList, setSearchKey, searchKey
      } = useContext(GlobalContext);

  useEffect(()=> {

    async function showProducts(){
        try{
            const response = await fetch('https://fakestoreapi.com/products?limit=20');
            const fetchedData = await response.json();
            //console.log(fetchedData)

            if (fetchedData){
                setProductList(fetchedData);
                setIsLoaded(true);
                setCartCountList(Array(fetchedData.length).fill(0));    // cannot use productList casue of its asychronous nature
                setFilteredProductList(fetchedData) 
                //console.log('fetched ')
            }
            else{
              throw new Error('encounterd error')
            }
        }
        catch(error){
            console.log(error)
        }
    }
    if (!isLoaded){
    showProducts();
    }
  },[isLoaded])
  //console.log(productList)

  function handleSearch(event){
    event.preventDefault();

    if (searchKey.length > 2){
      //let copyFilteredList = productList.filter((product)=> product.title.toLowerCase().startsWith(searchKey))
      //setFilteredProductList(copyFilteredList)
      setFilteredProductList(productList.filter((product)=> product.title.toLowerCase().indexOf(searchKey) !==-1 ))
    }
    else if(searchKey === ""){
      setFilteredProductList(productList)
    }
    else{
       window.alert(' Try seaching with more than two letters !')
    }
    
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input 
        className='searchBar'  
        value={searchKey}
        onChange={(event)=> setSearchKey(event.target.value)}> 
        </input>
      </form>
      <ul className='product-Container'>
        {filteredProductsList && filteredProductsList.length > 0 ?
        filteredProductsList.map((product)=> 
        <Product key={product.id} product={product}></Product>)
        : null}
      </ul>
    </div>
  )
}

export default Home