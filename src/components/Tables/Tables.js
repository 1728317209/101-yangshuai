import React, { Component } from 'react';
import './tables.css'
import { Table } from 'antd';
import { columns1, columns2 } from './columns';

export default class Tables extends Component {

    render() {
        const { LearningCourse, HistoryData } = this.props;
        const pagination = false;
        return (
            <div className="table">
                <Table
                    columns={columns1}
                    dataSource={LearningCourse}
                    bordered
                    pagination={pagination}
                    title={() => '在学课程'}
                />
                <Table
                    columns={columns2}
                    dataSource={HistoryData}
                    bordered
                    pagination={pagination}
                    title={() => '历史数据'}
                />
            </div>
        );
    }
}
