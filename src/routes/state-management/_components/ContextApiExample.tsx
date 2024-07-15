import React, { createContext, useContext } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  subcategory: string;
  price: number;
}

const CategoryContext = createContext<string>('all');

const ProductPage: React.FC = () => {
  return (
    <div style={{ display: 'flex' }}>
      <CategoryContext.Provider value={'electronics'}>
        <MainContent />
      </CategoryContext.Provider>
    </div>
  );
};

const MainContent: React.FC = () => {
  return <ProductList />;
};

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop',
    category: 'electronics',
    subcategory: 'Laptops',
    price: 1000,
  },
  {
    id: 2,
    name: 'Shirt',
    category: 'fashion',
    subcategory: 'Shirts',
    price: 50,
  },
  { id: 3, name: 'Book', category: 'books', subcategory: 'Fiction', price: 20 },
];

const ProductList: React.FC = () => {
  const category = useContext(CategoryContext);

  const filteredProducts = products.filter(
    product => category === 'all' || product.category === category
  );

  return (
    <div>
      {filteredProducts.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p>Subcategory: {product.subcategory}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
