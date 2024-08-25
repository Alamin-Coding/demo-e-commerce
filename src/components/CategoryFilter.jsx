/* eslint-disable react/prop-types */
import  { useEffect, useState } from 'react';
import { fetchCategories } from '../api';

const CategoryFilter = ({ onSelectCategory }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetchCategories().then(response => {
      setCategories(response.data);
    });
  }, []);

  return (
    <div className="mb-4">
      <select onChange={(e) => onSelectCategory(e.target.value)} className="p-2 border rounded">
        <option value="">All</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
