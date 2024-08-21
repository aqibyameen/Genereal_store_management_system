import React, { useRef } from 'react'
import { BiCross } from 'react-icons/bi';
import { CiSearch } from 'react-icons/ci'
import { FaCross } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx';

const Search = ({products,setProducts,getProducts,searchTerm,setSearchTerm}) => {
    const handleChange=(e) => {
     e.preventDefault();
     setSearchTerm(e.target.value);
    }
    const handleEmptySearch=()=>{
        getProducts()
        setSearchTerm('')
    }
    const handleSearch=()=>{
        if (searchTerm!=='') {
            const searchValue = searchTerm.toLowerCase();
        setProducts(products.filter(product => product.name.toLowerCase().includes(searchValue)))
        
        ;

            
        }
        
    }
  return (
    <div>
         <div className='flex w-[400px] justify-center'>
     <input type="text" name="ProductName" placeholder='Search Products...' value={searchTerm} onChange={(e)=>handleChange(e)} className='w-3/4 py-2 px-3   text-black border border-slate-700 rounded-lg rounded-r-none outline-none' />{searchTerm!==''&&<RxCross1 onClick={handleEmptySearch} className='absolute ml-36 mt-3 cursor-pointer ' />}
     <button className='flex justify-center items-center  bg-slate-900 text-white px-4 py-2 rounded-lg rounded-l-none' onClick={handleSearch}> Search {< CiSearch className='text-xl ml-2'/ >}</button>
    </div>

      
    </div>
  )
}

export default Search
