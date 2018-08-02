import React from 'react';
import { Icon, Popover } from 'antd';

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
                <Popover content={content}>
                    <Icon type="user" />
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
    render: text => {
        if(text) {
            return <span>已回复</span>
        }else {
            return <span>待回复&nbsp;<Icon type="mail" className="replyIcon" onClick={this.onChangeReplyStatus}/> </span>
        }
    }
}];
