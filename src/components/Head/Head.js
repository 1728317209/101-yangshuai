import React, { Component } from 'react';
import { mapStudents } from '../../Const/map_word'
import './Head.css';
import { Icon } from 'antd';

export default class Head extends Component {

    render() {
        const { Students_Info } = this.props;
        // console.log("123",Students_Info);
        return (
            <div className="head">
                <div className="head-left">
                    <img className="head-img" src={Students_Info.icon} alt='' />
                </div>
                <div className="head-right">
                    <div className="head-right-classId">
                        <span>{`${Students_Info.classId}班人`}</span>
                    </div>
                    <div className="head-right-otherInfo">
                        <div className="head-right-div">
                            <span>{`${mapStudents.studentId}: ${Students_Info.studentId}`}</span><br/>
                            <span>{`${mapStudents.course}: ${Students_Info.course}`}</span><br/>
                            <span>{`${mapStudents.admissionTime}: ${Students_Info.admissionTime}`}</span>
                        </div>
                        <div className="head-right-div">
                            <span>{`${mapStudents.paidAmount}: ${Students_Info.paidAmount}`}</span><br/>
                            <span>{`${mapStudents.howLong}: ${Students_Info.howLong}`}</span><br/>
                            <span>{`${mapStudents.lastLoginTime}: ${Students_Info.lastLoginTime}`}</span>
                        </div>
                        <div className="head-right-div">
                            <div>
                                <span>{`${mapStudents.phoneNumber}: ${Students_Info.phoneNumber}`}</span>
                                <Icon type="file" className="icon"/>
                            </div>
                            <div className="input">
                                <span className="input-word">微信号码:</span>
                                <input type='text' />
                                <input className="input-btn" type='button' value='提交'/>
                            </div>
                            <div className="input">
                                <span className="input-word">备注:</span>
                                <input type='text' />
                                <input className="input-btn" type='button' value='提交'/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

