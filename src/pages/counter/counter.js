import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Button, Input } from 'antd';
import { increase, decrease, changeText } from '../../store/actions'

class counter extends Component {
    render() {
        const { value, inputVal, onIncreaseClick, onDecreaseClick, onChangeText } = this.props
        return (
            <div>
                {value}
                <>
                  <Button onClick={onIncreaseClick}>+</Button>
                  <Button onClick={onDecreaseClick}>-</Button>
                </>
                {inputVal}
                <Input placeholder="Basic usage" onChange={onChangeText}/>
            </div>
        );
    }
}

export default connect((state) => {
  return {
    value: state.count,
    inputVal: state.text
  }
}, (dispatch) => {
  return {
    onIncreaseClick: () => dispatch(increase()),
    onDecreaseClick: () => dispatch(decrease()),
    onChangeText: (e) => dispatch(changeText(e.target.value))
  }
})(counter);