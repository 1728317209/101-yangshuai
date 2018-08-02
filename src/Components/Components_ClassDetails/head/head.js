import React, { Component } from 'react';
import './head.css';

export default class Head extends Component {

    render() {
        const { ClassInfo } = this.props;
        const { basic_info, real_teacher, virtual_teacher } = ClassInfo;
        return (
            <div className="class_head">
                <strong>班级:{basic_info.name}</strong>
                <strong>班级ID:{basic_info.id}</strong>
                <strong>老师:{virtual_teacher.nick}/ID{virtual_teacher.id}/微信{virtual_teacher.wx_code}</strong>
                <strong>负责员工:{real_teacher.name}/ID{real_teacher.mid}/微信{real_teacher.wx_code}</strong>
            </div>
        );
    }
}