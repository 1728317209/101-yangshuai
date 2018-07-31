import React from 'react';
import { Icon } from 'antd';
import './tables.css'
function fun_render(text, type) {
    if(type==='percent') {
        let num = parseInt(text, 10);
        if(num<80){
            return <span className="Red">{text}</span>
        }else if(num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
    else if(type==='fraction') {
        let num1 = parseInt(text.split("/")[0], 10);
        let num2 = parseInt(text.split("/")[1], 10);
        const num = num1/num2;
        if(num<0.8){
            return <span className="Red">{text}</span>
        }else if(num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}
export const columns1 = [{
    title: '班级',
    dataIndex: 'degree',
    render: text => {
        return (
            <span><Icon type="exclamation-circle" /> {text}</span>
        );
    }
}, {
    title: '课程状态',
    dataIndex: 'status',
}, {
    title: '开课时间',
    dataIndex: 'startTime',
}, {
    title: '老师 ',
    dataIndex: 'teacher',
    render: text => {
        return (
            <span><Icon type="user" /> {text}</span>
        );
    }
}, {
    title: '上课率',
    dataIndex: 'rateOfAttend',
    render: (text) => fun_render(text, 'fraction')
}, {
    title: '作业提交率',
    dataIndex: 'rateOfHomework',
    render: (text) => fun_render(text, 'percent')
}, {
    title: '被点评情况',
    dataIndex: 'rateOfReview',
    render: (text) => fun_render(text, 'percent')
}, {
    title: '打卡率 ',
    dataIndex: 'rateOfSign',
    render: (text) => fun_render(text, 'fraction')
}, {
    title: '满意度',
    dataIndex: 'rateOfSatisfaction',
    render: (text) => fun_render(text, 'percent')
}];
export const columns2 = [{
    title: '班级',
    dataIndex: 'degree',
}, {
    title: '课程状态',
    dataIndex: 'status',
}, {
    title: '开课时间',
    dataIndex: 'startTime',
}, {
    title: '教学组负责人',
    dataIndex: 'teacher',
}, {
    title: '上课率',
    dataIndex: 'rateOfAttend',
    render: (text) => fun_render(text, 'fraction')
}, {
    title: '作业提交率',
    dataIndex: 'rateOfHomework',
    render: (text) => fun_render(text, 'percent')
}, {
    title: '被点评情况',
    dataIndex: 'rateOfReview',
    render: (text) => fun_render(text, 'percent')
}, {
    title: '打卡率 ',
    dataIndex: 'rateOfSign',
    render: (text) => fun_render(text, 'fraction')
}, {
    title: '满意度',
    dataIndex: 'rateOfSatisfaction',
    render: (text) => fun_render(text, 'percent')
}];