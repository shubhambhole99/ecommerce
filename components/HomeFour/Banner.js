import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import VisibilitySensor from 'react-visibility-sensor';
import dynamic from 'next/dynamic';

const options = {
  loop: true,
  nav: false,
  dots: true,
  autoplayHoverPause: true,
  items: 1,
  smartSpeed: 750,
  autoplay: true,
  navText: [
    "<i class='flaticon-left'></i>",
    "<i class='flaticon-right-arrow'></i>",
  ],
};

const Banner = () => {
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
    <>
      {display ? (
        <>
          <div className='hero-banner'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container'>
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className='row align-items-center'>
                        <div className='col-lg-6'>
                          <div className='main-banner-content'>
                            <span
                              className={
                                isVisible ? 'sub-title animated fadeInUp' : ''
                              }
                            >
                              Limited Time Offer!
                            </span>
                            <h1
                              className={isVisible ? 'animated fadeInUp' : ''}
                            >
                              Winter-Spring!
                            </h1>
                            <p className={isVisible ? 'animated fadeInUp' : ''}>
                              Take 20% Off ‘Sale Must-Haves'
                            </p>

                            <div className='btn-box'>
                              <div
                                className={isVisible ? 'animated fadeInUp' : ''}
                              >
                                <Link href='/products-left-sidebar'>
                                  <a className='default-btn'>Shop Women's</a>
                                </Link>
                                <Link href='/products-left-sidebar'>
                                  <a className='optional-btn'>Shop Men's</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-6'>
                          <div className='banner-image'>
                            <div
                              className={
                                isVisible ? 'circle animated zoomIn' : ''
                              }
                            ></div>
                            <img
                              className={isVisible ? 'animated fadeInUp' : ''}
                              src='../images/banner-img2.png'
                              alt='image'
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>

          <div className='hero-banner'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container'>
                  <VisibilitySensor>
                    {({ isVisible }) => (
                      <div className='row align-items-center'>
                        <div className='col-lg-6'>
                          <div className='main-banner-content'>
                            <span
                              className={
                                isVisible ? 'sub-title animated fadeInUp' : ''
                              }
                            >
                              Exclusive Offer!
                            </span>
                            <h1
                              className={isVisible ? 'animated fadeInUp' : ''}
                            >
                              Summer-Fashion!
                            </h1>
                            <p className={isVisible ? 'animated fadeInUp' : ''}>
                              Leap year offer ‘Sale Must-Haves'
                            </p>

                            <div className='btn-box'>
                              <div
                                className={isVisible ? 'animated fadeInUp' : ''}
                              >
                                <Link href='/products-left-sidebar'>
                                  <a className='default-btn'>Shop Women's</a>
                                </Link>
                                <Link href='/products-left-sidebar'>
                                  <a className='optional-btn'>Shop Men's</a>
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-6'>
                          <div className='banner-image'>
                            <div
                              className={
                                isVisible ? 'circle animated zoomIn' : ''
                              }
                            ></div>
                            <img
                              className={isVisible ? 'animated fadeInUp' : ''}
                              src='../images/banner-img1.png'
                              alt='image'
                            />
                          </div>
                        </div>
                      </div>
                    )}
                  </VisibilitySensor>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default Banner;
