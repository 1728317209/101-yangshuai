import React from 'react';
import { Icon } from 'antd';
import './tables.css'
function fun_render(text, type) {
    var num = null;
    if(type==='decimal') {
        num = text;
    }
    else if(type==='fraction') {
        const num1 = parseInt(text.split("/")[0], 10);
        const num2 = parseInt(text.split("/")[1], 10);
        num = num1/num2;
    }
    if(num<0.8){
        return <span className="Red">{text}</span>
    }else if(num>0.95){
        return <span className="Orange">{text}</span>
    }else{
        return <span>{text}</span>
    }
}
export const columns1 = [{
    title: '班级',
    dataIndex: 'classInfo.name',
    render: text => {
        return (
            <span><Icon type="exclamation-circle" /> {text}</span>
        );
    }
}, {
    title: '课程状态',
    dataIndex: 'status',
    render: text => {
        if(text){
            return <span>进行中</span>
        }else {
            return <span>已结束</span>
        }
    }
}, {
    title: '开课时间',
    dataIndex: 'startTime',
}, {
    title: '老师',
    dataIndex: 'teacherInfo.nick',
    render: text => {
        return (
            <span><Icon type="user" /> {text}</span>
        );
    }
}, {
    title: '上课率',
    dataIndex: 'enterRate',
    render: (text) => fun_render(text, 'fraction')
}, {
    title: '作业提交率',
    dataIndex: 'homeworkSubmitRate',
    render: (text) => fun_render(text, 'decimal')
}, {
    title: '被点评情况',
    dataIndex: 'beCommenttedRate',
    render: (text) => fun_render(text, 'decimal')
}, {
    title: '打卡率 ',
    dataIndex: 'signRate',
    render: (text) => fun_render(text, 'fraction')
}, {
    title: '满意度',
    dataIndex: 'satisfyRate',
    render: (text) => fun_render(text, 'decimal')
}];
export const columns2 = [{
    title: '班级',
    dataIndex: 'classInfo.name',
}, {
    title: '课程状态',
    dataIndex: 'status',
    render: text => {
        if(text){
            return <span>已结束</span>
        }else {
            return <span>进行中</span>
        }
    }
}, {
    title: '开课时间',
    dataIndex: 'startTime',
}, {
    title: '老师',
    dataIndex: 'teacherInfo.nick',
}, {
    title: '上课率',
    dataIndex: 'enterRate',
    render: (text) => fun_render(text, 'fraction')
}, {
    title: '作业提交率',
    dataIndex: 'homeworkSubmitRate',
    render: (text) => fun_render(text, 'decimal')
}, {
    title: '被点评情况',
    dataIndex: 'beCommenttedRate',
    render: (text) => fun_render(text, 'decimal')
}, {
    title: '打卡率 ',
    dataIndex: 'signRate',
    render: (text) => fun_render(text, 'fraction')
}, {
    title: '满意度',
    dataIndex: 'satisfyRate',
    render: (text) => fun_render(text, 'decimal')
}];