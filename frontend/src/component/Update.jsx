import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';

const Update = ({ getProducts }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('id');

  const [AddProductObj, setAddProductObj] = useState({
    id: '',
    name: '',
    description: '',
    price: 0.0,
    quantity: 0,
  });

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/product/${id}`);
      const data = response.data;
      setAddProductObj(data);
      console.log(data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setAddProductObj({ ...AddProductObj, [e.target.name]: e.target.value });
    console.log(AddProductObj);
  };

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:8080/update`, AddProductObj);
      console.log('Success');
      getProducts();
      navigate('/inventory');
    } catch (error) {
      console.log('Error updating product:', error.message);
    }
  };

  return (
    <div className='w-full flex justify-center mt-8'>
      <div className='w-[800px] bg-slate-300 drop-shadow-lg rounded-md shadow-slate-700 h-[650px]'>
        <h1 className='flex justify-start text-2xl font-medium mt-3 items-start px-4 py-3'>
          Update Product:
        </h1>
        <div>
          <div className='flex flex-col m-4'>
            <label htmlFor='id' className='text-lg flex'>
              Product id:
            </label>
            <input
              disabled
              type='text'
              name='id'
              className='w-3/4 p-2 rounded flex'
              value={id}
            />
            <div className='flex flex-col m-4 py-1'>
              <label htmlFor='ProductName' className='text-lg flex'>
                Product Name:
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='name'
                value={AddProductObj.name}
                className='w-3/4 p-2 rounded'
                placeholder='Enter product name...'
              />
            </div>
            <div className='flex flex-col m-4 py-1'>
              <label htmlFor='ProductDescription' className='text-lg flex'>
                Description:
              </label>
              <input
                onChange={handleChange}
                type='text'
                name='description'
                value={AddProductObj.description}
                className='w-3/4 p-2 rounded'
                placeholder='Enter product description...'
              />
            </div>
            <div className='flex flex-col m-4 py-1'>
              <label htmlFor='Price' className='text-lg flex'>
                Price:
              </label>
              <input
                onChange={handleChange}
                type='number'
                name='price'
                className='w-3/4 p-2 rounded'
                value={AddProductObj.price}
                placeholder='e.g., 50'
              />
            </div>
            <div className='flex flex-col m-4 py-1'>
              <label htmlFor='quantity' className='text-lg flex'>
                Quantity:
              </label>
              <input
                onChange={handleChange}
                type='number'
                name='quantity'
                className='w-3/4 p-2 rounded'
                value={AddProductObj.quantity}
                placeholder='e.g., 50'
              />
            </div>
            <div className='bg-slate-900 text-white w-44 flex justify-center items-center py-2 rounded m-4'>
              <button type='submit' onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Update;
