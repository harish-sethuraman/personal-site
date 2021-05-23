import React from 'react';
import LazyLoad from 'react-lazy-load';
// import Tetris from 'tetris-components';
import Tetris from '../../tetris'
import ImageLoader from '../image-loader';

const RenderProjects = (name) => {
  switch (name) {
    case 'Readme Components':
      return (
        <center>
          <LazyLoad debounce={false} offset={10000}>
            <ImageLoader
              src="https://readme-components.vercel.app/api?component=experience&amp;company=freshworks&amp;role=software%20Developer%20Intern&amp;duration=7m&amp;location=chennai&amp;fill=93c4fc"
              alt="image"
            />
          </LazyLoad>

          <LazyLoad debounce={false} offset={10000}>
            <ImageLoader
              src="https://readme-components.vercel.app/api?component=logo&amp;fill=black&amp;logo=webpack&amp;svgfill=8ed5fa"
              alt="image"
            />
          </LazyLoad>

          <LazyLoad debounce={false} offset={10000}>
            <ImageLoader
              src="https://readme-components.vercel.app/api?component=logo&amp;fill=black&amp;logo=react&amp;animation=spin&amp;svgfill=15d8fe"
              alt="image"
            />
          </LazyLoad>

          <LazyLoad debounce={false} offset={10000}>
            <ImageLoader
              width="95%"
              src="https://readme-components.vercel.app/api?component=stackoverflow&amp;stackoverflowid=8780399&amp;textfill=black&amp;fill=93c4fc&amp;textfill=white"
              alt="image"
            />
          </LazyLoad>
        </center>
      );
    case 'Tetris':
      return (
        <Tetris
          tetromino={
            {
              type: 'accordion',
              tetromino: [
                {
                  type: 'accordion-content',
                  title: 'Did you know',
                  content:
                    'Tetris is built using react and bundled using webpack',
                },
                {
                  type: 'accordion-content',
                  title: 'This is a readymade TETRIS component',
                  content: 'Probably visit my github to know more',
                },
                {
                  type: 'accordion-content',
                  title: 'created using JSON',
                  content: 'You can contribute too.',
                },
              ],
            }
}
        />
      );
    case 'WEFMS':
      return (
        <center>
          <LazyLoad width={200} height={400} debounce={false} offset={10000}>
            <ImageLoader
              src="https://harishkumar-s-s.firebaseapp.com/assets/img/svgs/wefms.svg"
              class="card-img-top"
              alt="image"
            />
          </LazyLoad>
        </center>
      );
    case 'Static site for KLN Vidyalaya':
      return (
        <center>
          <LazyLoad width={200} height={400} debounce={false} offset={10000}>
            <ImageLoader
              src="https://harishkumar-s-s.firebaseapp.com/assets/img/svgs/vidyalaya.svg"
              class="card-img-top"
              alt="image"
            />
          </LazyLoad>
        </center>
      );
    default:
      return <h1>Not found</h1>;
  }
};

export default RenderProjects;
