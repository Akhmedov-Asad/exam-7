"use client"

import '../sass/cart.scss';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import FoodImage from '../../public/assets/FoodImage.png';

interface Dish {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  image: string;
  type: string;
  time: string;
  mark: string;
  price: string;
}

const apiUrl = 'http://207.154.221.44:4002';

const Cart: React.FC = () => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const savedSelectedDish = localStorage.getItem('selectedDish');
    if (savedSelectedDish) {
      setSelectedDish(JSON.parse(savedSelectedDish));
    }
  }, []);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const calculateTotal = () => {
    if (selectedDish) {
      const price = parseFloat(selectedDish.price);
      const total = price * quantity;
      return total.toFixed(2);
    }
    return "0.00";
  };

  return (
    <section>
      <div className="container mx-auto cart__container">
        <div className="cartDish__card">
          {selectedDish && (
            <div className="cart__item">
              <div className='cart__item-flex'>
                <div className="cart__item-img">
                  <img src={`${apiUrl}/${selectedDish.image}`} alt={selectedDish.name} />
                </div>
                <div className="cart__item-title">
                  <h3>{selectedDish.name}</h3>
                  <p>${selectedDish.price}</p>
                </div>
              </div>

              <div className='cart__item-btn'>
                <div>
                  <button className='cart__item-increment' onClick={handleDecrement}>-</button>
                  <span>{quantity}</span>
                  <button className='cart__item-decrement' onClick={handleIncrement}>+</button>
                </div>
                <span>${calculateTotal()}</span>
              </div>
            </div>

          )}

          <div className="ReviewPayment">
            <ul className='ReviewPayment__list'>
              <li className='ReviewPayment__item1'>
                <h4>Subtotal</h4>
                <span>${calculateTotal()}</span>
              </li>
              <li className='ReviewPayment__item2'>
                <h3>Total</h3>
                <span>${calculateTotal()}</span>
              </li>
            </ul>
            <button>Review Payment</button>
          </div>
        </div>

        <div className="customerSat__bottom">
          <div className="CS__bottom-left">
            <h3>GET 50%</h3>
            <form>
              <input type="text" placeholder='Enter Your Email Address' />
              <button>subscribe</button>
            </form>
          </div>
          <div className="CS__bottom-right">
            <Image src={FoodImage} alt='FoodImage' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cart;