import React, { Component } from 'react';
import { Button } from 'antd';
import './partTop.css'

export default class PartTop extends Component {

    setIsShowView = (status) => {
        const { Actions } = this.props;
        Actions.handleSetIsShowView(status);
    }
    render() {
        return (
            <div>
                <div className="reviewTitle">
                    <h3>点评权限</h3>
                </div>
                <div className="review-div">
                    <span>点评作业: 拥有个人点评页，可以对学生作业进行点评</span>
                    <Button className="review-btn" onClick={() => this.setIsShowView(1)}>权限管理</Button>
                </div>
                <div className="review-div">
                    <span>带课老师: 拥有审核点评老师点评内容的权限，包括撤回点评，自行点评</span>
                    <Button className="review-btn" onClick={() => this.setIsShowView(2)} >权限管理</Button>
                </div>
            </div>
        );
    }
}