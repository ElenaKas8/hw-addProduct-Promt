
import React, { useState } from 'react';
import ProductItem from './components/ProductItem';
import css from './components/ProductItem.module.css';
function App() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Велосипед', price: 1000, count: 1 },
    { id: 2, name: 'Самокат', price: 700, count: 1 },
    { id: 3, name: 'Ролики', price: 1300, count: 2 },
    { id: 4, name: 'Сноуборд', price: 19000, count: 4 },
  ]);

  const handleIncrement = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, count: product.count + 1 } : product
    );
    setProducts(updatedProducts);
  };

  const handleDecrement = (id) => {
    const updatedProducts = products.map((product) =>
      product.id === id ? { ...product, count: Math.max(product.count - 1, 0) } : product
    );
    setProducts(updatedProducts);
  };

  const handleAddProduct = () => {
    const name = prompt('Введите название товара:');
    const price = parseFloat(prompt('Введите цену товара:'));
    const count = parseInt(prompt('Введите количество товара:'));
    const newProduct = { id: products.length + 1, name, price, count };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          name={product.name}
          price={product.price}
          count={product.count}
          onIncrement={() => handleIncrement(product.id)}
          onDecrement={() => handleDecrement(product.id)}
        />
      ))}
      <button className={css.buttonadd} onClick={handleAddProduct}>Добавить товар</button>
    </div>
  );
}

export default App;
