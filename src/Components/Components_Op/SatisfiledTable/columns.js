import React from 'react';
import { Icon, Popover } from 'antd';


function handleClick(e) {
    e.stopPropagation();
}

export const columns = [{
    title: '教程',
    dataIndex: 'course_name',
}, {
    title: '开课时间',
    dataIndex: 'time',
}, {
    title: '老师',
    dataIndex: 'teacher_info',
    render: text => {
        const content = (
            <div>
                <p>老师昵称:{text.nick}&nbsp;ID:{text.id}&nbsp;微信:{text.wx_code}</p>
                <p>对应员工:{text.real_name}&nbsp;MID:{text.mid}&nbsp;微信:{text.wx_code}</p>
            </div>
        )
        return (
            <div>
                <Popover content={content} trigger="click">
                    <Icon type="user" onClick={(e) => handleClick(e)} />
                </Popover>
                {text.nick}
            </div>
        );
    }
}, {
    title: '满意度评分',
    dataIndex: 'satisfied_score',
}, {
    title: '具体反馈',
    dataIndex: 'satisfied_detail',
}, {
    title: '操作',
    dataIndex: 'reply_status',
    // onCell: (text, record) => {
    //     return {
    //         onClick: {
    //             this.onChangeReplyStatus(record.class_info.id);
    //         }
    //     }
    // },
    render: text => {
        if(text) {

            return <span>已回复</span>
        }else {
            return <span>待回复&nbsp;<Icon type="mail" className="replyIcon"/> </span>
        }
    }
}];


