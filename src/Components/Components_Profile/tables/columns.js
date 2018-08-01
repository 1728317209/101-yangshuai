import React from 'react';
import './tables.css';

function fun_render(text) {
    if(text.length) {
        return (
            <span>{text}</span>
        );
    }else {
        return (
            <span>无</span>
        );
    }
}

export const columns = [{
    title: '',
    dataIndex: 'hurl',
    render: text => {
        if(!text) {
            return (
                <span>无</span>
            );
        }else {
            return (
                <img className="img" src={text} alt=''/>
            );
        }
    }
}, {
    title: '学员名',
    dataIndex: 'nick',
}, {
    title: '学员编号/MID',
    dataIndex: 'mid',
}, {
    title: '入学时间',
    dataIndex: 'enter_time',
}, {
    title: '开课时间 ',
    dataIndex: 'start_time',
}, {
    title: '在学课程',
    dataIndex: 'learning_lessons',
    render: text => fun_render(text)
}, {
    title: '负责老师',
    dataIndex: 'teachers',
    render: text => fun_render(text)
}];