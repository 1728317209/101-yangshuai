import React, { Component } from 'react';
// import { delItems } from '../Actions/actions';

import './DialogView.css';

export default class DialogView extends Component {

    handleDelItems = () => {
        const { handleFunctions } = this.props;
        handleFunctions.delItems();
    }

    render() {
        const {state} = this.props;
        if (!state.isMulSelect) {
            return null;
        }
        return (
            <div onClick={this.handleDelItems} className="del-btn">
                <span>删除</span>
            </div>
        );
    }
}

