import React, { useState } from 'react';
import { MobileNav } from './sub-components/mobileNav';
import Logo from '../../public/assets/logo.svg';
import menu from '../../public/assets/menu.svg';
import Image from 'next/image';
import Head from 'next/head';

export default function Navbar(): JSX.Element {
  const [show, setShow] = useState(false);
  return (
    <>
      <header>
        <nav className="flex items-center justify-between p-4 md:p-12">
          <div>
            <Image src={Logo} alt="logo" />
          </div>
          <div className="hidden lg:block">
            <ul className="flex">
              <li className="mx-3 py-3 text-lg uppercase hover:text-blue-600 hover:border-blue-600  transition-all duration-200 text-gray-700">
                product
              </li>
              <li className="mx-3 py-3 text-lg uppercase text-gray-700">
                product
              </li>
              <li className="mx-3 py-3 text-lg uppercase text-gray-700">
                product
              </li>
              <li className="mx-3 py-3 text-lg uppercase text-gray-700">
                product
              </li>
              <li className="mx-3 py-3 text-lg uppercase text-gray-700">
                product
              </li>
              <li className="mx-3 py-3 text-lg uppercase text-gray-700">
                product
              </li>
              <li className="mx-3 py-3 text-lg uppercase text-gray-700">
                product
              </li>
              <li className="mx-3 py-3 text-lg uppercase text-gray-700">
                product
              </li>
              <li className="mx-3 py-3 text-lg uppercase text-gray-700">
                product
              </li>
            </ul>
          </div>
          <button
            onClick={() => setShow(!show)}
            className="p-2 border-2 lg:hidden"
          >
            <div className="flex items-center">
              <Image src={menu} alt="menu" />
              <span className="text-lg uppercase">menu</span>
            </div>
          </button>
        </nav>
        {show && <MobileNav show={show} />}
      </header>
    </>
  );
}
