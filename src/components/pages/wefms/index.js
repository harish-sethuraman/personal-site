import React, { useEffect, useState } from 'react';
import marked from 'marked';
import { Helmet } from 'react-helmet';

const WEFMS = () => {
  const [markdownText, setMarkdownText] = useState('Loading');
  const fetchMarkdown = () => {
    fetch('../../../datas/wefms.md').then((text) => text.text()).then((text) => setMarkdownText(marked(text)));
  };
  useEffect(() => {
    fetchMarkdown();
  }, []);
  return (
    <main className="content">
      <Helmet>
        <title>WEFMS</title>
        <meta property="og:description" content="Wireless Engine Fuel Monitoring System allows you to control and monitor generators that are present remotely." />
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

export default WEFMS;
