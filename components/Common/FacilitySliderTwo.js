import React, { useState,useEffect } from 'react';
import dynamic from 'next/dynamic';

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  margin: 30,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>",
  ],
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    768: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
};

const FacilitySliderTwo = () => {
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
    <div className='facility-area pt-100 pb-70'>
      <div className='container'>
        {display ? (
       <>
            <div className='single-facility-box'>
              <div className='icon'>
                <i className='flaticon-tracking'></i>
              </div>
              <h3>Free Shipping Worldwide</h3>
            </div>

            <div className='single-facility-box'>
              <div className='icon'>
                <i className='flaticon-return'></i>
              </div>
              <h3>Easy Return Policy</h3>
            </div>

            <div className='single-facility-box'>
              <div className='icon'>
                <i className='flaticon-shuffle'></i>
              </div>
              <h3>7 Day Exchange Policy</h3>
            </div>

            <div className='single-facility-box'>
              <div className='icon'>
                <i className='flaticon-sale'></i>
              </div>
              <h3>Weekend Discount Coupon</h3>
            </div>

            <div className='single-facility-box'>
              <div className='icon'>
                <i className='flaticon-credit-card'></i>
              </div>
              <h3>Secure Payment Methods</h3>
            </div>

            <div className='single-facility-box'>
              <div className='icon'>
                <i className='flaticon-location'></i>
              </div>
              <h3>Track Your Order</h3>
            </div>

            <div className='single-facility-box'>
              <div className='icon'>
                <i className='flaticon-customer-service'></i>
              </div>
              <h3>24/7 Customer Support</h3>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default FacilitySliderTwo;
