import React, { Component } from 'react';
import './index.css';
export default class Switch extends Component {

    static defaultProps = {
        checked: false,
        onChange: () => {}
    }

    render() {
        const { checked } = this.props;
        if(checked) {
            return (
                <div className="on-switch" onClick={this.props.onChange}>
                    <div className="on-switch-spot"></div>
                </div>
            );
        }else {
            return (
                <div className="off-switch" onClick={this.props.onChange}>
                    <div className="off-switch-spot"></div>
                </div>
            );
        }
    }
}