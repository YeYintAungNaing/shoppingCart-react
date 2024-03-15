import React,{useContext} from 'react'
import { GlobalContext } from '../context/globalState'


function Cart() {
  const {totalCost, setTotalCost} = useContext(GlobalContext);
  return (
    <h1>{`Total cost: ${totalCost} $`}</h1>
  )
}

export default Cart