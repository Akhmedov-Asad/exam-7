"use client"
import '../sass/dishes.scss'

import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
const apiDishes = `${apiUrl}/api/dishes`;

const Dishes: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [showRegistrationMessage, setShowRegistrationMessage] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiDishes);
        setDishes(response.data.data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching dishes:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (dish: Dish) => {
    const registrationData = localStorage.getItem('registrationData');
    if (registrationData) {
      localStorage.setItem('selectedDish', JSON.stringify(dish));
    } else {
      setShowRegistrationMessage(true);
      setTimeout(() => {
        setShowRegistrationMessage(false);
      }, 3000);
    }
  };

  const toggleAccordion = (index: number) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const filteredDishes = dishes.filter((dish) =>
    dish.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section>

    <div className="container mx-auto dishes__container">
   
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search..."
          // name boyicha qidiradi
          value={searchQuery}
          onChange={handleSearch}
        />
      </div>
      <div className="con__cardDishes">
        <div className="dishes__cards">
        {showRegistrationMessage && (
        <div className="registration-message">
          Please register to add dishes to your cart.
        </div>
      )}
          <div className="dishesCard__flex">
       
            {loading ? (
              <div className="spinner"></div>
            ) : (
              filteredDishes.map((dish) => (
                
                <div key={dish.id} className="card-dishes">
                  <div className="cardD__img">
                    <img src={`${apiUrl}/${dish.image}`} alt={dish.name} />
                  </div>
                  <div className="cardD__title">
                    <button style={{
                      backgroundColor:
                        dish.type.toLowerCase() == "trending"
                          ? "#F7C5BA"
                          : dish.type.toLowerCase() == "healthy"
                            ? "#F7EDD0"
                            : "#AFE1AF",
                      color:
                        dish.type.toLowerCase() == "trending"
                          ? "#FB471D"
                          : dish.type.toLowerCase() == "healthy"
                            ? "#DAA31A"
                            : "#309D5B",
                    }}>{dish.type}</button>
                    <h2>{dish.name}</h2>
                  </div>
                  <div className="cardD__time-mark">
                    <span>{dish.time}min •</span>
                    <p>{dish.mark}</p>
                  </div>
                  <div className="cardD__price-button">
                    <p>${dish.price}</p>
                    <button onClick={() => handleAddToCart(dish)}>+</button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    
      <div className='accordion__block'>
        <div className="accordion__dishes">
          <h2>Frequently Asked
            <span> Questions</span></h2>
        </div>
        <div className="accordion__item">
          <div className='accordion__item-t'>
            <h3>How long does delivery take?</h3>
            <button onClick={() => toggleAccordion(0)}>
              {activeAccordion === 0 ? '-' : '+'}
            </button>
          </div>
          {activeAccordion === 0 && (
            <p>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?
            </p>
          )}
        </div>
        <div className="accordion__item">
          <div className='accordion__item-t'>
            <h3>How Does It Work ?</h3>
            <button onClick={() => toggleAccordion(1)}>
              {activeAccordion === 1 ? '-' : '+'}
            </button>
          </div>
          {activeAccordion === 1 && (
            <p>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?
            </p>
          )}
        </div>
        <div className="accordion__item">
          <div className='accordion__item-t'>
            <h3>How does your food delivery service work?</h3>
            <button onClick={() => toggleAccordion(2)}>
              {activeAccordion === 2 ? '-' : '+'}
            </button>
          </div>
          {activeAccordion === 2 && (
            <p>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?
            </p>
          )}
        </div>
        <div className="accordion__item">
          <div className='accordion__item-t'>
            <h3>What payment options do you accept?</h3>
            <button onClick={() => toggleAccordion(3)}>
              {activeAccordion === 3 ? '-' : '+'}
            </button>
          </div>
          {activeAccordion === 3 && (
            <p>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?
            </p>
          )}
        </div>
        <div className="accordion__item">
          <div className='accordion__item-t'>
            <h3>Do you offer discounts or promotions?</h3>
            <button onClick={() => toggleAccordion(4)}>
              {activeAccordion === 4 ? '-' : '+'}
            </button>
          </div>
          {activeAccordion === 4 && (
            <p>
              You Can Get Information By Contacting Our Support Team Have 24/7 Service.What’s The Difference Between Free And Paid Plan ?
            </p>
          )}
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default React.memo(Dishes);



