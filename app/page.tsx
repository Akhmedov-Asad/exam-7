import React, { lazy, memo } from 'react';

const Hero = lazy(() => import('./components/Hero'));
const Popularity = lazy(() => import('./components/Popularity'));
const MobileScreen = lazy(() => import('./components/MobileScreen'));
const Favorites = lazy(() => import('./components/Favorites'));
const TopDishes = lazy(() => import('./components/TopDishes'));
const ControlPuchases = lazy(() => import('./components/ControlPuchases'));
const CustomerSay = lazy(() => import('./components/CustomerSay'));

const Home = () => {
  return (
    <>
        <Hero />
        <Popularity />
        <MobileScreen />
        <Favorites />
        <TopDishes />
        <ControlPuchases />
        <CustomerSay />
    </>
  );
};

export default memo(Home);