import React, { Component } from 'react';
import './DialogView.css';

export default class MulSelect extends Component {

    render() {
        const { item, isMulSelect, index, getIndexs, ShowDialog_C} = this.props;
        if (!isMulSelect) {
            return (
                <li className="chat-list__item">
                    <img className="chat-list__item__avatar" src={item.icon} alt="" />
                    <div className="chat-list__item__content">
                        <div className="chat-list__item__content__topBar">
                            <h2 className="chat-list__item__content__title">{item.title}</h2>
                            <div className="chat-list__item__content__time">{item['time']}</div>
                        </div>
                        <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
                        <div className="chat-list__item__content__btn" onClick={ShowDialog_C}>更多</div>
                    </div>
                </li>
            );
        }
        else {
            return (
                <li className="chat-list__item" onClick={this.onMsgClick}>
                    <div className="chat-list__item__avatar">
                        <input type="checkbox" className="chat-list__item__check" name={index} onChange={getIndexs} />
                    </div>
                    <img className="chat-list__item__avatar" src={item.icon} alt="" />
                    <div className="chat-list__item__content">
                        <div className="chat-list__item__content__topBar">
                            <h2 className="chat-list__item__content__title">{item.title}</h2>
                            <div className="chat-list__item__content__time">{item['time']}</div>
                        </div>
                        <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
                        <div className="chat-list__item__content__btn" onClick={ShowDialog_C}>更多</div>
                    </div>
                </li>
            );
        }
    }
}

