import React, { Component } from 'react';
// import { delItem, topItem, ShowDialog } from '../Actions/actions';

import './DialogView.css';

export default class DialogView extends Component {

    handleClose = () => {
        const { handleFunctions } = this.props;
        handleFunctions.ShowDialog(0);
    }

    handleDelItem = () => {
        const { handleFunctions } = this.props;
        handleFunctions.delItem();
    }

    handleTopItem = () => {
        const { handleFunctions } = this.props;
        handleFunctions.topItem();
    }

    handleMulSelect = () => {
        const { handleFunctions } = this.props;
        handleFunctions.mulSelectItems();
    }



    render() {
        const { state } = this.props;
        if (state.isDialogActive !== 2) {
            return null;
        }
        return (
            <div className="mask-ctn">
                <div className="close-btn" onClick={this.handleClose}>close</div>
                <div className="dialog-ctn">
                    <input className="input-ctn" type="button" value="置顶" onClick={this.handleTopItem}/>
                    <input className="input-ctn" type="button" value="删除" onClick={this.handleDelItem}/>
                    <input className="input-ctn" type="button" value="多选" onClick={this.handleMulSelect}/>
                </div>
            </div>
        );
    }
}

