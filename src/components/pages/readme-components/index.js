import React, { useEffect, useState } from 'react';
import marked from 'marked';
import { Helmet } from 'react-helmet';

const ReadmeComponents = () => {
  const [markdownText, setMarkdownText] = useState('Loading');
  const fetchMarkdown = () => {
    fetch('../../../datas/readme-components.md').then((text) => text.text()).then((text) => setMarkdownText(marked(text)));
  };
  useEffect(() => {
    fetchMarkdown();
  }, []);
  return (
    <main className="content">
      <Helmet>
        <title>Readme Components</title>
        <meta property="og:description" content="Components for your markups" />
      </Helmet>
      <section id="project">
        <div className="row pb-5 justify-content-center">
          <div className="col-10" />
          <div className="col-10" dangerouslySetInnerHTML={{ __html: markdownText }} />
        </div>
      </section>
    </main>
  );
};

export default ReadmeComponents;
