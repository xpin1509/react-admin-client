import React, { Component } from 'react';

class count extends Component {
    state = {
        count: 0
    }
    handleClick = () => {
        // this.setState({count: this.state.count + 1});
        // console.log(this.state.count);
    
        // this.setState({count: this.state.count + 1});
        // console.log(this.state.count);
        this.setState((preState) => {
            console.log(preState)
            return {
                count: preState.count + 1
            }
        })
        this.setState((preState) => {
            return {
                count: preState.count + 1
            }
        })
    }
    render() {
        return (
            <div>
                { this.state.count }
                <button onClick={this.handleClick}>点击</button>
            </div>
        );
    }
}

export default count;