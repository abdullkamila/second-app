import React from 'react'
import Number from "./Number";
import Buttons from "./Buttons";

function MainContent () {
    return (
        <div className="mainContent">
            <div className="row">
                <div className="col-12">
                    <Number />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Buttons />
                </div>
            </div>
        </div>
    )
}

export default MainContent
