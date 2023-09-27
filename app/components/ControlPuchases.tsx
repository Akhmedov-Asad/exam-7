"use client"
import '../sass/controlPuchases.scss'
import Money from '../../public/assets/money.png'
import Wallet from '../../public/assets/wallet.png'

import React, { useEffect, useState, memo } from 'react';
import axios from 'axios';
import { AxiosResponse } from 'axios';
import { Dish } from '../components/types';
import '../sass/controlPuchases.scss';
import Image from 'next/image';

const apiUrl = 'http://207.154.221.44:4002';
const apiDishes = `${apiUrl}/api/dishes`;

const ControlPuchases: React.FC = () => {
    const [dishes, setDishes] = useState<Dish[]>([]);


    useEffect(() => {
        axios.get(apiDishes)
            .then((response: AxiosResponse<Dish[]>) => {
                const dishesData: Dish[] = response.data.data.data;
                setDishes(dishesData);
            })
            .catch((error) => {
                console.error('Error fetching dishes:', error);
            });
    }, []);

    return (
        <section className="controlPuchases">
            <div className='container mx-auto cotrolP__container'>
                <div className='controlP__left'>
                    <h2>Control <span>Purchases</span> Via Dashboard</h2>
                    {dishes.slice(0, 3).map((dish) => (
                        <div className='controlP__card' key={dish.id}>
                            <div className='controlP__item-left'>
                                <div className='controlP__img'>
                                    <img src={`${apiUrl}/${dish.image}`} alt={dish.name} />
                                </div>
                                <div className="controlP__title">
                                    <h3>{dish.name}</h3>
                                    <p>{dish.type}</p>
                                </div>
                            </div>
                            <div className="controlP__dates">
                                <h5>{dish.createdAt.slice(12, 16)} <span>PM</span> </h5>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='controlP__right'>
                    <div className="CP__title-top">
                        <div className="CP__right-title">
                            <h3>Purchases</h3>
                            <select>
                                <option value="This month">This month</option>
                                <option value="This month">Last month</option>
                                <option value="This month">This month</option>
                            </select>
                        </div>

                        <div className="CP__right-card">
                            <div className="CP__card-one">
                                <div className="borderCP">
                                    <div className='CP__card__left'>
                                        <Image src={Wallet} alt="money" width={30} height={30} />
                                        <div>
                                            <h4>Expense</h4>
                                            <p>Increased By 10%</p>
                                        </div>
                                    </div>
                                    <span>$409.00</span>
                                </div>
                            </div>
                            <div className="CP__card-two">
                                <div className="borderCP2">
                                    <div className='CP__card__left2'>
                                        <Image src={Money} alt="money" width={30} height={30} />
                                        <div>
                                            <h4>Vocher Usage</h4>
                                            <p>Increased By 5%</p>
                                        </div>
                                    </div>
                                    <span>$45.78</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(ControlPuchases);