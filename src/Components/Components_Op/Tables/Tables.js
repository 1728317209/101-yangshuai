import React, { Component } from 'react';
import './tables.css'
import { Table } from 'antd';
import { columns } from './columns';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import { Link } from 'react-router'

export default class Tables extends Component {
    
    static contextTypes = {
    
        router: PropTypes.object.isRequired,
    }

    render() {
        const { LearningCourse, HistoryData, router } = this.props;
        const pagination = false;
        return (
            <div className="table-div">
                <Table className="table-div"
                    columns={columns}
                    dataSource={LearningCourse}
                    bordered
                    pagination={pagination}
                    title={() => '在学课程'}
                    rowKey={record => record.classInfo.id}
                    onRowClick={(record) => {
                        router.push({ pathname : `classDetails/${record.classInfo.id}`});
                    }}

                />
                <Table className="table-div"
                    columns={columns}
                    dataSource={HistoryData}
                    bordered
                    pagination={pagination}
                    title={() => '历史数据'}
                    rowKey={record => record.classInfo.id}
                    onRowClick={(record) => {
                        this.context.router.push(`classDetails/${record.classInfo.id}`)
                        // router.push({ pathname : `classDetails/${record.classInfo.id}`});
                        // <Redirect to={`classDetails/${record.classInfo.id}`} />
                    }}
                />
            </div>
        );
    }
}
