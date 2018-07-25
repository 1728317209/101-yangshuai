import React, {Component} from 'react';
import MessageItemView from '../components/MessageItem';
import DialogView_B from '../components/DialogView_B';
import DialogView_C from '../components/DialogView_C';
import HeadView from '../components/Head';
import FootView from '../components/Foot';
import '../App.css'
import { connect } from 'react-redux'

import icon from '../resource/icon_Good_B-2.png';

class Container extends Component {
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
            isMulSelect: false,//是否多选
            idx: null,//单选删除 的 index
            indexs: new Array(this.state.messages.length)//多选删除的选中状态数组
        }
    }


    render() {
        return (
            <div>            
                <HeadView handleShowDialog={this.handleShowDialog} />
                <MessageItemView
                    handleGetIndexs={this.handleGetIndexs}
                    isMulSelect={this.state.isMulSelect}
                    ShowDialog_C={this.handleShowDialog_C}
                    messages={this.state.messages}
                    delItems={this.handleDelItems}
                />
                <FootView icon={icon} />
                <DialogView_B
                    isActive={this.state.isDialogActive}
                    onCloseClick={this.handleShowDialog}
                    handleAddItem={this.handleAddItem}
                />
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

function mapStateToProps(state, ownProps) {
    const props = { list: null };
    props.list = state.list;
    return props;
}

export default connect(mapStateToProps)(Container);
