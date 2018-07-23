import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {

    render() {
        const {isMulSelect} = this.props;
        if (!isMulSelect) {
            return null;
        }
        return (
            <div onClick={this.props.delItems} className="del-btn">
                <span>删除</span>
            </div>
        );
    }
}

