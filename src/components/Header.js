import React, { useState } from 'react';
import { FaShoppingBasket } from 'react-icons/fa';
import Order from './Order';

const showOrders = (orders, onDelete) => {
  const summa = orders.reduce((total, el) => total + parseFloat(el.price), 0); // Правильно парсим цену в число с плавающей точкой
  return (
    <div>
      {orders.map(el => (
        <Order onDelete={onDelete} key={el.id} item={el} />
      ))}
      <p className='summa'>Сумма: {new Intl.NumberFormat().format(summa)}₽</p>
    </div>
  );
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Товаров нет</h2>
    </div>
  );
}

export default function Header({ orders = [], onDelete }) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
      <div>
        <span className='logo'>Hype Shoes</span>
        <ul className='nav'>
          <li>Про нас</li>
          <li>Контакты</li>
          <li>Кабинет</li>
        </ul>
        <FaShoppingBasket 
          onClick={() => setCartOpen(!cartOpen)} 
          className={`shop-cart-button ${cartOpen && "active"}`} 
        />
        {cartOpen && (
          <div className='shop-cart'>
            {orders.length > 0 ? showOrders(orders, onDelete) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
