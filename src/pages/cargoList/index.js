import React, { Component } from 'react';
import Marquee from "../../components/Marquee";
class index extends Component {
    state = {
        dataList: []
    }
    componentDidMount () {
        const data = [
            {
                id: 1,
                text: '氢气球群群'
            },
            {
                id: 2,
                text: '啊是哒哒哒12'
            },
            {
                id: 3,
                text: '啊是哒阿斯达四大哒哒氢气球群群'
            },
            {
                id: 4,
                text: '阿打算撒大声地sadad按时打啊 阿打算啊阿达按时'
            }
        ]
        setTimeout(() => {
            this.setState({
                dataList: data
            })
        }, 500)
    }
    clickBtn = () => {
        const newData = this.state.dataList.map(el => {
            if (el.id === 1) {
                el.text += el.text
            }
            return el
        })
        this.setState({
            dataList: newData
        })
    }
    render() {
        return (
            <div style={{width: 200, margin: 'auto', overflow: 'hidden'}}>
                {
                    this.state.dataList.map(({id, text}) => (
                        // text={text} id={id}
                        <Marquee key={id} />
                    ))
                }
                <button onClick={this.clickBtn}>变</button>
            </div>
        );
    }
}

export default index;