/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductItem = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold">{product.title}</h3>
      
      <img src={product.image} alt="image" className='h-44' />
      <div className='mt-6 flex gap-5 justify-between items-center'>
      <button
        onClick={addToCart}
        className=" bg-blue-500 text-white py-2 px-4 rounded"
      >
        Add to Cart
      </button>
      <span className="text-gray-500">Price: ${product.price}</span>
      </div>
    </div>
  );
};

export default ProductItem;
