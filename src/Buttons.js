import React from 'react'
import ButtonOne from "./ButtonOne";
import ButtonTwo from "./ButtonTwo";
import ButtonThree from "./ButtonThree";

function Buttons () {
    return (
        <div className="row buttons justify-content-center">
            <div className="col-auto">
                <ButtonOne />
            </div>
            <div className="col-auto">
                <ButtonTwo />
            </div>
            <div className="col-auto">
                <ButtonThree />
            </div>
        </div>
    )
}
export default Buttons


{/*function Buttons () {
    return (
        <div className="button">
            Увеличить
        </div>
    )
}
export default Buttons*/}