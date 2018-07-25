import React, { Component } from 'react';
import { delItems } from '../Actions/actions';

import './DialogView.css';

export default class DialogView extends Component {

    handleDelItems = () => {
        const { dispatch } = this.props;
        const action = delItems();
        dispatch(action);
    }


    render() {
        const {isMulSelect} = this.props;
        if (!isMulSelect) {
            return null;
        }
        return (
            <div onClick={this.handleDelItems} className="del-btn">
                <span>删除</span>
            </div>
        );
    }
}

