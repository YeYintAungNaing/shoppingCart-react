import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/globalState'

function Product({product}) {    //has to make a component for each project since it has own usestate

    const {totalCost, setTotalCost, cartCountList, setCartCountList} = useContext(GlobalContext);


    function increment(product){
        let copyCartCountList = cartCountList.slice();
        copyCartCountList[product.id-1] += 1     // product id - 1 is the same as the index for that product in cartCountList
        setCartCountList(copyCartCountList)
        setTotalCost(totalCost+product.price)
        
    }
   

    function decrement(product){
        if (cartCountList[product.id-1]>0){
            let copyCartCountList = cartCountList.slice();
            copyCartCountList[product.id-1] -= 1
            setCartCountList(copyCartCountList)
            setTotalCost(totalCost-product.price) 
            
        }
    }
    
  
    return (
    <div className='product'>
        <p>{product.title}</p>
        <img className='productImg'src={product.image} alt='lol'></img>
        <p>{`${product.price} $`}</p>
        <div className='productAddMinus'>
            <button onClick={()=>increment(product)}>+</button> 
            <p className='cartCount'>{cartCountList[product.id-1]}</p>
            <button onClick={()=>decrement(product)}>-</button>
        </div> 
    </div>
    )
}

export default Product