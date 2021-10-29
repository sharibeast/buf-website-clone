import React from 'react';
import Image from 'next/image';
import arrowdown from '../../public/assets/arrowwww.svg';

export default function Hero(): JSX.Element {
  return (
    <>
      <div className="mt-20 md:mt-5">
        <h1 className="bg-bluebluf text-center text-white tracking-wide text-opacity-95 py-3 md:py-5 px-10 md:px-20 ml-3 md:ml-40 text-3xl md:text-5xl">
          Building better way
        </h1>
        <h2 className="bg-cyanbluf text-center justify-center text-bluebluf tracking-wide text-opacity-95 py-3 md:py-6 px-10 md:px-20 mr-3 md:mr-40 text-2xl md:text-5xl">
          to work with protocal buffers
        </h2>
        <div className="py-4 px-28">
          <p className="text-center md:text-2xl text-lg align-baseline text-bluetextbluf tracking-wider">
            We thought about Protocol Buffers so you don&apos;t have to.
          </p>
        </div>
        <div className="py-4 flex items-center justify-center">
          <span className="mr-2">
            <Image src={arrowdown} alt="arrow down" />
          </span>
          <span className="uppercase ml-2 tracking-wide text-bluetextbluf">
            learn more
          </span>
        </div>
        <div>
          <div className="flex">
            <hr />
            <span>adopted by</span>
          </div>
        </div>
      </div>
    </>
  );
}
