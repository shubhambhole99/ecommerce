import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  autoplay: true,
  animateOut: 'fadeOut',
  mouseDrag: false,
  items: 1,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>",
  ],
};

const CategoriesOneGrid = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    setDisplay(true);
  }, []);

  useEffect(() => {
    setIsMounted(!false);
  }, []);

  return (
    <section className='offer-products-area ptb-100'>
      <div className='container'>
        {display ? (
        <>
            <div className='single-offer-products'>
              <div className='content'>
                <h3>
                  <Link href='/products-without-sidebar-3'>
                    <a>New Collections!</a>
                  </Link>
                </h3>
                <p>
                  Stylist Allison Taylor take on the summer season's trends.
                </p>

                <Link href='/products-without-sidebar-3'>
                  <a className='default-btn'>Discover Now!</a>
                </Link>
              </div>

              <div className='image'>
                <Link href='/products-without-sidebar-3'>
                  <a>
                    <img src='../images/offer/offer1.jpg' alt='image' />
                  </a>
                </Link>
              </div>
            </div>

            <div className='single-offer-products'>
              <div className='content'>
                <h3>
                  <Link href='/products-without-sidebar-3'>
                    <a>Our Popular Products</a>
                  </Link>
                </h3>
                <p>
                  Stylist Allison Taylor take on the summer season's trends.
                </p>

                <Link href='/products-without-sidebar-3'>
                  <a className='default-btn'>Discover Now!</a>
                </Link>
              </div>

              <div className='image'>
                <Link href='/products-without-sidebar-3'>
                  <a>
                    <img src='../images/offer/offer2.jpg' alt='image' />
                  </a>
                </Link>
              </div>
            </div>

            <div className='single-offer-products'>
              <div className='content'>
                <h3>
                  <Link href='/products-without-sidebar-3'>
                    <a>Hot Trending Products</a>
                  </Link>
                </h3>
                <p>
                  Stylist Allison Taylor take on the summer season's trends.
                </p>

                <Link href='/products-without-sidebar-3'>
                  <a className='default-btn'>Discover Now!</a>
                </Link>
              </div>

              <div className='image'>
                <Link href='/products-without-sidebar-3'>
                  <a>
                    <img src='../images/offer/offer3.jpg' alt='image' />
                  </a>
                </Link>
              </div>
            </div>
            </>
        ) : (
          ''
        )}
      </div>
    </section>
  );
};

export default CategoriesOneGrid;
