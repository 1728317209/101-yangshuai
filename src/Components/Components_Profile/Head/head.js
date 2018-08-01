import React, { Component } from 'react';
import {  Input, Button, Select } from 'antd';
import './head2.css';

export default class Head extends Component {

    handleGetInput = (e) => {
        this.mid = e.target.value;
    }
    handleSelect = () => {
        const { select } = this.props;
        select(this.mid);
        
    }
    render() {

        const Option = Select.Option;
        return (
            <div>
                <div className="thishead">
                    <div className="div-left">
                        <Button>汇总</Button>
                        <Button>摄影课</Button>
                        <Button>绘画课</Button>
                    </div>
                    <div className="div-right">
                        <Select  className="Select" defaultValue="mid" style={{ width: 68 }}>
                            <Option value="mid">mid</Option>
                            <Option value="null">null</Option>
                        </Select>
                        <Input onChange={this.handleGetInput} style={{ width: 180 }}/>
                        <Button onClick={this.handleSelect}>搜索</Button>
                    </div>
                </div>
            </div>
        );
    }
}