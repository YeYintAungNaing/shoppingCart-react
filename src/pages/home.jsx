import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalState'
import Product from '../component/Product';

function Home() {

  const {productList, setProductList} = useContext(GlobalContext);

  useEffect(()=> {
    async function showProducts(){
        try{
            const response = await fetch('https://fakestoreapi.com/products?limit=20');
            const fetchedData = await response.json();
            //console.log(fetchedData)

            if (fetchedData){
                setProductList(fetchedData)
                //console.log('page refreshed')
            }
            else{
              throw new Error()
            }
        }
        catch(error){
            console.log("my error")
        }
    }
    showProducts();
  },[])
  //console.log(productList)

  return (
    <div>
      <ul className='product-Container'>
        {productList && productList.length > 0 ?
        productList.map((product)=> 
        <Product key={product.id} product={product}></Product>)
        : null}
      </ul>
    </div>
  )
}

export default Home