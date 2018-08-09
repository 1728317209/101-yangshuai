import React, { Component } from 'react';
import './index.css';
export default class ActionSheet extends Component {

    static defaultProps = {
        isActive: false,
        title: '',
        onCancel: () => {}
    }

    getDialogClassName = () => {
        if (!this.props.isActive) {
            return 'dialog hideDialog';
        }
        return 'dialog showDialog';
    }

    renderButton = () => {
        const { type, okText, cancelText } = this.props;

        if(type === 'IOS2') {
            return (
                <div className={`dialog-${type}-Button`}>
                    <div className="dialog-button-ok" onClick={this.props.onOk}>{okText}</div>
                </div>
            )
        }else {
            return (
                <div className={`dialog-${type}-Button`}>
                    <div className="dialog-button-cancle" onClick={this.props.onCancel}>{cancelText}</div>
                    <div className="dialog-button-ok" onClick={this.props.onOk}>{okText}</div>
                </div>
            )
        }
    }
    render() {
        const { type, isActive, title } = this.props;

        if(isActive) {
            return (
                <div className="dialogCtn">
                    <div className={this.getDialogClassName()}/>
                    <div className="allInDialog">
                        {
                            !title
                            ? null
                            : <div className={`doalog-${type}-title divider`}>{title}</div>
                        }
                        <div className="dialog-body divider">
                            {
                                this.props.renderBody()
                            }
                        </div>
                        {
                            this.renderButton()
                        }
                    </div>
                </div>
            );
        }else {
            return null;
        }
    }
}