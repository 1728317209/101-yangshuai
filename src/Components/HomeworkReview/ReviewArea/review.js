import React, { Component } from 'react';
import { Input, Button } from 'antd';
import './index.css';
const { TextArea } = Input;

export default class Text extends Component {


    render() {
        return (
            <div className="big-div">
                <div className="textArea">
                    <TextArea rows={2} />
                </div>
                <div className="button">
                    <Button>发送</Button>
                </div>
            </div>
        );
    }
}