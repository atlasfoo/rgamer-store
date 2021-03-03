import React, { useEffect, useState } from 'react'
import BasicLayout from '../layouts/BasicLayout/BasicLayout'
import * as gameApi from '../api/game'

import useCart from '../hooks/useCart'

const cart = () => {

  const {getProducts} = useCart();
  const products = getProducts();

  if(!products) return <EmptyCart/>

  return (
    <FullCart products={products}/>
  )
}

function EmptyCart(){
  return(
    <BasicLayout className='empty-cart'>
      <h2>No hay productos en el carrito</h2>
    </BasicLayout>
  )
}

function FullCart({products}){
  const [productsData, setProductsData] = useState(null);

  useEffect(()=>{
    (async () => {
      const productsTemp = [];
      for await (const product of products){
        const data = await gameApi.getGameByUrl(product);
        productsTemp.push(data);
      }
      setProductsData(productsTemp);
    })()
  }, [])

  return(
    <BasicLayout className='full-cart'>
      <h2>Carrito</h2>
    </BasicLayout>
  )
}

export default cart
