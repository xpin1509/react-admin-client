import React, { PureComponent } from 'react';
import "./index.css";
// 跑马灯
const speed = 20
let marquee_id = 1
class Marquee extends PureComponent {
    constructor (props) {
        super(props)
        this.viewRef = React.createRef()
        this.textRef = React.createRef()
    }
    move (start, end, durition) {
        ++marquee_id
        this.viewRef.style = `
            animation: move_${marquee_id} ${durition}s linear infinite;
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
    componentDidMount () {
        const viewWidth = this.viewRef.getBoundingClientRect().width
        const textWidth = this.textRef.getBoundingClientRect().width
        const durition = Math.floor(textWidth / speed)
        if (textWidth > viewWidth) {
            const start = viewWidth
            const end = -Math.floor(textWidth)
            this.move(start, end, durition)
        }
    }
    componentDidUpdate () {
        const viewWidth = this.viewRef.getBoundingClientRect().width
        const textWidth = this.textRef.getBoundingClientRect().width
        const durition = Math.floor(textWidth / speed)
        if (textWidth > viewWidth) {
            const start = viewWidth
            const end = -Math.floor(textWidth)
            this.move(start, end, durition)
        }
    }
    render() {
        const { text } = this.props
        return (
            <div className="Marquee_Bar">
                <div className="Marquee_View" ref={ref => this.viewRef = ref}>{ text }</div>
                <div className="Marquee_Opacity" ref={ref => this.textRef = ref}>{ text }</div>
            </div>
        );
    }
}

export default Marquee;