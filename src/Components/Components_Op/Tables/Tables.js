import React, { Component } from 'react';
import './tables.css'
import { Table } from 'antd';
import { columns1, columns2 } from './columns';
import { Link } from 'react-router'

export default class Tables extends Component {

    render() {
        const classId = 765765;
        const { LearningCourse, HistoryData } = this.props;
        const pagination = false;
        return (
            <div className="table-div">
                <Link to={`classDetails/${classId}`}>
                    <Table className="table-div"
                        columns={columns1}
                        dataSource={LearningCourse}
                        bordered
                        pagination={pagination}
                        title={() => '在学课程'}
                        rowKey={record => record.classInfo.id}
                    />
                </Link>
                <Link to={`classDetails/${classId}`}>
                    <Table className="table-div"
                        columns={columns2}
                        dataSource={HistoryData}
                        bordered
                        pagination={pagination}
                        title={() => '历史数据'}
                        rowKey={record => record.classInfo.id}
                    />
                </Link>
            </div>
        );
    }
}
