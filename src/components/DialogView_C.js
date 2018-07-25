import React, { Component } from 'react';
import { delItem, topItem, ShowDialog } from '../Actions/actions';

import './DialogView.css';

export default class DialogView extends Component {

    handleClose = () => {
        const { dispatch } = this.props;
        const action = ShowDialog(0);
        dispatch(action);
    }

    handleDelItem = () => {
        const { dispatch } = this.props;
        const action = delItem();
        dispatch(action);
    }

    handleTopItem = () => {
        const { dispatch } = this.props;
        const action = topItem();
        dispatch(action);
    }

    handleMulSelect = () => {
        const { dispatch } = this.props;
        const action = topItem();
        dispatch(action);
    }



    render() {
        const { isActive } = this.props;

        if (isActive !== 2) {
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

