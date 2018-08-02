import React, { Component } from 'react';
import { columns } from './columns';
import { Table } from 'antd';
import { Link } from 'react-router'
import './tables.css';


export default class Tables extends Component {

    render() {
        const { ProfileInfo } = this.props;
        const { Students_Info } = ProfileInfo;
        const { SelectResult } = ProfileInfo;
        const pagination = false;
        const mid = 1001;
        if(!SelectResult.length) {
            return (
                <div className="table-div">
                    <Link to={`/op/${mid}`}>
                        <Table className="table-div"
                            columns={columns}
                            dataSource={Students_Info}
                            bordered
                            pagination={pagination}
                            title={() => ''}
                            rowKey={record => record.mid}
                            onRowClick={record => {
                                // <Link to="/op"></Link>
                            }}
                        />
                    </Link>
                </div>
            );
        }else {
            return (
                <div className="table-div">
                    <Link to={`/op/${mid}`}>
                        <Table className="table-div"
                            columns={columns}
                            dataSource={SelectResult}
                            bordered
                            pagination={pagination}
                            title={() => ''}
                            rowKey={record => record.mid}
                        />
                    </Link>
                </div>
            )
        }
    }
}
