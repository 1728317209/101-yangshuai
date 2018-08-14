import React, { Component } from 'react';
import ReviewLeft from './ReviewLeft/reviewLeft';
import ReviewRigth from './ReviewRigth/reviewRigth';
import { Icon } from 'antd';
import './review.css'

export default class Review extends Component {

    closeView = (status) => {
        const { Actions } = this.props;
        Actions.handleSetIsShowView(status)
    }

    render() {
        const { isShowView, currentEmployee, departmentTree, Actions, selectedEmployee, AllEmployee } = this.props;
        if(isShowView) {
            return (
                <div className="review">
                    <div className="review-head">
                        <div>点评作业: 拥有个人点评页，可以对学生作业进行点评</div>
                        <div><Icon type="close" style={{ fontSize: 22, cursor: 'pointer'}} onClick={() => this.closeView(0)}/></div>
                    </div>
                    <div className="main">
                        <div className="left-div">
                            <ReviewLeft 
                                selectedEmployee={selectedEmployee}
                                Actions={Actions}
                                AllEmployee={AllEmployee}
                            />
                        </div>
                        <div className="rigth-div">
                            <ReviewRigth 
                                AllEmployee={AllEmployee}
                                selectedEmployee={selectedEmployee}
                                currentEmployee={currentEmployee}
                                Actions={Actions}
                                departmentTree={departmentTree}
                            />
                        </div>
                    </div>
                </div>
            );
        }else {
            return null;
        }
    }
}