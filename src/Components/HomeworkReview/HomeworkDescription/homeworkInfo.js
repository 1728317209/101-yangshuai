import React, { Component } from 'react';
import { Switch, Avatar } from 'antd';
import './index.css';
export default class Head extends Component {

    onChange = (checked) => {
        console.log(`switch to ${checked}`);
    }

    render() {

        const {
            HomeworkReviewInfo,
            author,
            classInfo,
            teacherInfo
        } = this.props;

        return (
            <div className="HomeworkInfo">
                <div className="Homework-NO">
                    <span>{`NO.${HomeworkReviewInfo.id}`}</span>
                </div>
                <div className="Homework-Img">
                    <Avatar>U</Avatar>
                </div>
                <div className="Homework-div">
                    <div>
                        <span>{`作业:${HomeworkReviewInfo.description} `}</span>
                    </div>
                    <div>
                        <span>{`${author.nick} MID:${author.mid} `}</span>
                        <span>{classInfo.name}</span>
                        <span>{teacherInfo.nick}</span>
                        <span>{` 点评人:${HomeworkReviewInfo.commentator} `}</span>
                        <span>{`提交时间:${HomeworkReviewInfo.time}`}</span>
                    </div>
                </div>
                <div>
                    <Switch defaultChecked onChange={this.onChange} />
                </div>
            </div>
        );
    }
}