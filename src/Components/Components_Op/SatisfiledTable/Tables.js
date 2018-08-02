import React, { Component } from 'react';
import { Table } from 'antd';
import { columns } from './columns';

export default class Tables extends Component {
    onChangeReplyStatus =  (classId) => {
        const { Actions } = this.props;
        Actions.handleChangeReplyStatus(classId);
    }
    render() {
        const { SatisfiledList } = this.props;
        const pagination = false;
        return (
            <div className="table-div">
                <Table className="table-div"
                    columns={columns}
                    dataSource={SatisfiledList}
                    bordered
                    pagination={pagination}
                    title={() => ''}
                    rowKey={record => record.class_info.id}
                    onRowClick={record => {
                        this.onChangeReplyStatus(record.class_info.id);
                    }}
                />
            </div>
        );
    }
}
