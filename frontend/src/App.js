import React, { useState, useEffect } from 'react';
import axios  from 'axios';
import Inventory from './component/Inventory';
import MakePayment from './component/MakePayment';
import Product from './component/Product';
import AddProduct from './component/AddProduct';
import Sidebar from './component/Sidebar';
import Navbar from './component/Navbar';


import {Routes,Route} from'react-router-dom'
import BillingHistory from './component/BillingHistory';
import Update from './component/Update';


const  App=()=> {
  const [path,setPath]=useState('Home')
  const [searchTerm, setSearchTerm] = useState('');
  const [products,setProducts]=useState([]);
  const [activeSidebar,setActiveSidebar]=useState(false);
  const [order,setOrder] = useState({
    id:"",
    productList:[],
    totalamount:0.0
  });

  const getProducts=async()=>{
    try {
      const response=await axios.get("http://localhost:8080/products");
      const data=response.data;
      console.log(data)
      setProducts(data);
      
      
    } catch (error) {
      console.log(error.message);
  
    }
  }

useEffect(()=>{ 
 getProducts();
 
},[]);
return(

 
   <div className='flex w-full h-screen flex-col overflow-y-auto'>
    <Navbar products={products} searchTerm={searchTerm} setSearchTerm={setSearchTerm} getProducts={getProducts} setProducts={setProducts} activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar} path={path} setPath={setPath}/>
    <div className="flex">
      {activeSidebar===true &&  <Sidebar  activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar}  path={path} setPath={setPath}/>
      
      }
      <Routes>
       
      <Route path="/" element={<Product products={products} searchTerm={searchTerm} order={order} setOrder={setOrder} setPath={setPath}/>} />
        
        
     
           <Route path="/inventory" element={<Inventory products={products} getProducts={getProducts} setPath={setPath} />} />

        
      
            <Route path="/make-payment" element={<MakePayment order={order} setOrder={setOrder} products={products} setProducts={setProducts} getProducts={getProducts} setPath={setPath} /> } />
            <Route path="/update-product" element={<Update getProducts={getProducts} setPath={setPath} />} />


        
     
         
    <Route path="/add-product" element={<AddProduct getProducts={getProducts} products={products} setPath={setPath}/>} />
  
        
         
           <Route path="/billing-history" element={<BillingHistory />} />
   
       
      </Routes>
      
    </div>

    </div>
 



    
  
)
}

export default App;
