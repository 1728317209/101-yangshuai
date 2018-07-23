import React, { Component } from 'react';
import './DialogView.css';

export default class DialogView extends Component {

    handleClose = () => {
        this.props.onCloseClick(0);
    }

    render() {
        const { isActive } = this.props;

        if (isActive != 2) {
            return null;
        }
        return (
            <div className="mask-ctn">
                <div className="close-btn" onClick={this.handleClose}>close</div>
                <div className="dialog-ctn">
                    <input className="input-ctn" type="button" value="置顶" onClick={this.props.handleTopItem}/>
                    <input className="input-ctn" type="button" value="删除" onClick={this.props.handleDelItem}/>
                    <input className="input-ctn" type="button" value="多选" onClick={this.props.handleMulSelect}/>
                </div>
            </div>
        );
    }
}

