import React from 'react';
import { Icon, Popover } from 'antd';
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
function handleClick(e) {
    e.stopPropagation();
}
export const columns = [{
    title: '班级',
    dataIndex: 'classInfo.name',
    render: text => {
        return (
            <div>
                <Icon type="exclamation-circle" /> 
                {text}
            </div>
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
    dataIndex: 'teacherInfo',
    render: text => {
        const content = (
            <div>
                <p>老师昵称:{text.nick}&nbsp;ID:{text.id}&nbsp;微信:{text.wxCode}</p>
                <p>对应员工:{text.realName}&nbsp;MID:{text.mid}&nbsp;微信:{text.wxCode}</p>
            </div>
        )
        return (
            <div>
                <Popover content={content} trigger="click" >
                    <Icon type="user" onClick={(e) => handleClick(e)} />
                </Popover>
                {text.nick}
            </div>
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
