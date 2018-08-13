import React, { Component } from 'react';
import ReviewLeft from './ReviewLeft/reviewLeft';
import ReviewRigth from './ReviewRigth/reviewRigth';
import './review.css'

export default class Review extends Component {

    render() {
        const { Actions, selectedEmployee, AllEmployee, AllDepartment, AllDepartmentIds } = this.props;
        return (
            <div className="review">
                <div className="review-head">
                    <span>点评作业: 拥有个人点评页，可以对学生作业进行点评</span>
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
                            AllDepartmentIds={AllDepartmentIds}
                            AllDepartment={AllDepartment}
                            AllEmployee={AllEmployee}
                            selectedEmployee={selectedEmployee}
                            Actions={Actions}
                        />
                    </div>
                </div>
            </div>
        );
    }
}