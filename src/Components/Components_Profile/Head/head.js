import React, { Component } from 'react';
import { Icon, Input, Button, Select } from 'antd';
import './head2.css';
import Tables from '../tables/tables';

export default class Head extends Component {

    // constructor(props) {
    //     super(props);
    //     const { ProfileInfo } = this.props;
    //     const { StudentsInfo } = ProfileInfo;
    //     console.log(123, ProfileInfo);
    //     this.tempStudentsInfo = { ...StudentsInfo };
    //     console.log(456, this.tempStudentsInfo);
    // }

    handleSelect = (mid) => {
        // const { StudentsInfo } = this.props;
        // this.tempStudentsInfo = StudentsInfo;
    }
    render() {
        // const { StudentsInfo } = this.props;
        const Option = Select.Option;
        return (
            <div>
                <div className="head">
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
                        <Input style={{ width: 180 }}/>
                        <Button>搜索</Button>
                    </div>
                </div>
            </div>
        );
    }
}