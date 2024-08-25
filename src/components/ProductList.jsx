import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import ProductItem from './ProductItem';
import CategoryFilter from './CategoryFilter';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    fetchProducts().then(response => {
      setProducts(response.data);
      setFilteredProducts(response.data);
    });
  }, []);

  const handleCategorySelect = (category) => {
    if (category === '') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === category));
    }
  };

  return (
    <div>
      <CategoryFilter onSelectCategory={handleCategorySelect} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProducts.map(product => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
