import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/globalState'

function Home() {

  const {productList, setProductList} = useContext(GlobalContext);

  useEffect(()=> {
    async function showProducts(){
        try{
            const response = await fetch('https://dummyjson.com/products');
            const fetchedData = await response.json();
            //console.log(fetchedData)

            if (fetchedData?.products){
                setProductList(fetchedData.products)
                console.log('this')
            }

            else{
              throw new Error()
            }
        }

        catch(error){
            console.log(error)
        }
    }
    showProducts();
  },[])

  //console.log(productList)

  return (
    <div>
      <ul>
        {productList && productList.length > 0 ?
        productList.map((product)=> 
        <div key={product.id}>
          <li>{product.title}</li>
          <img src={product.thumbnail} alt='lol'></img>
         
        </div>
        )
        : null
      }
      </ul>

    </div>
  )
}

export default Home