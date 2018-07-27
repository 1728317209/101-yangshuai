import React, { Component } from 'react';

export default class DialogView extends Component {

    handleDelItems = () => {
        const { handleFunctions } = this.props;
        handleFunctions.delItems();
    }

    render() {
        const {state} = this.props;
        if (!state.HandleItem.isMulSelect) {
            return null;
        }
        return (
            <div onClick={this.handleDelItems} className="del-btn">
                <span>删除</span>
            </div>
        );
    }
}

