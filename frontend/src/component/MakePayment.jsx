import { FaMinus, FaPlus } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from 'react-icons/md';


const MakePayment = ({ order,setOrder,products,getProducts,setPath}) => {
  const navigate=useNavigate();

  const handlepaid=()=>{
    axios.post('http://localhost:8080/create-bill',order);
    alert('Payment successful')
    const data={
      products:products,

      billProducts:order.productList
    }
    axios.post('http://localhost:8080/add-two-list-by-compare',data).then((response)=>console.log(response)).catch((error)=>console.log(error));

   getProducts();
   navigate('/');
    

    setOrder({productList: [],totalamount: 0.0})
  }
  setPath('make-payment')

  const handleDelete = (item) => {
    const amount= item.quantity*item.price;
    const updatedProductList=order.productList.filter((product) => product.id !== item.id)
     setOrder({...order,productList:updatedProductList,totalamount:order.totalamount-amount})
  }
  const handleQuantityChange = (id, delta) => {
    let totalamount=0.0;
    const quantityInproducts= products.find(product => product.id===id).quantity;
    console.log(quantityInproducts)
    
    const updatedProductList = order.productList.map(item => {

  

      if (item.id === id) {
        const updatedQuantity = item.quantity + delta;


        return ({ ...item, quantity: updatedQuantity > 0  ? (updatedQuantity<=quantityInproducts?(updatedQuantity):(quantityInproducts)) : 0 }
                
      );
      
      
      }
      return item;
    }).filter(item => item.quantity >= 0);
    
    updatedProductList.map((productListitem)=>totalamount+=productListitem.quantity*productListitem.price)
console.log(totalamount)
    setOrder({ ...order, productList: updatedProductList,totalamount: totalamount});
  

    console.log({ ...order, productList: updatedProductList,totalamount: totalamount})
  };
  return (
    <div className='w-full flex flex-col justify-start pl-3'>
      <h1 className='flex w-full justify-start text-2xl font-medium mt-7 items-center'>
        Make Payment:
      </h1>
      <div className='overflow-x-auto mt-5 mr-4'>
        <table className='min-w-full bg-white border-collapse border border-slate-500'>
          <thead className='bg-slate-800 text-white'>
            <tr>
            <th className='py-2 px-4 border border-slate-500 text-center'>S No</th>

              <th className='py-2 px-4 border border-slate-500 text-center'>Product ID</th>
              <th className='py-2 px-4 border border-slate-500 text-center'>Product Name</th>
              <th className='py-2 px-4 border border-slate-500 text-center'>Quantity</th>
              <th className='py-2 px-4 border border-slate-500 text-center'>Price</th>
              <th className='py-2 px-4 border border-slate-500 text-center'>Delete</th>

            </tr>
          </thead>
         {order.productList.length>0?(
           <tbody>
           {order.productList.map((item, index) => {
             


             return (

               // Map through each product in the order, creating a row for each product with its details
             <tr key={index} className='hover:bg-slate-100 transition duration-150'>
               <td className='py-2 px-4 border border-slate-500 text-center'>{index+1}</td>

               <td className='py-2 px-4 border border-slate-500 text-center'>{item.id}</td>
               <td className='py-2 px-4 border border-slate-500 text-center'>{item.name}</td>
               <td className='py-2 flex justify-center items-start gap-x-3  text-center'><FaMinus onClick={()=>{handleQuantityChange(item.id,-1)}} className='bg-slate-500 p-1 mt-1   text-white' />{item.quantity}<FaPlus className='bg-slate-700 mt-1 p-1 text-white'  onClick={()=>{handleQuantityChange(item.id,+1)}} /></td>
               <td className='py-2 px-4 border border-slate-500 text-center'>{item.price}</td>
               <td className='py-2 px-4 border border-slate-500 text-center '><MdDelete className='w-full flex justify-center text-xl cursor-pointer ' onClick={()=>handleDelete(item)} /></td>

             </tr>)
})}
         </tbody>
         ):((<div className='w-full  absolute'><h1 className='mt-7 w-full flex justify-center items-start border-none text-center text-xl mb-20'>No Product in cart...</h1></div>))}
        </table>
        <div 
        className='flex justify-between items-end m-4  mt-40'><h2 className='flex text-2xl '>Total Amount :<h2 className='text-2xl text-slate-800'>{order.totalamount}</h2></h2>{order.totalamount>0&&<button className='text-md bg-slate-900 text-white rounded-lg py-2 px-8 ' onClick={handlepaid}>Paid</button>}</div>
      </div>
    </div>
  );
};

export default MakePayment;
