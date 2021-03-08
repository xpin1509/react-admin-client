import React, { Component } from 'react';

function parseNumToDoubleStr (num) {
    return num >= 10 ? `${num}` : num >= 0 ? `0${num}` : `${num}`
}

function getFloorNum (num) {
    return Math.floor(num)
}

class CountDown extends Component {
    constructor (props) {
        super(props)
        this.state = {
            leftSecond: getFloorNum(this.props.value / 1000)
        }
        this.timeId = null
    }
    componentDidMount () {
        this.doCountDown()
    }
    componentDidUpdate (prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({
                leftSecond: getFloorNum(this.props.value / 1000)
            }, () => {
                this.doCountDown()
            })
        }
    }
    componentWillUnmount () {
        if (this.timeId) clearInterval(this.timeId)
    }
    doCountDown = () => {
        if (this.timeId) clearInterval(this.timeId)
        this.timeId = setInterval(() => {
            const { leftSecond } = this.state
            const nextSecond = this.state.leftSecond - 1
            console.log(leftSecond, nextSecond)
            if (nextSecond < 0) {
                clearInterval(this.timeId)
                if (this.props.onEndCallback) this.props.onEndCallback()
            } else {
                this.setState({
                    leftSecond: nextSecond
                })
            }
        }, 1000);
    }
    render() {
        const { leftSecond } = this.state
        const min = getFloorNum(leftSecond / 60)
        const sec = getFloorNum(leftSecond % 60)
        return (
            <div>
                {parseNumToDoubleStr(min)} : {parseNumToDoubleStr(sec)}
            </div>
        );
    }
}

CountDown.defaultProps = {
    value: 0,
    onEndCallback: () => {}
};

export default CountDown;