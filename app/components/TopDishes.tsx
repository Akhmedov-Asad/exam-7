"use client"
import '../sass/topDishes.scss'

import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import StarIcon from '../../public/assets/cart.png';
import ArrowRight from '../../public/assets/arrowRightt.png';
import '../sass/topDishes.scss';
import Image from 'next/image';
import Link from 'next/link';

interface Dish {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
  name: string;
  //   image: string;
  type: string;
  time: string;
  mark: string;
  price: string;
}

const apiUrl = 'http://207.154.221.44:4002';
const apiDishes = `${apiUrl}/api/dishes`;

const TopDishes: React.FC = () => {
  const [dishes, setDishes] = useState<Dish[]>([]);

  useEffect(() => {
    axios
      .get(apiDishes)
      .then((response) => {
        console.log(response);
        const dishesData: Dish[] = response.data.data.data;
        console.log(dishesData);
        setDishes(dishesData);
      })
      .catch((error) => {
        console.error('Error fetching dishes:', error);
      });
  }, []);

  return (
    <section className="Dishes">
      <div className="container mx-auto topDishes__container">
        <h2>
          Our Top <span>Dishes</span>
        </h2>
        <div className="card_tDishes">
          {dishes.slice(4, 8).map((dish) => (

            <div key={dish.id} className="card__topDishes">
              <div className="topD__img">
                <img src={`${apiUrl}/${dish.image}`} alt={dish.name} />
              </div>
              <div className="title__topD">
                <div className="topD__type">
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
                </div>
                <div className="topD__name">
                  <h3>{dish.name}</h3>
                </div>
                <div className="topD__minute-rating">
                  <p>{dish.time}min</p>
                  <span>{dish.mark}</span>
                </div>
                <div className="topD__price">
                  <p>${dish.price}</p>
                  <Link href='/dishes'><button>+</button></Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className='View__all'>
          <h3></h3>
          <h3> <Link href='/dishes'>Viev All</Link> <Image src={ArrowRight} alt="ArrowRight" /></h3>
        </div>
      </div>
    </section>
  );
};

export default memo(TopDishes);