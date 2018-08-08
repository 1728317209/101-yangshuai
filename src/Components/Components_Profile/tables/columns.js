import React from 'react';
import './tables.css';

export const columns = [{
    title: '',
    dataIndex: 'hurl',
    render: info => {
        return <span>{<img className="myImg" src={info} alt=''/> || '无'}</span>
    }
}, {
    title: '学员名',
    dataIndex: 'nick',
    render: info => {
        return <span>{info || '无'}</span>
    }
}, {
    title: '学员编号/MID',
    dataIndex: 'mid',
    align: 'center',
}, {
    title: '入学时间',
    dataIndex: 'enter_time',
    render: info => {
        return <span>{info || '无'}</span>
    }
}, {
    title: '开课时间 ',
    dataIndex: 'start_time',
    render: info => {
        return <span>{info || '无'}</span>
    }
}, {
    title: '在学课程',
    dataIndex: 'learning_lessons',
    align: 'center',
    render: info => {
        return <span>{info.join(' ')|| '无'}</span>
    }
}, {
    title: '负责老师',
    dataIndex: 'teachers',
    align: 'center',
    render: info => {
        return <span>{info.join(' ')|| '无'}</span>
    }
}];