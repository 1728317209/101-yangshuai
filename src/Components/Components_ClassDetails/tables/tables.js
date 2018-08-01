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
            <div className="table-div">
                <Table className="table-div"
                    columns={columns}
                    dataSource={list}
                    bordered
                    pagination={pagination}
                    title={() => ''}
                    rowKey={record => record.mid}
                />
            </div>
        );
    }
}
