import React, { Component } from 'react';
import ActionSheet from '../../../Components/ComponentDemo/ActionSheet/ActionSheet';
import './demo.css'
export default class Demo extends Component {
    state = {
        isActive: false,
        title: '',
        menus: []
    }

    onIosClick = () => {
        this.setState({
            type: 'IOS',
            isActive: true,
            title: 'this is a ios title.',
            menus: [
                {
                    title: '菜单1',
                    click: () => console.log('菜单1')
                }, {
                    title: '菜单2',
                    click: () => console.log('菜单2')
                }, {
                    title: '菜单3',
                    click: () => console.log('菜单3')
                }
            ]
        });
    }

    onAndroidClick = () => {
        this.setState({
            type: 'Android',
            isActive: true,
            title: '',
            menus: [
                {
                    title: '菜单A',
                    click: () => console.log('菜单A')
                }, {
                    title: '菜单B',
                    click: () => console.log('菜单B')
                }, {
                    title: '菜单C',
                    click: () => console.log('菜单C')
                }
            ]
        });
    }

    handleHideActionSheet = () => {
        this.setState({
            isActive: false
        });
    }

    render() {
        return (
            <div className="Both-Type-div">
                <div className="Type-div" onClick={this.onIosClick}>IOS ActionSheet</div>
                <div className="Type-div" onClick={this.onAndroidClick}>Android ActionSheet</div>
                <ActionSheet
                    type={this.state.type}
                    isActive={this.state.isActive}
                    title={this.state.title}
                    menus={this.state.menus}
                    onCancel={this.handleHideActionSheet}
                />
            </div>
        );
    }
}