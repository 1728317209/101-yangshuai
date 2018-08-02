import React, { Component } from 'react';
import { Button } from 'antd';


export default class SatisfiledButton extends Component {

    render() {
        return (
            <div className="ButtonBox">
                <Button>汇总</Button>
                <Button>摄影课</Button>
                <Button>绘画课</Button>
            </div>
        );
    }
}

