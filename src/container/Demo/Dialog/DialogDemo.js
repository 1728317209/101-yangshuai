import React, { Component } from 'react';
import Dialog from '../../../Components/ComponentDemo/Dialog/Dialog';
import './demo.css'
export default class Demo extends Component {
    state = {
        isActive: false,   
        title: '这是一个标题',      
        renderBody: '',
        okText: '确定',    
        cancelText: '取消',
        onOk: '',       
        onCancel: '',   
    }

    onIosClick1 = () => {
        this.setState({
            type: 'IOS1',
            isActive: true,
            title: '弹窗标题',
            okText: '主操作',
            cancelText: '辅助操作',
            onOk: () => {
                console.log('ios1, onOk.');
                this.setState({isActive: false})
            },
            renderBody: () => {
                return (
                    <span>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</span>
                )
            }
        });
    }

    onIosClick2 = () => {
        this.setState({
            type: 'IOS2',
            isActive: true,
            title: '',
            okText: '知道了',
            cancelText: '',
            onOk: () => {
                console.log('ios2, onOk.');
                this.setState({isActive: false})
            },
            renderBody: () => {
                return (
                    <span>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</span>
                )
            }
        });
    }

    onAndroidClick1 = () => {
        this.setState({
            type: 'Android1',
            isActive: true,
            title: '弹窗标题',
            okText: '主操作',
            cancelText: '辅助操作',
            onOk: () => {
                console.log('Android1, onOk.');
                this.setState({isActive: false})
            },
            renderBody: () => {
                return (
                    <span>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</span>
                )
            }
        });
    }

    onAndroidClick2 = () => {
        this.setState({
            type: 'Android2',
            isActive: true,
            title: '',
            okText: '主操作',
            cancelText: '辅助操作',
            onOk: () => {
                console.log('Android2, onOk.');
                this.setState({isActive: false})
            },
            renderBody: () => {
                return (
                    <span>弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内</span>
                )
            }
        });
    }

    handleHideDialog = () => {
        this.setState({
            isActive: false
        });
    }

    render() {
        return (
            <div className="Both-Type-div">
                <div className="Type-div" onClick={this.onIosClick1}>IOS Dialog样式一</div>
                <div className="Type-div" onClick={this.onIosClick2}>IOS Dialog样式二</div>
                <div className="Type-div" onClick={this.onAndroidClick1}>Android Dialog样式一</div>
                <div className="Type-div" onClick={this.onAndroidClick2}>Android Dialog样式二</div>
                <Dialog
                    type={this.state.type}       // 显示类型
                    isActive={this.state.isActive}   // 控制显示与否
                    title={this.state.title}      // title文字
                    renderBody={this.state.renderBody} // 中间body区域的渲染函数
                    okText={this.state.okText}     // 可定制，默认值为“确定”
                    cancelText={this.state.cancelText} // 可定制，默认值为“取消”
                    onOk={this.state.onOk}       // 确定（主操作）回调
                    onCancel={this.handleHideDialog}   // 取消（辅操作）回调
                />
            </div>
        );
    }
}