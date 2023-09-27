import '../sass/customerSay.scss'
import React, { memo } from 'react';
import Image from 'next/image';

import Stars from '../../public/assets/Stars-5.png';
import ProfileAlex from '../../public/assets/profile_alex.png';
import FoodImage from '../../public/assets/FoodImage.png';
import Qoutes from '../../public/assets/quotes.png';

const CustomerSay = () => {
  return (
    <section className="CustomerSay">
    <div className="container mx-auto CustomerSay__container">
        <div className="customerSay__top">
            <h3><span>Customer</span> Say</h3>
            <ul className='customerSay__list'>
                <li className='customerSay__item'>
                    <nav className='CS__list-top'>
                        <div className="CS__image">
                            <Image src={ProfileAlex} alt='alex profile img' />
                            <div className="CS__Title">
                                <h5>Alexander R.</h5>
                                <p>01 Year With Us </p>
                            </div>
                        </div>
                        <div className="CS__Qoutes-img">
                            <Image src={Qoutes} alt='Qoutes' />
                        </div>
                    </nav>
    
                    <div className="CS__subtitle-center">
                        <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                    </div>
    
                    <div className='CS__stars-img'>
                        <Image src={Stars} alt='stars' />
                    </div>
                </li>
                <li className='customerSay__item'>
                    <nav className='CS__list-top'>
                        <div className="CS__image">
                            <Image src={ProfileAlex} alt='alex profile img' />
                            <div className="CS__Title">
                                <h5>Alexander R.</h5>
                                <p>01 Year With Us </p>
                            </div>
                        </div>
                        <div className="CS__Qoutes-img">
                            <Image src={Qoutes} alt='Qoutes' />
                        </div>
                    </nav>
    
                    <div className="CS__subtitle-center">
                        <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                    </div>
    
                    <div className='CS__stars-img'>
                        <Image src={Stars} alt='stars' />
                    </div>
                </li>
                <li className='customerSay__item'>
                    <nav className='CS__list-top'>
                        <div className="CS__image">
                            <Image src={ProfileAlex} alt='alex profile img' />
                            <div className="CS__Title">
                                <h5>Alexander R.</h5>
                                <p>01 Year With Us </p>
                            </div>
                        </div>
                        <div className="CS__Qoutes-img">
                            <Image src={Qoutes} alt='Qoutes' />
                        </div>
                    </nav>
    
                    <div className="CS__subtitle-center">
                        <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                    </div>
    
                    <div className='CS__stars-img'>
                        <Image src={Stars} alt='stars' />
                    </div>
                </li>
                <li className='customerSay__item'>
                    <nav className='CS__list-top'>
                        <div className="CS__image">
                            <Image src={ProfileAlex} alt='alex profile img' />
                            <div className="CS__Title">
                                <h5>Alexander R.</h5>
                                <p>01 Year With Us </p>
                            </div>
                        </div>
                        <div className="CS__Qoutes-img">
                            <Image src={Qoutes} alt='Qoutes' />
                        </div>
                    </nav>
    
                    <div className="CS__subtitle-center">
                        <p>“ Online invoice payment helps companies save time, are faster and save maximum effort for the clients and save maximum effort. Online invoice payment helps companies save time ”</p>
                    </div>
    
                    <div className='CS__stars-img'>
                        <Image src={Stars} alt='stars' />
                    </div>
                </li>
    
            </ul>
        </div>
    
        <div className="customerSat__bottom">
            <div className="CS__bottom-left">
                <h3>GET 50%</h3>
                <form>
                    <input type="text" placeholder=' Enter Your Email Address' />
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

export default memo(CustomerSay);

