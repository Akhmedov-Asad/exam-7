import '../sass/hero.scss'

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import HeroEats from '../../public/assets/HeroEats.png';

const Hero = () => {
    return (
        <section className="Hero">
            <div className="container mx-auto hero_1">
                <div className="hero__block">
                    <div className="hero__left">
                        <span>OVER 1000 USERS</span>
                        <h1>Enjoy Foods All Over The <span>World</span></h1>
                        <p>EatLy helps you set saving goals, earn cash back offers, Go to disclaimer for more details, and get paychecks up to two days early. Get a <span>$20 bonus.</span></p>
                        <Link href='/dishes'><button>Get Started</button></Link>
                    </div>
                    <div className="hero__right">
                        <Image src={HeroEats} alt='hero img' />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default React.memo(Hero);