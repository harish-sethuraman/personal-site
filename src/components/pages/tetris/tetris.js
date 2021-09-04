import React, { useState, useEffect } from 'react';
// import Tetris from 'tetris-components';
import marked from 'marked';
import { Helmet } from 'react-helmet';
import Tetris from '../../../tetris';

const TetrisPage = () => {
  const [markdownText, setMarkdownText] = useState('Loading');
  const fetchMarkdown = () => {
    fetch('../../../datas/tetris.md').then((text) => text.text()).then((text) => setMarkdownText(marked(text)));
  };
  useEffect(() => {
    fetchMarkdown();
  }, []);
  const tetObjects = {
    button: { type: 'button', content: 'Click here' },
    progress: { type: 'progress', content: 50, theme: 'danger' },
    accordion:
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
        },
    alert: {
      type: 'alert', content: 'Does it look like alert', heading: 'alert', theme: 'success', close: true,
    },
    tab: {
      type: 'tab',
      pills: true,
      tetromino: [{
        type: 'tab-content',
        title: 'What is Tetris ?',
        content: 'Tetris is a singular component library that provides all the bootstrap components under the same roof. Me as a frontend developer have always been writing numerous lines of code to create components such as tab or accordion. So i wanted to simplify the effort to write code thereby providing the data in form of JSON. This is how tetris was born !😄',
      },
      {
        type: 'tab-content',
        title: 'Why Tetris ?',
        content: 'Tetris contains all the bootstrap components that are available from buttons to tabs. Tetris is being transformed into a library where one can build card or a section or even a whole website for them just by providing the JSON data.',
      },
      {
        type: 'tab-content',
        title: 'About Tetris',
        content: 'Tetris is written in reactJS with prop validation. Tetris is bundled with webpack. Almost all the smaller components that you see in my website from the progress bar in the home page to the buttons everything are rendered using tetris. But as you can see how perfect they have fitted with the external CSS.',
      },
      ],
    },
  };

  const [tetromino, setTetromino] = useState(tetObjects.button);

  return (
    <main className="content">
      <Helmet>
        <title>Tetris Component</title>
        <meta property="og:description" content="Tetris is a singular component library that provides all the bootstrap components under the same roof" />
      </Helmet>
      <section id="project">
        <h1 className="project-name">Tetris</h1>
        <div className="row justify-content-center">
          <div className="col-10">
            <p>
              Tetris is a singular component library that generates bootstrap
              components by taking a json as prop.
            </p>
          </div>
        </div>
        <div className="row pb-5 justify-content-center">
          <div className="col-10">
            <div className="chrome dynamic-background dynamic-shadow">
              <div className="tabs">
                <div className="tab" onClick={() => setTetromino(tetObjects.button)}><p>Button</p></div>
                <div className="tab" onClick={() => setTetromino(tetObjects.progress)}><p>Progress</p></div>
                <div className="tab" onClick={() => setTetromino(tetObjects.accordion)}><p>Accordions</p></div>
                <div className="tab" onClick={() => setTetromino(tetObjects.alert)}><p>Alert</p></div>
                <div className="tab" onClick={() => setTetromino(tetObjects.tab)}><p>Tab</p></div>
              </div>

              <div className="code dynamic-background">
                <pre>
                  import tetris from &apos;tetris-components&apos;
                  <br />
                  &lt;tetris tetromino=
                  {JSON.stringify(tetromino)}
                  /&gt;
                </pre>
              </div>
              <div className="demo">
                <Tetris tetromino={tetromino} />
              </div>
            </div>
          </div>
          <div className="col-10" dangerouslySetInnerHTML={{ __html: markdownText }} />
        </div>
      </section>
    </main>
  );
};
export default TetrisPage;
