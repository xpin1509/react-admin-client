import React, { PureComponent, useRef, useEffect } from 'react';
import "./index.css";
// 跑马灯
const speed = 20
let marquee_id = 1

function Marquee (props) {
    const viewRef = useRef()
    const textRef = useRef()
    useEffect(() => {
        const viewWidth = viewRef.current.getBoundingClientRect().width
        const textWidth = textRef.current.getBoundingClientRect().width
        const duration = Math.floor(textWidth / speed)
        if (textWidth > viewWidth) {
            const start = viewWidth
            const end = -Math.floor(textWidth)
            move(start, end, duration)
        }
    })
    function move (start, end, duration) {
        ++marquee_id
        viewRef.current.style = `
            animation: move_${marquee_id} ${duration}s linear infinite;
        `
        var styleSheets = document.styleSheets[0];  //获取样式表引用
        var index = styleSheets.length;  //获取样式表中包含样式的个数
        if(styleSheets.insertRule){  //判断浏览器是否支持insertRule()方法
            styleSheets.insertRule(`@keyframes move_${marquee_id}
            {
                from {
                    transform: translateX(${start}px);
                }
                to {
                    transform: translateX(${end}px);
                }
            }`, index);
        }
    }
    return (
        <div className="Marquee_Bar">
            <div className="Marquee_View" ref={viewRef}>{ props.text }</div>
            <div className="Marquee_Opacity" ref={textRef}>{ props.text }</div>
        </div>
    );
}

export default Marquee;