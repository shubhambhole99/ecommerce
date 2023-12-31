import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';


const options = {
  loop: true,
  nav: false,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>",
  ],
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 7,
    },
  },
};

const ShopByBrandTwo = () => {
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
    <div className='brand-area ptb-70'>
      <div className='container'>
        <div className='section-title text-left'>
          <span className='sub-title'>We Believe In</span>
          <h2>Shop By Brand</h2>
        </div>

        {display ? (
          <>
            <div className='brand-item'>
              <a href='#'>
                <img src='../images/brand/brand1.png' alt='image' />
              </a>
            </div>

            <div className='brand-item'>
              <a href='#'>
                <img src='../images/brand/brand2.png' alt='image' />
              </a>
            </div>

            <div className='brand-item'>
              <a href='#'>
                <img src='../images/brand/brand3.png' alt='image' />
              </a>
            </div>

            <div className='brand-item'>
              <a href='#'>
                <img src='../images/brand/brand4.png' alt='image' />
              </a>
            </div>

            <div className='brand-item'>
              <a href='#'>
                <img src='../images/brand/brand5.png' alt='image' />
              </a>
            </div>

            <div className='brand-item'>
              <a href='#'>
                <img src='../images/brand/brand6.png' alt='image' />
              </a>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default ShopByBrandTwo;
