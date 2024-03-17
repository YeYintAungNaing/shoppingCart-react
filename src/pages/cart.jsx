import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalState'
import Product from '../component/Product';


function Cart() {
  const {totalCost, productList,  cartCountList} = useContext(GlobalContext);
  return (
    <>
    <h1>{`Total cost: ${totalCost.toFixed(2)} $`}</h1>
    { 
      productList.map((item)=> 
      cartCountList[item.id-1] > 0 ?
      <Product key = {item.id} product={item}></Product>
      
      : null)
    }
    </>
  )
}

export default Cart