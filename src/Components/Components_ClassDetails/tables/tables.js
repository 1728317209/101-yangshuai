import React, { Component } from 'react';
import { columns } from './columns';
import { Table } from 'antd';

export default class Tables extends Component {

    render() {
        const { courses } = this.props;
        return (
            <div>
                <Table className="classTable"
                    columns={columns}
                    dataSource={courses}
                    bordered
                    pagination={false}
                    rowKey={(record,i) => `${record.time}_${i}`}
                />
            </div>
        );
    }
}
