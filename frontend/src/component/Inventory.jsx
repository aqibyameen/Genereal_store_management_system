import axios from 'axios';
import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const Inventory = ({products,getProducts,setPath}) => {
  const navigate = useNavigate();
  const handleDelete=(id) => {
    console.log(id)
   axios.delete(`http://localhost:8080/delete/${id}`).then(()=>{
    getProducts();


   }).catch((err) => {
    console.log(err)
   });
   

  }
  setPath('inventory')
  
    
  return (
    <div className='w-full flex flex-col justify-start items-center pl-10'>
   
    <h1 className='flex w-full justify-start text-2xl font-medium  mt-7 items-center'>
      Inventory:
    </h1>
    <div className='flex flex-wrap gap-2 w-full   mt-4'>
      {products.map((item)=>{
        return(
      <div class="w-[300px] rounded flex flex-col justify-between shadow-xl bg-slate-400">
      <div class="px-6 py-4">
        <div class="font-bold text-black text-xl mb-2">{item.name}</div>
        <p class="text-gray-700 text-base">
{item.description}
        </p>
      </div>
      <div className='w-full flex justify-center gap-x-28 items-center px-2'>
      <p className='text-md font-thin flex'>Price:<p className='font-semibold ml-1'>  {item.price}</p></p> 
      <p className='text-md font-thin flex'>Quantity:<p className='font-semibold ml-1'>  {item.quantity}</p></p> 
      </div>
      <div class="flex justify-between items-end  gap-x-2 h-auto  px-6 pt-4 pb-5">
       
      <div className='p-1 bg-white text-slate-900 rounded-lg px-4 text-lg  flex cursor-pointer' onClick={()=>navigate(`/update-product?id=${item.id}`)}> Update <FaEdit className='text-2xl ml-2 '/></div>
      <div onClick={()=>handleDelete(item.id)} className='p-1 bg-slate-900 text-white rounded-lg px-4 cursor-pointer text-lg flex '>Delete<MdDelete  className='text-2xl ml-2 '/></div>
        </div>
    </div>
      )})}

    </div>
   
 
    </div>
  )
}

export default Inventory
