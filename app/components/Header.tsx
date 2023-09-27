"use client"

import '../sass/header.scss';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface HeaderProps {
  
}

const Header: React.FC<HeaderProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 600);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const storedData = localStorage.getItem('registrationData');
    if (storedData) {
      const { fullName } = JSON.parse(storedData);
      setUserName(fullName);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogout = () => {
    const confirmDelete = window.confirm('Are you sure you want to delete your account?');

    if (confirmDelete) {
      localStorage.removeItem('registrationData');
      alert('Your account has been deleted.');
    }
  };

  return (
    <header className="header">
      <div className="container mx-auto header__con">
        <div className="header__left">
          <Link href="/">
            <Image src="/assets/LogoEatly.svg" alt="logo eatly" width={100} height={100} />
          </Link>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/dishes">Dishes</Link>
            </li>
          </ul>
        </div>
        <div className="header__right">
          {isMobile ? (
            <div className="burger__menu" onClick={toggleMenu}>
              <Image src="/assets/menu-burger.png" alt="burger menu" width={30} height={30} />
            </div>
          ) : (
            <ul className="header__register-block">
              <li>
                <Link href="/cart">
                  <Image src="/assets/cart.png" alt="cart logo" width={30} height={30} />
                </Link>
              </li>
              {userName ? (
                <>
                  <li className="header__login">
                    <span>{userName}</span>
                  </li>
                  <li className="header__register">
                    <Link href="/">
                      <button>Log Out</button>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="header__login">
                    <Link href="/login">Login</Link>
                  </li>
                  <li className="header__register">
                    <Link href="/register">
                      <button>Sign Up</button>
                    </Link>
                  </li>
                </>
              )}
            </ul>
          )}
        </div>
      </div>
      {isMobile && isMenuOpen && (
        <ul className="header__menu">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/dishes">Dishes</Link>
          </li>
          <li>
            <Link href="/cart">
              <Image src="/assets/cart.png" alt="cart logo" width={30} height={30} />
            </Link>
          </li>
          {userName ? (
            <>
              <li className="header__login">
                <span>{userName}</span>
              </li>
              <li className="header__register">
                <button onClick={handleLogout}>Log Out</button>
              </li>
            </>
          ) : (
            <>
              <li className="header__login">
                <Link href="/login">Login</Link>
              </li>
              <li className="header__register">
                <Link href="/register">
                  <button>Sign Up</button>
                </Link>
              </li>
            </>
          )}
        </ul>
      )}
    </header>
  );
};

export default React.memo(Header);