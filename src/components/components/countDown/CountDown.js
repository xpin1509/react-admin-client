import React, { useRef, useEffect, useState, useReducer, memo } from 'react';
import {getFloorNum, parseNumToDoubleStr} from './util'
function CountDown (props) {
    const [state, setState] = useState(0)

    useEffect(() => {
        setState(getFloorNum(props.value / 1000))
    }, [props.value])

    useEffect(() => {
        const timeId = setTimeout(() => {
            if (state < 1) {
                clearInterval(timeId)
            } else {
                setState(state - 1)
            }
        }, 1000);
        return () => {
            if (timeId) clearInterval(timeId)
        }
    }, [state])


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
}
export default memo(CountDown, (prevProps, nextProps) => {
    if (prevProps.value !== nextProps.value) {
        return false;
    }
    return true;
})

