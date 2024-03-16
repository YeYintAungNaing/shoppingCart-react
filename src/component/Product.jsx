import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/globalState'

function Product({product}) {    //has to make a component for each project since it has own usestate

    const [cartCount, setCartCount] = useState(0);
    const {productList, totalCost, setTotalCost, cartList, setCartList} = useContext(GlobalContext);

    
    function increment(product){
        //have to add the price to total
        setCartCount(cartCount+1)
        setTotalCost(totalCost+product.price)
        setCartList([...cartList, product])
    }
   

    function decrement(product){
        if (cartCount>0){
            setCartCount(cartCount-1)
            setTotalCost(totalCost-product.price) 
            
            const index =cartList.indexOf(product)
            let copyList = cartList.slice()
            if (index !== -1){
                copyList.splice(index, 1);
                setCartList(copyList)
            }
        }
    }
    
  
    return (
    <div className='product'>
        <p>{product.title}</p>
        <img className='productImg'src={product.image} alt='lol'></img>
        <p>{`${product.price} $`}</p>
        <div className='productAddMinus'>
            <button onClick={()=>increment(product)}>+</button> 
            <p className='cartCount'>{cartCount}</p>
            <button onClick={()=>decrement(product)}>-</button>
        </div> 
    </div>
    )
}

export default Product