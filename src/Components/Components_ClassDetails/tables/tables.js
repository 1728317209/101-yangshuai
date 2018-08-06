import React, { Component } from 'react';
// import './tables.css';
import { columns } from './columns';
import { Table } from 'antd';

export default class Tables extends Component {
    

    list = (courseEntities, courseTimes) => courseTimes.map(time => {
        return courseEntities[time]
    })

    render() {
        const { courses } = this.props;
        const pagination = false;
        return (
            <div>
                <Table className="classTable"
                    columns={columns}
                    dataSource={courses}
                    bordered
                    pagination={pagination}
                    rowKey={record => record.mid}
                />
            </div>
        );
    }
}
