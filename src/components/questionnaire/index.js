import React, { useState, useEffect } from 'react';
import { updateItem, getItem } from '../../utils/localStorage';

const Questionnaire = () => {
  const [answerStatus, toggleAnswerStatus] = useState(null);
  useEffect(() => {
    const storedData = getItem('liked_site');
    toggleAnswerStatus(storedData !== undefined ? storedData : null);
  }, []);

  const setAnswerStatus = (status) => {
    if (status) {
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ endorsement: Number(status) }),
      };
      fetch('https://strek-view-counter.vercel.app/api/endorsement', options);
    }
    updateItem('liked_site', status);
    toggleAnswerStatus(status);
  };
  return (
    <section id="about">
      <div className="container">
        <div
          className="spacer"
          data-height="60"
          style={{ height: '60px' }}
        />

        <div className="row">
          <div className="col-md-12">
            <div className="rounded dynamic-background dynamic-shadow padding-30">
              <div className="row">
                <div className="col-md-12 text-center">
                  {answerStatus === null ? (
                    <>
                      <h4 className="mb-3 mt-0">Do you like this site ?</h4>
                      <button onClick={() => setAnswerStatus(true)} className="btn m-2 btn-danger" type="button">yes</button>
                      <button onClick={() => setAnswerStatus(false)} className="btn m-2 btn-danger" type="button">No</button>
                    </>
                  ) : answerStatus === true ? <h4 className="mb-3 mt-0">I&apos;m happy that you liked the site </h4> : <h4 className="mb-3 mt-0">Oops sorry :( I&apos;ll try to improve it next time for sure !</h4>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questionnaire;
