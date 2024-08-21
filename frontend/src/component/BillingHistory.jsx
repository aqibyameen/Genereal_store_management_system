import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { MdDelete } from 'react-icons/md';

const BillingHistory = () => {
  const [BillingHistory,setBillingHistory]=useState([])
  const handleDelete = (id) =>{
    const updatedBillingHistory=BillingHistory.filter(billingHistory => billingHistory.id!==id)
    setBillingHistory(updatedBillingHistory)
    try {
    axios.delete(`http://localhost:8080/delete-bill/${id}`);

      
    } catch (error) {
      console.log(error)
    }
  }
  const fetchBillingHistory = async() =>{
    try {
      const response = await axios.get('http://localhost:8080/get-bills');
      setBillingHistory(response.data)
    } catch (error) {
      console.log(error)
    }
   
  }
  useEffect(() =>{
  fetchBillingHistory()    
    
  },[])

  return (
    
      <div className='w-full flex flex-col justify-start  pl-10'>
     
      <h1 className='flex w-full justify-start text-2xl font-medium  mt-7 items-center'>
        Billing History :
      </h1>
      <div className='overflow-x-auto mt-5 mr-4'>
        <table className='min-w-full bg-white border-collapse border border-slate-500'>
          <thead className='bg-slate-800 text-white'>
            <tr>
            <th className='py-2 px-4 border border-slate-500 text-center'>S No</th>

              <th className='py-2 px-4 border border-slate-500 text-center'>Product ID</th>
              
              <th className='py-2 px-4 border border-slate-500 text-center'>Items</th>
              <th className='py-2 px-4 border border-slate-500 text-center'>Price</th>
              <th className='py-2 px-4 border border-slate-500 text-center'>Delete</th>

            </tr>
          </thead>
         {BillingHistory.length>0?(
           <tbody>
           {BillingHistory.map((item, index) => {
             


             return (

               // Map through each product in the order, creating a row for each product with its details
             <tr key={index} className='hover:bg-slate-100 transition duration-150'>
               <td className='py-2 px-4 border border-slate-500 text-center'>{index+1}</td>

               <td className='py-2 px-4 border border-slate-500 text-center'>{item.id}</td>

               <td className='py-2 px-4 border border-slate-500 text-center'>{item.productList.length}</td>
               <td className='py-2 px-4 border border-slate-500 text-center'>{item.totalamount}</td>
               <td className='py-2 px-4 border border-slate-500 text-center '><MdDelete className='w-full flex justify-center text-xl cursor-pointer ' onClick={()=>handleDelete(item.id)} /></td>

             </tr>)
})}
         </tbody>
         ):(<div className='w-full  absolute'><h1 className='mt-7 w-full flex justify-center items-start border-none text-center'>No Billing History....</h1></div>)}
        </table>
        </div>
      
      </div >
  )
}

export default BillingHistory
