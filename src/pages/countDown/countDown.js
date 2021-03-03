import React, { Component } from 'react';
import CountDown from "../../components/countDown/CountDown";

class index extends Component {
    state = {
        value: 6000
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        value: 5000
                    })
                }}>加倍</button>
                <CountDown 
                    value={this.state.value}
                    onEndCallback={() => { console.log('down') }}/>
                
            </div>
        );
    }
}

export default index;