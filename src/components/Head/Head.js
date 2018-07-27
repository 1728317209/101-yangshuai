import React, { Component } from 'react';

export default class Head extends Component {

    showDialog =  () => {
        const { handleFunctions } = this.props;
        handleFunctions.ShowDialog_B(1);
    }
    render() {
        return (
            <div className="chat-nav_head">
                <div className="chat-nav_head_item1">
                    <strong>微信</strong>
                </div>
                <div className="chat-nav_head_item2" onClick={this.showDialog}>
                    <h2>+</h2>
                </div>
            </div>
        );
    }
}

