import React, { Component } from 'react';
import './index.css';
export default class ActionSheet extends Component {

    static defaultProps = {
        isActive: false,
        title: '',
        menus: [],
        onCancel: () => {}
    }
    getMaskClassName = () => {
        if (!this.props.isActive) {
            return 'mask hideMask';
        }
        return 'mask showMask';
    }

    getMenuClassName = () => {
        if(this.props.type === 'IOS') {
            if(!this.props.isActive) {
                return 'ios-menu';
            }else {
                return 'ios-menu ios-showMenu';
            }
        }else if(this.props.type === 'Android') {
            if(!this.props.isActive) {
                return 'android-menu';
            }else {
                return 'android-menu android-showMenu';
            }
        }
    }

    handleMenuItemClick = idx => {
        const { menus, onCancel } = this.props;
        menus[idx].click && menus[idx].click(idx);
        onCancel();
    }

    renderCancel = () => {
        const { type } = this.props;
        if(type === 'IOS') {
            return (
                <div className="btn cancel" onClick={this.props.onCancel}>取消</div>
            );
        }else {
            return null;
        }
    }
    render() {
        const { title, menus } = this.props;
        return (
            <div className="actionsheetCtn">
                <div className={this.getMaskClassName()} onClick={this.props.onCancel} />
                <div className={this.getMenuClassName()}>
                    {
                        !title.length
                            ? null
                            : <div className="title divider">{title}</div>
                    }
                    {
                        menus.map((item, idx) => (
                            <div
                                className="btn divider"
                                key={`actionSheet_${idx}`}
                                onClick={() => this.handleMenuItemClick(idx)}
                            >
                                {item.title}
                            </div>
                        ))
                    }
                    {
                        this.renderCancel()
                    }
                </div>
            </div>
        );
    }
}