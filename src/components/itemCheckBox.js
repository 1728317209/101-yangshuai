import React, { Component } from 'react';
import './DialogView.css';

export default class itemCheckBox extends Component {


    render() {
        const { isMulSelect, index } = this.props;
        if(!isMulSelect) {
            return null;
        }
        return (
            <div className="chat-list__item__avatar">
                <input type="checkbox" className="chat-list__item__check" name={index} onChange={this.props.getIndexs} />
            </div>
        )
    }
}

