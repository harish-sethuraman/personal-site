import React, { useEffect } from 'react';
import lax from 'lax.js';
import LazyLoad from 'react-lazy-load';
import ImageLoader from '../image-loader';

const HeroSection = () => {
  useEffect(() => {
    // Setup lax
    lax.init();

    lax.addDriver('scrollY', () => window.scrollY);

    // lax.addElements('.triangle-left-md ', {
    //   scrollY: {
    //     translateX: [
    //       ['elCenterY +200', 'elOutY +500'],
    //       [0, 'screenHeight * 2'],
    //     ],
    //   },
    // });

    // lax.addElements('.project', {
    //   scrollY: {
    //     translateX: [['elCenterY + 200', 'elOutY + 500 '],
    //       [0, 'screenHeight / -3']],
    //   },
    // });

    // lax.addElements('.strek-avatar', {
    //   scrollY: {
    //     translateX: [
    //       ['elCenterY + 200', 'elOutY + 500 '],
    //       [0, 'screenHeight / -3'],
    //     ],
    //   },
    // });
    // Add your elements
    lax.addElements('.bubble', {
      scrollY: {
        translateY: [
          ['screenHeight/3', 'screenHeight'],
          ['Math.random()*screenHeight * 2.5', 'Math.random()*screenWidth*2'],
        ],
        opacity: [
          ['screenHeight/4', 'screenHeight/2'],
          [1, 0],
        ],
        scale: [[0], ['(Math.random()*0.8)+0.2']],
        transform: [
          [0, 4000],
          [0, 'Math.random() * 1000'],
          {
            cssFn(val) {
              return `rotateX(${val % 360}deg)`;
            },
          },
        ],
        rotate: [
          [0, 4000],
          [0, 1000],
        ],
      },
    });
    // lax.addElements('.rocket', {
    //   scrollY: {
    //     translateX: [[0, 'elOutY'], [0, 'screenWidth-150']],
    //     rotate: [
    //       [0],
    //       [45],
    //     ],
    //   },
    // });
    // lax.addElements('.mars', {
    //   scrollY: {
    //     rotate: [
    //       [0, 1000],
    //       [1000, 4000],
    //     ],
    //   },
    // });
  }, []);
  return (
    <section id="home" className="home d-flex  align-items-center">
      <div className="container">
        <div className="intro align-text-center">
          <center>
            <div className="intro-image">
              <LazyLoad width={150} height={150} debounce={false} offset={400}>
                <ImageLoader
                  src="https://avatars.githubusercontent.com/u/32865581?s=460&u=c4feab5026e0578e9e899d66ec04fbbeb2991b7a&v=4"
                  alt="Strek"
                  className="intro-image mb-4"
                />
              </LazyLoad>
            </div>
          </center>

          <h1 className="animate__animated animate__zoomIn hero-heading">
            Hey 👋 ! I’m
            {' '}
            <a className="magic-link" href="https://github.com/harish-sethuraman" target="_blank" rel="noreferrer">Harish Kumar</a>
          </h1>

          <div className="slidingVertical">
            <h2>Software Engineer at Freshworks 👨🏻‍💻</h2>
            <h2>Javascript Enthusiast </h2>
            <h2>webpack beginner 🥳</h2>
            <h2>C++ guy 😌</h2>
            <h2>React JS fan🎉</h2>
          </div>

          <ul className="social-icons  list-inline mb-0">
            <li className="list-inline-item">
              <a href="https://github.com/harish-sethuraman">
                <i className="fa fa-github" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://www.linkedin.com/in/harish-kumar-7b4a8715b/">
                <i className="fa fa-linkedin" />
              </a>
            </li>
            <li className="list-inline-item">
              <a href="https://stackoverflow.com/users/8780399/strek">
                <i className="fa fa-stack-overflow" />
              </a>
            </li>
          </ul>

          <div className="mt-4">
            <a
              href="mailto:ssharishkumargmail.com?subject=Pinging from website"
              className="btn btn-default"
            >
              Hire me
            </a>
          </div>
        </div>

        <div className="scroll-down ">
          <a href="#about" className="mouse-wrapper">
            <span>Scroll Down</span>
            <span className="mouse">
              <span className="wheel" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
