import React, { Component } from 'react';
import { columns } from './columns';
import { Table } from 'antd';
import './tables.css';


export default class Tables extends Component {

    render() {
        const { router } = this.props;
        const { StudentsInfo, SelectedStudents, SelectedMids } = this.props;
        const pagination = false;
        if (!SelectedMids.length) {
            return (
                <div className="table-div">
                    <Table className="table-div"
                        columns={columns}
                        dataSource={StudentsInfo}
                        bordered
                        pagination={pagination}
                        rowKey={record => record.mid}
                        onRowClick={record => {
                            router.push({ pathname: `/op/${record.mid}` });
                        }}
                    />
                </div>
            );
        } else {
            return (
                <div className="table-div">
                    <Table className="table-div"
                        columns={columns}
                        dataSource={SelectedStudents}
                        bordered
                        pagination={pagination}
                        rowKey={record => record.mid}
                        onRowClick={record => {
                            router.push({ pathname: `/op/${record.mid}` });
                        }}
                    />
                </div>
            )
        }
    }
}
