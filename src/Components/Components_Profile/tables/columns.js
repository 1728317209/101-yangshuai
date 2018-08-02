import React from 'react';
import './tables.css';

function fun_render_a(text) {
    if(text) {
        return (
            <span>{text}</span>
        );
    }else {
        return (
            <span>无</span>
        );
    }
}
function fun_render_b(text) {
    if(text.length) {
        return (
            <span>{text.join(' ')}</span>
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
    render: text => fun_render_a(text)
}, {
    title: '学员编号/MID',
    dataIndex: 'mid',
}, {
    title: '入学时间',
    dataIndex: 'enter_time',
    render: text => fun_render_a(text)
}, {
    title: '开课时间 ',
    dataIndex: 'start_time',
    render: text => fun_render_a(text)
}, {
    title: '在学课程',
    dataIndex: 'learning_lessons',
    render: text => fun_render_b(text)
}, {
    title: '负责老师',
    dataIndex: 'teachers',
    render: text => fun_render_b(text)
}];