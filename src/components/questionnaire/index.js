import React, { useState,useEffect } from 'react'
import {setItem,updateItem,getItem} from '../../utils/localStorage'

const Questionnaire = () => {

    const [answerStatus, toggleAnswerStatus] = useState(null)
    useEffect(() => {
        const storedData = getItem('liked_site');
        console.log("storedData",storedData)
        toggleAnswerStatus(storedData!=undefined ?  storedData : null)
    },[])

    const setAnswerStatus = (status) => {
        updateItem("liked_site",status)
        toggleAnswerStatus(status)
    }
    return <section id="about">
        <div className="container">
            <div
                className="spacer"
                data-height="60"
                style={{ height: "60px" }}
            ></div>

            <div className="row">
                <div className="col-md-12">
                    <div className="rounded dynamic-background dynamic-shadow padding-30">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                {answerStatus === null ? <>
                                    <h4 className="mb-3 mt-0">Do you like this site ?</h4>
                                    <button onClick={() => setAnswerStatus(true)} className="btn m-2 btn-danger">yes</button>
                                    <button onClick={() => setAnswerStatus(false)} className="btn m-2 btn-danger">No</button>
                                </> : answerStatus === true ? <h4 className="mb-3 mt-0">Im happy that you liked the site </h4> : <h4 className="mb-3 mt-0">Oops sorry :( ill try to improve it next time for sure !</h4>}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}

export default Questionnaire