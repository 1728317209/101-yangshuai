import React, { Component } from 'react';
import { mapStudents } from '../../Const/map_word'
import './Head.css';
import { Icon, Input, Button } from 'antd';

export default class Head extends Component {

    render() {
        const { Students_Info } = this.props;
        console.log(Students_Info)
        return (
            <div className="head">
                <div className="head-left">
                    <img className="head-img" src={Students_Info.hurl} alt='' />
                </div>
                <div className="head-right">
                    <div className="head-right-classId">
                        <span>{`${Students_Info.nick}`}</span>
                    </div>
                    <div className="head-right-otherInfo">
                        <div className="head-right-div">
                            <span>{`${mapStudents.studentId}: ${Students_Info.mid}`}</span><br/>
                            <span>{`${mapStudents.course}: ${Students_Info.learningLesson}`}</span><br/>
                            <span>{`${mapStudents.admissionTime}: ${Students_Info.enterDate}`}</span>
                        </div>
                        <div className="head-right-div">
                            <span>{`${mapStudents.paidAmount}: ${Students_Info.history_pay}`}</span><br/>
                            <span>{`${mapStudents.howLong}: ${Students_Info.totalLearningDays}`}</span><br/>
                            <span>{`${mapStudents.lastLoginTime}: ${Students_Info.lastLoginDate}`}</span>
                        </div>
                        <div className="head-right-div">
                            <div className="head-right-top">
                                <span className="head-right-top-span">{`${mapStudents.phoneNumber}: ${Students_Info.tel}`}</span>
                                <div className="icon">
                                    <Icon type="file"/>    
                                </div>
                            </div>
                            <div className="input">
                                <span className="input-word">微信号码:</span>
                                <Input size="small" />
                                <Button size="small" >提交</Button>
                            </div>
                            <div className="input">
                                <span className="input-word">备注:</span>
                                <Input size="small" />
                                <Button size="small">提交</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}