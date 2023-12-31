import React, { useState,useEffect } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const options = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  autoplay: true,
  items: 1,
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
          <div className='main-banner banner-bg2'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                      <div className='banner-content text-white'>
                        <div className='line'></div>
                        <span className='sub-title'>
                          Trending Women's Collection
                        </span>
                        <h1>New Inspiration 2020</h1>
                        <p>
                          Click here to shop in your local currency. We ship
                          over 2 million products around the world!
                        </p>
                        <div className='btn-box'>
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
                </div>
              </div>
            </div>
          </div>

          <div className='main-banner banner-bg4'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                      <div className='banner-content text-white'>
                        <div className='line'></div>
                        <span className='sub-title'>
                          Make Your Fashion Smarter
                        </span>
                        <h1>Clothing made for you!</h1>
                        <p>
                          Click here to shop in your local currency. We ship
                          over 2 million products around the world!
                        </p>
                        <div className='btn-box'>
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
                </div>
              </div>
            </div>
          </div>

          <div className='main-banner banner-bg5'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                      <div className='banner-content text-white'>
                        <div className='line'></div>
                        <span className='sub-title'>
                          Clothing Made For You!
                        </span>
                        <h1>Your Fashion Smarter</h1>
                        <p>
                          Click here to shop in your local currency. We ship
                          over 2 million products around the world!
                        </p>
                        <div className='btn-box'>
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
