import React, { Component } from 'react';
import { Button } from 'antd';
import './partTop.css'

export default class PartTop extends Component {

    render() {
        return (
            <div>
                <div className="reviewTitle">
                    <h3>点评权限</h3>
                </div>
                <div className="review-div">
                    <span>点评作业</span>
                    <Button className="review-btn" >权限管理</Button>
                </div>
                <div className="review-div">
                    <span>带课老师</span>
                    <Button className="review-btn" >权限管理</Button>
                </div>
            </div>
        );
    }
}