import React from 'react';
import Logo from '../public/assets/logo.svg';
import menu from '../public/assets/menu.svg';
import Image from 'next/image';

export default function navbar(): JSX.Element {
  return (
    <header>
      <nav>
        <div>
          <Image src={Logo} alt="logo" />
        </div>
        <button className="nav">
          <div className="nav__btn">
            <Image src={menu} alt="menu" />
            <span>menu</span>
          </div>
        </button>
      </nav>
    </header>
  );
}
