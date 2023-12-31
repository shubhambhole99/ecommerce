import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
      items: 6,
    },
  },
};

const InstagramFeed = () => {
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
    <div className='instagram-area'>
      <div className='container-fluid'>
        <div className='instagram-title'>
          <a href='#' target='_blank'>
            <i className='bx bxl-instagram'></i> Follow us on @livani
          </a>
        </div>

        {display ? (
          <>
            <div className='single-instagram-post'>
              <img src='../images/home6/instagram/insta1.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../images/home6/instagram/insta2.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../images/home6/instagram/insta3.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../images/home6/instagram/insta4.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../images/home6/instagram/insta5.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../images/home6/instagram/insta6.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../images/home6/instagram/insta7.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../images/home6/instagram/insta8.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>

            <div className='single-instagram-post'>
              <img src='../images/home6/instagram/insta9.jpg' alt='image' />

              <i className='bx bxl-instagram'></i>

              <Link href='#'>
                <a target='_blank' className='link-btn'></a>
              </Link>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default InstagramFeed;
