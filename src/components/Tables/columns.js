import React from 'react';
import { Icon } from 'antd';
import './tables.css'
export const columns1 = [{
    title: '班级',
    dataIndex: 'degree',
    render: text => {
        return (
            <div>
                <Icon type="exclamation-circle" />
                <span>{text}</span>
            </div>
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
            <div>
                <Icon type="user" />
                <span>{text}</span>
            </div>
        );
    }
}, {
    title: '上课率',
    dataIndex: 'rateOfAttend',
    render: text=>{
        let num1 = parseInt(text.split("/")[0],10);
        let num2 = parseInt(text.split("/")[1],10);
        const num = num1/num2;
        if(num<0.8){
            return <span className="Red">{text}</span>
        }else if(num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}, {
    title: '作业提交率',
    dataIndex: 'rateOfHomework',
    render: text=>{
        let num = parseInt(text, 10);
        if(num<80){
            return <span className="Red">{text}</span>
        }else if(num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}, {
    title: '被点评情况',
    dataIndex: 'rateOfReview',
    render: text=>{
        let num = parseInt(text, 10);
        if(num<80){
            return <span className="Red">{text}</span>
        }else if(num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}, {
    title: '打卡率 ',
    dataIndex: 'rateOfSign',
    render: text=>{
        let num1 = parseInt(text.split("/")[0],10);
        let num2 = parseInt(text.split("/")[1],10);
        const num = num1/num2;
        if(num<0.80){
            return <span className="Red">{text}</span>
        }else if(num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}, {
    title: '满意度',
    dataIndex: 'rateOfSatisfaction',
    render: text=>{
        let num = parseInt(text, 10);
        if(num<80){
            return <span className="Red">{text}</span>
        }else if(num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}];
export const columns2 = [{
    title: '班级',
    dataIndex: 'degree',
    // render: text => <a href="javascript:;">{text}</a>,
}, {
    title: '课程状态',
    dataIndex: 'status',
}, {
    title: '开课时间',
    dataIndex: 'startTime',
}, {
    title: '老师 ',
    dataIndex: 'teacher',
}, {
    title: '上课率',
    dataIndex: 'rateOfAttend',
    render: text=>{
        let num1 = parseInt(text.split("/")[0],10);
        let num2 = parseInt(text.split("/")[1],10);
        const num = num1/num2;
        if(num<0.8){
            return <span className="Red">{text}</span>
        }else if(num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}, {
    title: '作业提交率',
    dataIndex: 'rateOfHomework',
    render: text=>{
        let num = parseInt(text, 10);
        if(num<80){
            return <span className="Red">{text}</span>
        }else if(num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}, {
    title: '被点评情况',
    dataIndex: 'rateOfReview',
    render: text=>{
        let num = parseInt(text, 10);
        if(num<80){
            return <span className="Red">{text}</span>
        }else if(num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}, {
    title: '打卡率 ',
    dataIndex: 'rateOfSign',
    render: text=>{
        let num1 = parseInt(text.split("/")[0],10);
        let num2 = parseInt(text.split("/")[1],10);
        const num = num1/num2;
        if(num<0.80){
            return <span className="Red">{text}</span>
        }else if(num>0.95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}, {
    title: '满意度',
    dataIndex: 'rateOfSatisfaction',
    render: text=>{
        let num = parseInt(text, 10);
        if(num<80){
            return <span className="Red">{text}</span>
        }else if(num>95){
            return <span className="Orange">{text}</span>
        }else{
            return <span>{text}</span>
        }
    }
}];