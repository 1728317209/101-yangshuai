import React, { Component } from 'react';
import { Button, Input } from 'antd';
import './index.css';

export default class ReviewLeft extends Component {

    state = {
        selectedBtn: [],
        inputVal: ''
    }

    renderButton = () => {
        const { selectedEmployee, AllEmployee } = this.props;
        return selectedEmployee.map(id => {
            if(AllEmployee[id]) {
                if(this.state.selectedBtn.indexOf(id) === -1) {
                    return <Button key={AllEmployee[id].id} type='primary' onClick={() => this.onClickBtn(id)}>{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }else {
                    return <Button key={AllEmployee[id].id}>{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }
            }else {
                return null;
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
        this.setState({
            selectedBtn: []
        })
    }

    onInputChange = (e) => {
        this.setState({
            inputVal: e.target.value
        })
    }

    onSearch = () => {
        const { Actions } = this.props;
        // Actions.handleSearchEmp(parseInt(this.state.inputVal, 10));
        Actions.handleSearchSelectedEmp(parseInt(this.state.inputVal, 10));
        this.setState({
            inputVal: ''
        })
    }

    render() {
        return (
            <div>
                <div className="operation divider">
                    <Button onClick={this.handleDelEmployee}>删除</Button>
                    <Input onChange={this.onInputChange} value={this.state.inputVal}/>
                    <Button onClick={this.onSearch}>搜索</Button>
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