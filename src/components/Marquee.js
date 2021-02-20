import React, { PureComponent } from 'react';
import "./index.css";
// 跑马灯
const speed = 20
class Marquee extends PureComponent {
    constructor (props) {
        super(props)
        this.animate = 1
        this.viewRef = React.createRef()
        this.textRef = React.createRef()
        this.timeId = null
    }
    componentDidMount () {
        const viewWidth = this.viewRef.getBoundingClientRect().width
        const textWidth = this.textRef.getBoundingClientRect().width
        const durition = (textWidth / speed).toFixed(2)
        if (textWidth > viewWidth) {
            const start = viewWidth
            const end = -textWidth
            this.move(start, end, durition)
        }
    }
    move = (start, end, durition) => {
        this.viewRef.style = `
            animation: move ${durition}s linear;
            @keyframes move
            {
                from {
                    transform: translateX(${start}px);
                }
                to {
                    transform: translateX(-${end}px);
                }
            }
        `
    }
    componentDidUpdate () {
        const { text } = this.props
        console.log(text)
    }
    componentWillUnmount () {
        clearInterval(this.timeId)
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