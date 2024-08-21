import React, { useEffect, useState } from 'react'

const Product = ({products,order,setOrder,setPath}) => {

  const handleCart=(id)=>{
    if (order.productList.find((product)=>product.id === id)) {
      alert('Product already exists in cart');
      return;
    }

      const cartProduct= products.find((item =>item.id===id))
      const cartProductOrder={
        id:cartProduct.id,
        name: cartProduct.name,
        price: cartProduct.price,
        quantity:0
       }
       const updateProductlist=[...order.productList,cartProductOrder]
       setOrder({...order,productList:updateProductlist})

  }
  setPath("Home")
    
  return (
    <div className='w-full flex flex-col justify-start  pl-10'>
   
    <h1 className='flex w-full justify-start text-2xl font-medium  mt-7 items-center'>
      Products:
    </h1>
    <div className='flex flex-wrap gap-2 w-full  mt-8'>
      {products.map((item)=>{
        return(
      <div class="w-[300px] rounded  shadow-xl bg-slate-400">
      <div class="px-6 py-4">
        <div class="font-bold text-black text-xl mb-2">{item.name}</div>
        <p class="text-gray-700 text-base">
{item.description}
        </p>
      </div>
      <div className='w-full flex justify-start items-center ml-5'>
      <p className='text-md font-thin flex'>Quantity:<p className='font-semibold ml-1'>  {item.quantity}</p></p> 
      </div>
      <div class="flex justify-between items-end px-6 pt-4 pb-5">
        <p className='text-md font-thin flex'>Price:<p className='font-semibold ml-1'>  {item.price}</p></p> <div onClick={()=>handleCart(item.id)}  className='p-1 bg-slate-900 text-white rounded-lg px-2 cursor-pointer '>Add to Cart</div>
        </div>
    </div>
      )})}

    </div>
   
 
    </div>
  )
}

export default Product
