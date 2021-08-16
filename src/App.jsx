import React, { useState } from 'react';
import './App.css';
import Cart from './components/Cart';
import ItemContext from './components/store/ItemContext';

function App() {
  const [cartItems, setCartItems] = useState([
    { id: 1, title: 'Sport Shoes', price: 50 },
    { id: 2, title: 'Basketball', price: 30 },
    { id: 3, title: 'Baseball bat', price: 40 },
  ]);
  const [discount, setDiscount] = useState(20);

  const applyDiscount = () => {
    console.log('discount yra pritaikytas');
  };
  applyDiscount();
  return (
    <ItemContext.Provider value={{ discount, applyDiscount }}>
      <div className='App'>
        <h3>Context cart App component</h3>
        <Cart cartItems={cartItems} />
      </div>
    </ItemContext.Provider>
  );
}

export default App;
