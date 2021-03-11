import React, { useEffect, useState } from 'react';
import marked from 'marked';

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
      <section id="projects">
        <div className="row mb-5 justify-content-center">
          <div className="col-10" />
          <div className="col-10" dangerouslySetInnerHTML={{ __html: markdownText }} />
        </div>
      </section>
    </main>
  );
};

export default ReadmeComponents;
