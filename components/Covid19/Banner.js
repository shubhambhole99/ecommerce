import React,{useState,useEffect} from 'react';
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
          <div className='main-banner banner-bg10'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                      <div className='banner-content'>
                        <div className='line'></div>
                        <span className='sub-title'>Best Seller</span>
                        <h1>Medical Mask</h1>

                        <p>
                          Be Clean & Keep Clean, Maintain Social Distance, Avoid
                          All Kinds of Crowds including Social Gathering,
                          Protect Yourself and Others, Save Humankind!
                        </p>

                        <div className='btn-box'>
                          <Link href='/products-left-sidebar'>
                            <a className='default-btn'>Shop Now!</a>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='main-banner banner-bg11'>
            <div className='d-table'>
              <div className='d-table-cell'>
                <div className='container-fluid'>
                  <div className='row'>
                    <div className='col-lg-6 col-md-12'>
                      <div className='banner-content'>
                        <div className='line'></div>
                        <span className='sub-title'>Trading Collection</span>
                        <h1>Hand Sanitizer</h1>

                        <p>
                          Be Clean & Keep Clean, Maintain Social Distance, Avoid
                          All Kinds of Crowds including Social Gathering,
                          Protect Yourself and Others, Save Humankind!
                        </p>

                        <div className='btn-box'>
                          <Link href='/products-left-sidebar'>
                            <a className='default-btn'>Shop Now!</a>
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
