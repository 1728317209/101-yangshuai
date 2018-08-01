import React, { Component } from 'react';
import './tables.css';
import { columns } from './columns';
import { Table } from 'antd';

export default class Tables extends Component {
    render() {
        const { ProfileInfo } = this.props;
        const { Students_Info } = ProfileInfo;
        const { SelectResult } = ProfileInfo;
        const pagination = false;
        if(!SelectResult.length) {
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
        }else {
            return (
                <div className="table-div">
                    <Table className="table-div"
                        columns={columns}
                        dataSource={SelectResult}
                        bordered
                        pagination={pagination}
                        title={() => ''}
                        rowKey={record => record.mid}
                    />
                </div>
            )
        }
    }
}
