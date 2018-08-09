import React, { Component } from 'react';
import Switch from '../../../Components/ComponentDemo/Switch/Switch';
export default class SwitchDemo extends Component {
    state = {
        checked: false,
        onChange: () => {}
    }

    onChange = () => {
        this.setState({
            checked: !this.state.checked
        });
    }

    render() {
        return (
            <div>
                <Switch
                    checked={this.state.checked}    // 是否选中
                    onChange={this.onChange}   // 改变switch的回调函数，回调状态
                />
            </div>
        );
    }
}