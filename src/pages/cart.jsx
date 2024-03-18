import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalState'
import Product from '../component/Product';
import { useNavigate } from 'react-router-dom';


function Cart() {
  const {totalCost, productList,  cartCountList} = useContext(GlobalContext);
  const navigate = useNavigate();
  return (
    <>
    <h1>{`Total cost: ${totalCost.toFixed(2)} $`}</h1>
    <button onClick={()=> navigate('/')}>Continue shopping</button>
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