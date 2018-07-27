import React, { Component } from 'react';
// import { ShowDialog_C, getIndex } from '../Actions/actions';

import ItemCheckBox from './itemCheckBox'
// import './DialogView.css';

export default class MulSelect extends Component {

    
    getIndexs = (e) => {
        const { handleFunctions } = this.props;
        handleFunctions.getIndexs(this.props.index, e.target.checked);
        }
        
    show = () => {
        const { handleFunctions } = this.props;
        handleFunctions.ShowDialog_C(2);
        handleFunctions.getIndex(this.props.index);
    }
    render() {
        const { item, index } = this.props;
        const { state } = this.props;
            return (
                <div className="chat-list">
                    <li className="chat-list__item">
                        <ItemCheckBox 
                            isMulSelect={state.HandleItem.isMulSelect} 
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
                            <div className="chat-list__item__content__btn" onClick={this.show}>更多</div>
                        </div>
                    </li>
                </div>
            );
    }
}

