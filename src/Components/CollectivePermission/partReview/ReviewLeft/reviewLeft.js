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
                if(AllEmployee[id].isToDel) {
                    return <Button key={AllEmployee[id].id} type='primary' onClick={() => this.onClickBtn(id)} >{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }else {
                    return <Button key={AllEmployee[id].id} onClick={() => this.onClickBtn(id)}>{`${AllEmployee[id].name} ${AllEmployee[id].id}`}</Button>
                }
            }else {
                return null;
            }
        })
    }

    onClickBtn = (id) => {
        const { Actions } = this.props;
        Actions.handleSelectEmpToDel(id);
    }

    handleDelEmployee = () => {
        const { Actions } = this.props;
        Actions.handleDelEmployee();
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
        Actions.handleSearchSelectedEmp(this.state.inputVal);
        this.setState({
            inputVal: ''
        })
    }

    render() {
        return (
            <div>
                <div className="operation">
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