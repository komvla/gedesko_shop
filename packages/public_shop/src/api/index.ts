// ========== GET METHODS ==========

// Get all products
export const getAllProducts = () => 'https://fakestoreapi.com/products';

// Get a specific product (replace {id} with the product identification number)
export const getProduct = (id: number) =>
  `https://fakestoreapi.com/products/${id}`;

// Get all categories
export const getAllCategories = () =>
  'https://fakestoreapi.com/products/categories';

// Get all products in a specific category (replace {category} with the name of the category)
export const getProductsByCategory = (category: string) =>
  `https://fakestoreapi.com/products/category/${category}`;

// Get all users
export const getAllUsers = () => 'https://fakestoreapi.com/users';

// Get a specific user (replace {id} with the user identification number)
export const getUser = (id: number) => `https://fakestoreapi.com/users/${id}`;

// Get all orders
export const getAllOrders = () => 'https://fakestoreapi.com/orders';

// Get a specific order (replace {id} with the order identification number)
export const getOrder = (id: number) => `https://fakestoreapi.com/orders/${id}`;

// Get all shopping carts
export const getAllCarts = () => 'https://fakestoreapi.com/carts';

// Get a specific shopping cart (replace {id} with the cart identification number)
export const getCart = (id: number) => `https://fakestoreapi.com/carts/${id}`;
