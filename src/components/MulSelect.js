import React, { Component } from 'react';
import { ShowDialog_C, getIndex } from '../Actions/actions';

import ItemCheckBox from './itemCheckBox'
import './DialogView.css';

export default class MulSelect extends Component {

    ShowDialog_C = () => {
        const { dispatch } = this.props;
        const action = ShowDialog_C(2, this.props.index);
        dispatch(action);
    }

    getIndexs = (e) => {
        const { dispatch } = this.props;
        const action = getIndex(this.props.index, e.target.checked);
        dispatch(action);
    }

    render() {
        const { item, isMulSelect, index } = this.props;
            return (
                <div className="chat-list">
                    <li className="chat-list__item">
                        <ItemCheckBox 
                            isMulSelect={isMulSelect} 
                            index={index} 
                            getIndexs={this.getIndexs}
                        />                        
                        <img className="chat-list__item__avatar" src={item.icon} alt="" />
                        <div className="chat-list__item__content">
                            <div className="chat-list__item__content__topBar">
                                <h2 className="chat-list__item__content__title">{item.title}</h2>
                                <div className="chat-list__item__content__time">{item['time']}</div>
                            </div>
                            <div className="chat-list__item__content__recentMsg">{item['descript']}</div>
                            <div className="chat-list__item__content__btn" onClick={this.ShowDialog_C}>更多</div>
                        </div>
                    </li>
                </div>
            );
    }
}

