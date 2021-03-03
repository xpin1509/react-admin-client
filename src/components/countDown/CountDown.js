import React, { useRef, useEffect, useState, useReducer } from 'react';

function parseNumToDoubleStr (num) {
    return num >= 10 ? `${num}` : num >= 0 ? `0${num}` : `${num}`
}
function getFloorNum (num) {
    return Math.floor(num)
}

function CountDown (props) {
    const [state, setState] = useState(getFloorNum(props.value / 1000))

    let timeId = useRef(null)
    const callBack = () => {
        console.log(state)
        if (state < 1) {
            clearInterval(timeId.current)
        } else {
            setState(state - 1)
        }
    }
    useEffect(() => {
        console.log('asa')
        timeId.current = setInterval(() => {
            callBack()
        }, 1000);
        return () => {
            if (timeId.current) clearInterval(timeId.current)
        }
    }, [props.value])

    const min = getFloorNum(state / 60)
    const sec = getFloorNum(state % 60)

    return (
        <div className="countDownView">
            {parseNumToDoubleStr(min)} : {parseNumToDoubleStr(sec)}
        </div>
    );
}

CountDown.defaultProps = {
    value: 0,
    onCallback: () => {}
}
export default CountDown;