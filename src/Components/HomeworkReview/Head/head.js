import React, { Component } from 'react';
import {  Input, Button, Select } from 'antd';

export default class Head extends Component {

    constructor(props) {
        super(props);
        //默认按mid搜索
        this.option = 'mid';
    } 
    handleSelectChange = (value) => {
        this.option = value;
        console.log(value);
    }
    handleGetInput = (e) => {
        this.inputVal = e.target.value;
    }
    // handleSelect = () => {
    //     const { selectByMid, selectByNick } = this.props;
    //     if(this.option === 'mid') {
    //         selectByMid(parseInt(this.inputVal, 10));
    //     }else if(this.option === 'nick') {
    //         selectByNick(this.inputVal);
    //     }
    // }
    render() {

        const Option = Select.Option;
        const { HomeworkReviewInfo } = this.props;
        console.log('55555555555555555', HomeworkReviewInfo)
        // const commentator = HomeworkReviewInfo[754].commentator;
        return (
            <div>
                <div className="thishead">
                    <div>
                        <span>{"commentator"}</span>
                    </div>
                    <div className="div-right">
                        <Select  className="Select" defaultValue="mid" onChange={this.handleSelectChange} style={{ width: 70 }}>
                            <Option value="mid">mid</Option>
                            <Option value="nick">nick</Option>
                        </Select>
                        <Input onChange={this.handleGetInput} style={{ width: 180 }}/>
                        <Button onClick={this.handleSelect}>搜索</Button>
                    </div>
                </div>
            </div>
        );
    }
}