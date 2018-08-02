import React, { Component } from 'react';
import { Button } from 'antd';
import './ButtonBox.css';
import { Link } from 'react-router'


export default class ButtonBox extends Component {

    render() {
        return (
            <div className="ButtonBox">
                <Button>汇总</Button>
                <Button>摄影课</Button>
                <Button>绘画课</Button>
                <Link to="/" >
                    <Button className="btn-goback">返回</Button>
                </Link>
            </div>
        );
    }
}

