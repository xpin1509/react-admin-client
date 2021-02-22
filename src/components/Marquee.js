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
    componentDidMount = async ()=> {
        try {
            const { start, end, duration } = await this.isNeedToMove()
            this.move(start, end, duration)
        } catch (e) {}
    }
    componentDidUpdate = async () => {
        try {
            const { start, end, duration } = await this.isNeedToMove()
            this.move(start, end, duration)
        } catch (e) {}
    }
    isNeedToMove = () => {
        return new Promise((resolve, reject) => {
            const viewWidth = this.viewRef.current.getBoundingClientRect().width
            const textWidth = this.textRef.current.getBoundingClientRect().width
            const duration = Math.floor(textWidth / speed)
            if (textWidth > viewWidth) {
                const start = viewWidth
                const end = -Math.floor(textWidth)
                return resolve({ start, end, duration })
            } else {
                return reject('')
            }
        })
    }
    move (start, end, duration) {
        ++marquee_id
        this.viewRef.current.style = `
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
    render() {
        const { text } = this.props
        return (
            <div className="Marquee_Bar">
                <div className="Marquee_View" ref={this.viewRef}>{ text }</div>
                <div className="Marquee_Opacity" ref={this.textRef}>{ text }</div>
            </div>
        );
    }
}

export default Marquee;