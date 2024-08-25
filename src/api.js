import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

export const fetchProducts = () => {
  return axios.get(`${API_URL}/products`);
};

export const fetchCategories = () => {
  return axios.get(`${API_URL}/products/categories`);
};
