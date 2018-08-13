import React, { Component } from 'react';
import { Button, Input } from 'antd';
import './index.css';

export default class ReviewLeft extends Component {

    state = {
        selectedBtn: []
    }

    renderButton = () => {
        const { selectedEmployee, AllEmployee } = this.props;
        return selectedEmployee.map(id => {
            if(AllEmployee[id]) {
                if(this.state.selectedBtn.indexOf(id) === -1) {
                    return <Button onClick={() => this.onClickBtn(id)}>{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }else {
                    return <Button disabled>{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }
            }
        })
    }

    onClickBtn = (id) => {
        this.setState({
            selectedBtn: [...this.state.selectedBtn, id]
        });
    }

    handleDelEmployee = () => {
        const { Actions } = this.props;
        Actions.handleDelEmployee(this.state.selectedBtn);
    }

    render() {
        return (
            <div>
                <div className="operation">
                    <Button onClick={this.handleDelEmployee}>删除</Button>
                    <Input />
                    <Button>搜索</Button>
                </div>
                <div className="bottom-btn">
                    {
                        this.renderButton()
                    }
                </div>
            </div>
        );
    }
}