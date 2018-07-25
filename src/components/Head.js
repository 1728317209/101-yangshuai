import React, { Component } from 'react';
import { ShowDialog } from '../Actions/actions';

export default class Head extends Component {

    showDialog =  () => {
        const { dispatch } = this.props;
        const action = ShowDialog(1);
        dispatch(action);
    }
    render() {
        return (
            <nva className="chat-nav_head">
                <div className="chat-nav_head_item1">
                    <strong>微信</strong>
                </div>
                <div className="chat-nav_head_item2" onClick={this.showDialog}>
                    <h2>+</h2>
                </div>
            </nva>
        );
    }
}

