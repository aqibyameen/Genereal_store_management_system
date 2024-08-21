import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiMenuBurger } from 'react-icons/ci';
import { FaPlus } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './Sidebar.css' ;
import Search from './Search';


const Navbar = ({setActiveSidebar ,path,setPath,products,setProducts,getProducts,searchTerm,setSearchTerm}) => {
  return (
    <div className='w-full flex justify-center items-center mt-9 h-24 gap-x-3'>
        <div className='flex w-[180px] justify-center' onClick={()=>setActiveSidebar(true)}>
<CiMenuBurger   className='flex justify-start text-xl font-bold cursor-pointer '/>

        </div>
      <div className="label flex-col flex justify-start w-[300px]">
        <h1 className='flex justify-start text-slate-900 text-2xl font-bold '>WHAMJ STORE</h1>
        <p>The one-stop General Store</p>

      </div>
      <div className="searchbar">
        
   <Search products={products} searchTerm={searchTerm} setSearchTerm={setSearchTerm} setProducts={setProducts} getProducts={getProducts}/>
      </div>
      
      <div className="w-[250px] flex justify-end items-center">
        <Link to="/add-product" onClick={()=>{setPath("add-product")}}>

     <button className={`flex w-[150px] justify-center items-center  ${path==='add-product'?'active':'bg-white text-slate-900 border border-slate-900'}   py-1 rounded-lg `}>{< FaPlus className='text-xl mx-2'/ >} Add Product </button>

     </Link>
      </div>
    </div>
  )
}

export default Navbar;
