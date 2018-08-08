import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './index.css';
const { TextArea } = Input;

export default class Text extends Component {

    constructor(props) {
        super(props);
        this.content = '';
    }

    handleChange = (e) => {
        this.content = e.target.value;
    }

    handleClick = (e) => {
        if(this.content) {
            const { Actions, homeworkId, TabKey } = this.props;
            const time = Date.parse(new Date())/1000;
            Actions.handleSendReviewComments(homeworkId, this.content, time, TabKey)
            this.content = '';
        }else {
            alert('NO REVIEW!')
        }
        
    }

    render() {
        return (
            <div className="big-div">
                <div className="textArea">
                    <TextArea autosize={true} onChange={this.handleChange}/>
                </div>
                <div className="button">
                    <Button onClick={this.handleClick}>发送</Button>
                </div>
            </div>
        );
    }
}