import React from 'react'
import { CiHome, CiShoppingCart } from 'react-icons/ci';
import { RxCross1 } from "react-icons/rx";
import { MdOutlinePaid } from "react-icons/md";
import {  MdWorkHistory } from "react-icons/md";
import {Link} from 'react-router-dom'


import './Sidebar.css';
const Sidebar = ({activeSidebar,setActiveSidebar,path,setPath}) => {
    
  return (
    <div className='w-3/12 h-screen z-50'>
    <div className='w-[200px] flex justify-start rounded-lg shadow shadow-slate-500 h-screen absolute top-0 bg-white border-slate-600'>
        <div className='w-full mt-10'>
        <div className="w-full flex justify-end" onClick={()=>{setActiveSidebar(false)}}>
    <RxCross1 className='text-xl font-bold mr-3 cursor-pointer'/>
        </div>
        <div className="w-full mt-20 ">
         <div className={`w-full flex justify-start pl-4  items-start text-xl    py-1 mt-2 ${path==='Home'?'active': 'text-slate-900 bg-white'}`}>
            <Link className='flex py-2' to='/'  onClick={()=>{setPath("Home")}}> <CiHome className='mt-1 mr-2'   />Home</Link>
         </div>
         <div className={`w-full flex justify-start pl-4  items-start text-xl   py-1 mt-3 ${path==='inventory'?'active': 'text-slate-900 bg-white'}`}>
           <Link className='flex py-2' to='/inventory' onClick={()=>{setPath("inventory")}} >  <CiShoppingCart className='mt-1 mr-2'  />Inventory</Link>
         </div>
         <div className={`w-full flex justify-start pl-4  items-start text-xl   py-1 mt-3 ${path==='make-payment'?'active': 'text-slate-900 bg-white'}`}>

            <Link className='flex py-2' to='/make-payment' onClick={()=>{setPath("make-payment")}}> <MdOutlinePaid className='mt-1 mr-2'  />Make Payment</Link>
         </div>
         <div className={`w-full flex justify-start pl-4  items-start text-xl   py-1 mt-3 ${path==='billing-history'?'active': 'text-slate-900 bg-white'}`}>
           <Link className='flex py-2' to='/billing-history' onClick={()=>{setPath("billing-history")}}>  <MdWorkHistory className='mt-1 mr-2'  />Billing History</Link>
         </div>
        </div>
        
        </div>
    </div>
    </div>
  )
}

export default Sidebar
