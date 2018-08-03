import React, { Component } from 'react';
import { columns } from './columns';
import { Table } from 'antd';
import { Link } from 'react-router'
import './tables.css';


export default class Tables extends Component {

    render() {
        const { ProfileInfo, router } = this.props;
        const { Students_Info, SelectResult } = ProfileInfo;
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
                        locale={'无'}
                        // locale = { emptyText: '无'}
                        onRowClick={record => {
                            router.push({ pathname : `/op/${record.mid}`});
                        }}
                    />
                </div>
            );
        }else {
            return (
                <div className="table-div">
                {/* <Link to={`/op/${mid}`}> */}
                    <Table className="table-div"
                        columns={columns}
                        dataSource={SelectResult}
                        bordered
                        pagination={pagination}
                        title={() => ''}
                        rowKey={record => record.mid}
                        onRowClick={record => {
                            router.push({ pathname : `/op/${record.mid}`});
                        }}
                    />
                </div>
            )
        }
    }
}
