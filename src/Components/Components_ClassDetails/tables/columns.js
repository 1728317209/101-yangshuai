import React from 'react';
import { Icon } from 'antd';
import './tables.css';

function fun_render(text) {
    if(text === 0) {
        return (
            <Icon type="close" />
        );
    }else if(text === 1) {
        return (
            <Icon type="check" />
        );
    }else if(text === -1) {
        return (
            <Icon type="minus" />
        );
    }
}

export const columns = [{
    title: '上课内容',
    dataIndex: 'course_name',
}, {
    title: '上课时间',
    dataIndex: 'time',
}, {
    title: '上课情况',
    dataIndex: 'enter_status',
    render: text => fun_render(text)
}, {
    title: '作业提交情况 ',
    dataIndex: 'homework_status',
    render: text => fun_render(text)
}, {
    title: '被点评情况',
    dataIndex: 'review_status',
    render: text => fun_render(text)
}, {
    title: '打卡情况',
    dataIndex: 'clockin_status',
    render: text => fun_render(text)
}, {
    title: '满意度评分',
    dataIndex: 'satisfied_score',
    render: text => {
        if(text<5) {
            return <span className="red">{text}</span>
        }else {
            return <span>{text}</span>
        }
    }
}];
