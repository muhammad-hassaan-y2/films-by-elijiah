'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import Logo from '../widgets/Logo';
import { AlignRight, X } from 'lucide-react';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const checkScroll = () => {
    if (window.scrollY > 100) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const handleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-40 flex items-center justify-between px-4 py-4 ${isScrolled ? 'bg-black bg-opacity-40' : 'bg-transparent'
      }`}
    >
      <div>
        <Logo />
      </div>

      <nav className='px-2 md:px-4 hidden md:block lg:block'>
        <ul className='flex space-x-4 text-gray-50 text-lg font-light'>
          <li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
            <Link href={'/'}>HOME</Link>
          </li>
          <li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
            <Link href={'/films'}>FILMS</Link>
          </li>
          <li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
            <Link href={'/about'}>ABOUT</Link>
          </li>
          <li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
            <Link href={'/experience'}>EXPERIENCE</Link>
          </li>
          <li className='hover:underline hover:underline-offset-4 duration-200 transition-all'>
            <Link href={'/contact-us'}>CONTACT US</Link>
          </li>
        </ul>
      </nav>
      <nav
        className='fixed right-4 z-50 cursor-pointer mt-[50px] md:hidden lg:hidden top-0 text-gray-950'
        onClick={handleIsOpen}
      >
        <div className='text-black'>
          {isOpen ? (
            <X size={45} className='text-white bg-black' color='black' />
          ) : (
            <AlignRight color='white' size={35} />
          )}
        </div>

        {isOpen && (
          <div className='fixed top-0 right-0 w-full h-full bg-white shadow-2xl p-4 z-40 flex items-center justify-center'>
            <div className='text-center'>
              {isOpen && (
                <div className='fixed top-0 right-0 w-full h-full bg-white shadow-2xl 
                 p-4 z-40 flex items-center justify-center'>
                  <div className='text-center'> {/* This additional div is for centering content vertically inside it */}
                    
                    <div className='text-2xl uppercase'>
                      <Link href={"/"}>
                        <h3 className='mb-7 hover:underline  '>Home</h3></Link>

                      <Link href={"/films"}>
                        <h3 className='mb-7 hover:underline'>FILMS</h3></Link>

                      <Link href={"/about"}>
                        <h3 className='mb-7 hover:underline'>ABOUT</h3></Link>

                      <Link href={"/experience"}>
                        <h3 className='mb-7 hover:underline'>Experience</h3>
                      </Link>

                      <Link href={"/contact-us"}>
                        <h3 className='mb-7 hover:underline'>CONTACT US</h3>
                      </Link>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

    </header>
  );
};
