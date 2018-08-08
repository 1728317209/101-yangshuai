import React, { Component } from 'react';
import { Switch, Avatar } from 'antd';
import './index.css';
export default class Head extends Component {

    onChange = (homeworkId) => {
        const { Actions } = this.props;
        console.log(`switch to ${homeworkId}`);
        Actions.handleChangeIsExcellent(homeworkId);
    }
    renderSwitch = (status, homeworkId) => {
        if(status){
            return <Switch defaultChecked='true' onChange={() => {this.onChange(homeworkId)}} />
        }else {
            return <Switch defaultChecked='false' onChange={() => {this.onChange(homeworkId)}} />
        }
    }
    render() {
        const { thisHomeworkInfo } = this.props;
        const { author, classInfo, teacherInfo } = thisHomeworkInfo;
        return (
            <div className="HomeworkInfo">
                <div className="Homework-NO">
                    <span>{`NO.${thisHomeworkInfo.id}`}</span>
                </div>
                <div className="Homework-Img">
                    <Avatar>U</Avatar>
                </div>
                <div className="Homework-div">
                    <div>
                        <span>{`作业:${thisHomeworkInfo.description} `}</span>
                    </div>
                    <div>
                        <span>{`${author.nick} MID:${author.mid} `}</span>
                        <span>{classInfo.name}</span>
                        <span>{teacherInfo.nick}</span>
                        <span>{` 点评人:${thisHomeworkInfo.commentator} `}</span>
                        <span>{`提交时间:${thisHomeworkInfo.time}`}</span>
                    </div>
                </div>
                <div>
                    {/* <Switch defaultChecked onChange={() => {this.onChange(thisHomeworkInfo.id)}} /> */}
                    {
                        this.renderSwitch(thisHomeworkInfo.isExcellent, thisHomeworkInfo.id)
                    }
                </div>
            </div>
        );
    }
}