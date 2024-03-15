import React, {useContext, useState, useRef} from 'react'
import { GlobalContext } from '../context/globalState'

function Product({product}) {    //has to make a component for each project since it has own usestate

    
    const [cartCount, setCartCount] = useState(0);
    const {totalCost, setTotalCost} = useContext(GlobalContext);
   

    function increment(price){
        //have to add the price to total
        setCartCount(cartCount+1)
        setTotalCost(totalCost+price)
    }

    function decrement(price){
        setCartCount(cartCount-1)
        setTotalCost(totalCost-price)
        
    }
  
    return (
    <div className='product'>
        <p>{product.title}</p>
        <img className='productImg'src={product.image} alt='lol'></img>
        <p>{`${product.price} $`}</p>
        <div className='productAddMinus'>
            <button onClick={()=>increment(product.price)}>+</button> 
            <p className='cartCount'>{cartCount}</p>
            <button onClick={()=>decrement(product.price)}>-</button>
        </div> 
    </div>
    )
}

export default Product