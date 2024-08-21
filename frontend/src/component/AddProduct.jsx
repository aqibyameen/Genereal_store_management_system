import axios from 'axios';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';


const AddProduct = ({getProducts,setPath,products,setProducts}) => {
  const navigate=useNavigate()

  let id="";
  const uniqueId=()=>{
     id=Math.random().toString(36);
     setAddProductObj({...AddProductObj,id})
    
     
    
   
  }
  
  const[AddProductObj,setAddProductObj]= useState(
    {
      id:"",name:"",description:"",price:0.0,quantity:0
    }
  )
  const handleChange=(e) =>{

    setAddProductObj({...AddProductObj,[e.target.name]:e.target.value})
    
     console.log(AddProductObj)
    
  }
  const handleSubmit=(e)=>{
    
      axios.post("http://localhost:8080/add-products",AddProductObj).then(()=>{
        console.log("Success")
      
        navigate("/")
  
  getProducts()

      }).catch((error)=>{
        console.log(error)
      });
 

       
   
    
    
  }
  setPath('')
 
  
  return (
    <div className='w-full flex  justify-center mt-8   '>
      <div className='w-[800px]  bg-slate-300  drop-shadow-lg rounded-md shadow-slate-700 h-[650px]'>
     <h1 className='flex  justify-start text-2xl font-medium  mt-3 items-start px-4 py-3 '>
       Add Product:
     </h1>
     <div >
      
<div className='flex flex-col m-4'>
  
       <label htmlFor="id " className='text-lg flex '>Product id: <p className='m-1 px-2 text-sm'>(Auto Generate)</p></label>
       <input  disabled type="text" name='id'  className='w-3/4 p-2 rounded flex ' value={AddProductObj.id}  /><span className='flex'><button className='flex bg-slate-900 text-white mt-2 p-1 rounded shadow'onClick={uniqueId} >Generate</button></span>
       </div>
       <div className='flex flex-col m-4 py-1'>
        <label htmlFor="ProductName" className='text-lg flex'>Product Name:</label>
        <input onChange={(e)=>handleChange(e)} type="text" name='name'  className='w-3/4 p-2 rounded ' placeholder='Enter product name...' />

       </div>
       <div className='flex flex-col m-4 py-1'>
        <label htmlFor="ProductDescription" className='text-lg flex'>Description:</label>
        <input onChange={(e)=>handleChange(e)} type="text" name='description'  className='w-3/4 p-2 rounded ' placeholder='Enter product description...' />

       </div>
       <div className='flex flex-col m-4 py-1'>
        <label htmlFor="Price" className='text-lg flex'>Price:</label>
        <input onChange={(e)=>handleChange(e)} type="number" name='price' className='w-3/4 p-2 rounded ' placeholder='eg:50..' />

       </div>
       <div className='flex flex-col m-4 py-1'>
        <label htmlFor="quantity" className='text-lg flex'>Quantity:</label>
        <input onChange={(e)=>handleChange(e)} type="number" name='quantity' className='w-3/4 p-2 rounded ' placeholder='eg:50..' />
        

       </div>
       <div className="bg-slate-900 text-white w-44 flex justify-center items-center py-2 rounded m-4" >
<button type='submit' onClick={handleSubmit}>Submit</button>
       </div>
    
      
     </div>
  
    
    
     </div>
     </div>
  )
}

export default AddProduct
