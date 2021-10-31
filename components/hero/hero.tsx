import React from 'react';
import Image from 'next/image';
import arrowdown from '../../public/assets/arrowwww.svg';
import lyf from '../../public/assets/lyA.svg';
import cockroachDB from '../../public/assets/cockroCH2.svg';
import google from '../../public/assets/google.svg';

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
        <div className="py-2 px-14 md:py-4 md:px-28">
          <p className="text-center md:text-2xl text-sm sm:text-lg align-baseline text-bluetextbluf tracking-wider">
            We thought about Protocol Buffers so you don&apos;t have to.
          </p>
        </div>
        <div className="py-4 flex items-center justify-center">
          <span className="mr-2">
            <Image src={arrowdown} alt="arrow down" />
          </span>
          <span className="uppercase ml-2 tracking-wide text-bluetextbluf">learn more</span>
        </div>
        <div>
          <div className="flex justify-center items-center mt-8">
            <span className="text-center text-graybluf font-semibold uppercase tracking wider">
              adoted by
            </span>
          </div>
          <div className="flex justify-center flex-wrap items-center py-10">
            <div className="flex">
              <div className="mr-4 w-full h-auto">
                <Image src={google} alt="google" />
              </div>
              <div className="mx-4 w-full h-auto">
                <Image src={lyf} alt="lyf logo" />
              </div>
              <div className="ml-4 w-full h-auto">
                <Image src={cockroachDB} alt="cockroachDB logo" />
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </>
  );
}
