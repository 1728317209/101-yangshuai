import React, { Component } from 'react';
// import './tables.css';
import { columns } from './columns';
import { Table } from 'antd';

export default class Tables extends Component {
    
    render() {
        const { ClassInfo } = this.props;
        const { list } = ClassInfo;
        const pagination = false;
        return (
            <div>
                <Table className="classTable"
                    columns={columns}
                    dataSource={list}
                    bordered
                    pagination={pagination}
                    rowKey={record => record.mid}
                />
            </div>
        );
    }
}
