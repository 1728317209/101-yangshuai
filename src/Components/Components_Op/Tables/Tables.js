import React, { Component } from 'react';
import './tables.css'
import { Table } from 'antd';
import { columns } from './columns';
import PropTypes from 'prop-types';

export default class Tables extends Component {
    
    static contextTypes = {
        router: PropTypes.object.isRequired,
    }

    lessons = (lessonIds, entities, classes, teachers) => lessonIds.map(id => {
        return {
            ...entities[id],
            classInfo: classes[entities[id].classInfo],
            teacherInfo: teachers[entities[id].teacherInfo]
        }
    })

    render() {
        const { currentLessonIds, historyLessonIds, lessonEntities } = this.props;
        const { classes, teachers, entities } = lessonEntities;
        const pagination = false;
        return (
            <div className="table-div">
                <div className="table">
                    <Table
                        columns={columns}
                        dataSource={this.lessons(currentLessonIds, entities, classes, teachers)}
                        bordered
                        pagination={pagination}
                        title={() => '在学课程'}
                        rowKey={record => record.classInfo.id}
                        onRow={record => {
                            return {
                                onClick: () =>{//onClick: ()不能写成onClick: (record) 
                                    this.context.router.push(`/classDetails/${record.classInfo.id}`)
                                }
                            };
                        }}
                    />
                </div>
                <div className="table">
                    <Table className="table-div"
                        columns={columns}
                        dataSource={this.lessons(historyLessonIds, entities, classes, teachers)}
                        bordered
                        pagination={pagination}
                        title={() => '历史数据'}
                        rowKey={record => record.classInfo.id}
                        onRow={record => {
                            return {
                                onClick: () =>{ //onClick: ()不能写成onClick: (record)  
                                    this.context.router.push(`/classDetails/${record.classInfo.id}`)
                                }
                            };
                        }}
                    />
                </div>
            </div>
        );
    }
}
