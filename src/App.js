import React from 'react';
import MessageItemView from './components/MessageItem';
import DialogView_B from './components/DialogView_B';
import DialogView_C from './components/DialogView_C'
import DialogView_D from './components/DialogView_D'
import HeadView from './components/Head'
import FootView from './components/Foot'
import './App.css';


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
            isDialogActive: 0,// Dialog的显示状态，有0、1、2三种
            isMulSelect: false//是否多选
        }
        this.idx = null;//单选删除 的 index
        this.indexs = new Array(this.state.messages.length);//多选删除的选中状态数组
    }

    //第一个Dialog
    handleShowDialog = Active_id => {
        this.setState({ isDialogActive: Active_id });
    }
    //第二个Dialog
    handleShowDialog_C = (Active_id, index) => {
        this.idx = index;
        this.setState({ isDialogActive: Active_id });
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
            messages: newMessages,
            isDialogActive: 0
        });
    }

    //删除单个item
    handleDelItem = () => {
        if(this.idx != null) {
            const newMessages = this.state.messages.slice();
            newMessages.splice(this.idx, 1);
            this.setState({
                messages: newMessages,
                isDialogActive: 0
            });
            this.idx = null;
        }
    }

    //置顶item
    handleTopItem = () => {
        if(this.idx != null) {
            const newMessages = this.state.messages.slice();
            const obj = newMessages.splice(this.idx, 1);
            newMessages.unshift(obj[0]);
            this.setState({
                messages: newMessages,
                isDialogActive: 0
            });
            this.idx = null;
        }
    }

    //多选删除
    handleMulSelect = () => {
        this.setState({
            isDialogActive: false,
            isMulSelect: true
        });
    }
    handleGetIndexs = (idx, checked) => {
        this.indexs[idx] = checked;
    }
    handleDelItems = () => {
        //do del
        const newMessages = this.state.messages.slice();
        for(let i=this.indexs.length-1; i>=0; i--) {
            if(this.indexs[i]){
                newMessages.splice(i, 1);
            }
        }
        this.setState({
            messages: newMessages,
            isMulSelect: false
        });
        const temp = new Array(this.state.messages.length);
        this.indexs =  temp;
    }


    renderMessageList = () => {
        const messageViews = this.state.messages.map((item, i) => {
            return <MessageItemView 
                handleGetIndexs={this.handleGetIndexs} 
                isMulSelect={this.state.isMulSelect} 
                index={i} 
                item={item} 
                onClick={this.onItemClick} 
                ShowDialog_C={this.handleShowDialog_C}
                />
        });
        return messageViews;
    }

    renderDelBtn = () => {
        return <DialogView_D 
            isMulSelect={this.state.isMulSelect}
            delItems={this.handleDelItems}
            />
    }


    render() {
        return (
            <div>
                {/* head */}
                <HeadView handleShowDialog={this.handleShowDialog}/>
                {/* chat-list */}
                <div className="chat-list">
                    {this.renderDelBtn()}
                    {this.renderMessageList()}
                </div>
                {/* foot */}
                <FootView icon={icon}/>
                {/* dialog_B */}
                <DialogView_B 
                    isActive={this.state.isDialogActive} 
                    onCloseClick={this.handleShowDialog} 
                    handleAddItem={this.handleAddItem} 
                />
                {/* dialog_C */}
                <DialogView_C 
                    isActive={this.state.isDialogActive} 
                    onCloseClick={this.handleShowDialog} 
                    handleDelItem={this.handleDelItem} 
                    handleTopItem={this.handleTopItem} 
                    handleMulSelect={this.handleMulSelect}
                />

            </div>
        );
    }
}

export default App;
