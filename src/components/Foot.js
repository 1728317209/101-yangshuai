import React, { Component } from 'react';
import icon from '../resource/icon_Good_B-2.png';

export default class Foot extends Component {

    render() {
        return (
            <nav className="chat-nav">
                <div className="chat-nav__item">
                    <img className="chat-nav__item__icon" src={icon} alt="" />
                    <div className="chat-nav__item__name">微信</div>
                </div>
                <div className="chat-nav__item">
                    <img className="chat-nav__item__icon" src={icon} alt="" />
                    <div className="chat-nav__item__name">通讯录</div>
                </div>
                <div className="chat-nav__item">
                    <img className="chat-nav__item__icon" src={icon} alt="" />
                    <div className="chat-nav__item__name">发现</div>
                </div>
                <div className="chat-nav__item">
                    <img className="chat-nav__item__icon" src={icon} alt="" />
                    <div className="chat-nav__item__name">我</div>
                </div>
            </nav>
        );
    }
}

