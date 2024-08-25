
import ProductList from './components/ProductList';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6">E-commerce App</h1>
      <Cart />
      <ProductList />
    </div>
  );
}

export default App;
