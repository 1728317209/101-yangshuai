import React, { Component } from 'react';
import { columns } from './columns';
import { Table } from 'antd';
import './tables.css';


export default class Tables extends Component {

    StudentsInfo = (StudentsMids, StudentsEntities) => StudentsMids.map(mid => {
        return StudentsEntities[mid];
    })
    SelectedStudents = (SelectedMids, StudentsEntities) => SelectedMids.map(mid => {
        return StudentsEntities[mid];
    })
    render() {
        const { ProfileInfo, router } = this.props;
        const { StudentsMids, StudentsEntities, SelectedMids } = ProfileInfo;
        const pagination = false;
        if(!SelectedMids.length) {
            return (
                <div className="table-div">
                    <Table className="table-div"
                        columns={columns}
                        dataSource={this.StudentsInfo(StudentsMids, StudentsEntities)}
                        bordered
                        pagination={pagination}
                        // title={() => ''}
                        rowKey={record => record.mid}
                        onRowClick={record => {
                            router.push({ pathname : `/op/${record.mid}`});
                        }}
                    />
                </div>
            );
        }else {
            return (
                <div className="table-div">
                    <Table className="table-div"
                        columns={columns}
                        dataSource={this.SelectedStudents(SelectedMids, StudentsEntities)}
                        bordered
                        pagination={pagination}
                        // title={() => ''}
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
