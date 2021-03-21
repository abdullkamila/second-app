import React from 'react'

function Buttons (props) {
    function plus() {
        props.setCounter(props.counter + 3)
    };
    function minus() {
        props.setCounter(props.counter > 0 ? props.counter-2 : props.counter==0)
    }
    function reset() {
        props.setCounter(0)
    };
    return (
        <div className="row buttons justify-content-center">
            <div className="col-auto">
                <div onClick={plus} className="buttonOne">
                   Увеличить
                </div>
            </div>
            <div className="col-auto">
                <div onClick={minus} className="buttonTwo">
                   Уменьшить
                </div>
            </div>
            <div className="col-auto">
                <div onClick={reset} className="buttonThree">
                   Сбросить
                </div>
            </div>
        </div>
    )
}
export default Buttons
