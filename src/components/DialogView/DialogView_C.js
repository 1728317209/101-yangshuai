import React, { Component } from 'react';

import '../DialogView.css';

export default class DialogView extends Component {

    handleClose = () => {
        const { handleFunctions } = this.props;
        handleFunctions.ShowDialog_B(0);
    }

    handleDelItem = () => {
        const { handleFunctions } = this.props;
        handleFunctions.delItem();
        handleFunctions.ShowDialog_B(0);
    }

    handleTopItem = () => {
        const { handleFunctions } = this.props;
        handleFunctions.topItem();
        handleFunctions.ShowDialog_B(0);
    }

    handleMulSelect = () => {
        const { handleFunctions } = this.props;
        handleFunctions.mulSelectItems();
        handleFunctions.ShowDialog_B(0);
    }



    render() {
        const { state } = this.props;
        if (state.ShowDialog.isDialogActive !== 2) {
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

