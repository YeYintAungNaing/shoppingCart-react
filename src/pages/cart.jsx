import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalState'
import Product from '../component/Product';


function Cart() {
  const {totalCost, setTotalCost, cartList, setCartList} = useContext(GlobalContext);
  return (
    <>
    <h1>{`Total cost: ${totalCost} $`}</h1>
    {
      cartList && cartList.length > 0 ? 
      cartList.map((item)=> 
      <Product key = {item.id} product={item}></Product>
      )
      : null
    }
    </>
  )
}

export default Cart