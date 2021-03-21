import React from 'react'
import {useState} from 'react'
import Number from "./Number";
import Buttons from "./Buttons";


function MainContent () {
    const [counter, setCounter] = useState(0);
    return (
        <div className="mainContent">
            <div className="row">
                <div className="col-12">
                    <Number counter={counter} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Buttons counter={counter} setCounter={setCounter}/>
                </div>
            </div>
        </div>
    )
}

export default MainContent
