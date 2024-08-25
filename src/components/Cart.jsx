import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { formatCurrency } from '../utils/currency';

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const { cart } = state;

  const removeFromCart = (id) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  // Calculate the total amount
  const totalAmount = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="mb-2 p-2 bg-white shadow-md rounded-lg">
                <div className='flex gap-6 items-center'>
                    <div>
                        <img src={item.image} alt="image" className='w-20 h-20' />
                    </div>
                    <div>
                        <h4 className="font-bold">{item.title}</h4>
                        <p className="text-gray-600">{formatCurrency(item.price)}</p>
                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="mt-2 bg-red-500 text-white py-1 px-3 rounded"
                        >
                            Remove
                        </button>
                    </div>
                </div>
            </div>
          ))}
          <div className="mt-4 p-2 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-bold">Total Amount: {formatCurrency(totalAmount)}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
