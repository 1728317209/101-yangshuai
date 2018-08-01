import React, { Component } from 'react';
import './tables.css';
import { columns } from './columns';
import { Table } from 'antd';

export default class Tables extends Component {
    render() {
        // const { state } = this.props;
        const { ProfileInfo } = this.props;
        const { Students_Info } = ProfileInfo;
        
        const pagination = false;
        return (
            <div className="table-div">
                <Table className="table-div"
                    columns={columns}
                    dataSource={Students_Info}
                    bordered
                    pagination={pagination}
                    title={() => ''}
                    rowKey={record => record.mid}
                />
            </div>
        );
    }
}
