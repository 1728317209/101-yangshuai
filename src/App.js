import React from 'react';
import MessageItemView from './components/MessageItem.js';
import DialogView from './components/DialogView.js';
import './App.css';

// const icon = require('./resource/icon_Good_B-2.png');

import icon from './resource/icon_Good_B-2.png';

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            messages: [
                {
                    icon: icon,
                    title: '小年糕',
                    descript: 'hello 小年糕',
                    time: '7-18 11:14'
                },
                {
                    icon: icon,
                    title: '小板凳',
                    descript: 'hello 小板凳',
                    time: '7-18 11:15',
                },
                {
                    icon: icon,
                    title: '小豆包',
                    descript: 'hi 小豆包',
                    time: '7-17 10:00',
                }
            ],
            isDialogActive: false,
            // newItemMessage: {
            //     title: '',
            //     descript: '',
            //     time: ''
            // }
        }
    }

    onItemClick = (message) => {
        console.log(message);
    }
    //添加item
    handleAddItem = obj => {
        const newMessages = this.state.messages.slice();
        newMessages.unshift({
            icon: icon,
            title: obj.title,
            descript: obj.descript,
            time: obj.time
        });
        this.setState({
            messages: newMessages
        });
    }
    //删除单个item
    handleDelItem = () => {
        const newMessages = this.state.messages.pop();
        this.setState({
            messages: newMessages
        });
    }
    //置顶item
    handleTopItem = () => {

    }

    handleShowDialog = isActive => {
        this.setState({ isDialogActive: isActive });
    }

    renderMessageList = () => {
        const messageViews = this.state.messages.map((item, i) => {
            return <MessageItemView key={i} item={item} onClick={this.onItemClick} ShowDialog={this.handleShowDialog.bind(this, true)}/>
        });
        return messageViews;
    }

    render() {
        return (
            <div>

                <nav className="chat-nav_head">
                    <div className="chat-nav_head_item1">
                        <strong>微信</strong>
                    </div>
                    <div className="chat-nav_head_item2" onClick={this.handleShowDialog.bind(this, true)}>
                        <h2>+</h2>
                    </div>
                </nav>

                <div className="chat-list">{this.renderMessageList()}</div>

                <nav className="chat-nav">
                    <div className="chat-nav__item" onClick={this.handleAddItem}>
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
                    <div className="chat-nav__item" onClick={this.handleShowDialog.bind(this, true)}>
                        <img className="chat-nav__item__icon" src={icon} alt="" />
                        <div className="chat-nav__item__name">我</div>
                    </div>
                </nav>
                <DialogView isActive={this.state.isDialogActive} onCloseClick={this.handleShowDialog} handleAddItem={this.handleAddItem} />
            </div>
        );
    }
}

export default App;
